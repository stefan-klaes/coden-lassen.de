import { useSession } from "@/components/provider/session-provider";
import { API_URL } from "@/config/config";
import { useState } from "react";
import { toast } from "sonner";

// Define supported endpoints
export type Endpoint =
  | "image-alt-text"
  | "get-api-key"
  | "create-api-key"
  | "delete-api-key";

// Request/response types for each endpoint
type EndpointConfig = {
  "image-alt-text": {
    request: {
      method: "POST";
      body: {
        base64Url: string;
        language: string;
      };
    };
    response: {
      altText: string;
      fileName: string;
    } | null;
  };
  "get-api-key": {
    request: {
      method: "GET";
      body: null;
    };
    response: {
      apiKeys: string[];
    };
  };
  "create-api-key": {
    request: {
      method: "POST";
      body: null;
    };
    response: {
      apiKey: string;
    };
  };
  "delete-api-key": {
    request: {
      method: "DELETE";
      body: {
        apiKey: string;
      };
    };
    response: null;
  };
};

const ENDPOINTS: Record<Endpoint, string> = {
  "image-alt-text": "/api/simplest-ai-helper/image-alt-text",
  "get-api-key": "/iam/project/api-key/get",
  "create-api-key": "/iam/project/api-key/create",
  "delete-api-key": "/iam/project/api-key/delete",
};

export function useApiFetcher<E extends Endpoint>() {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<EndpointConfig[E]["response"] | null>(null);

  const reset = () => {
    setIsPending(false);
    setData(null);
  };

  const { refetchSession } = useSession();

  // Helper to get cookie value by name
  function getCookie(name: string): string | null {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? decodeURIComponent(match[2]) : null;
  }

  // Helper to set cookie
  function setCookie(name: string, value: string, days = 1) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  const fetcher = async (
    endpoint: E,
    config: EndpointConfig[E]["request"]
  ): Promise<EndpointConfig[E]["response"] | null> => {
    try {
      setIsPending(true);

      // mock 3s delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Try to get bearer token from cookie first
      let bearerToken = getCookie("sclbrtkn");

      if (!bearerToken) {
        const session = await fetch("/api/user/me").then((res) => res.json());
        if (!session?.bearerToken) {
          throw new Error("Session not found or invalid.");
        }
        bearerToken = session.bearerToken;
        if (bearerToken) {
          setCookie("sclbrtkn", bearerToken);
        }
      }

      const url = `${API_URL}${ENDPOINTS[endpoint]}`;
      console.log({ url, bearerToken });
      const response = await fetch(url, {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : undefined,
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Alt-Text-Generierung fehlgeschlagen.");
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (error) {
      console.error("Error in API fetcher:", error);
      toast.error(
        error instanceof Error ? error.message : "Ein Fehler ist aufgetreten."
      );
      setData(null);
      return null;
    } finally {
      setIsPending(false);
      refetchSession();
    }
  };

  return { fetcher, isPending, data, setData, reset };
}
