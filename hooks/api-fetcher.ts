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

  const fetcher = async (
    endpoint: E,
    config: EndpointConfig[E]["request"]
  ): Promise<EndpointConfig[E]["response"] | null> => {
    try {
      setIsPending(true);

      // mock 3s delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const session = await fetch("/api/user/me").then((res) => res.json());
      if (!session?.bearerToken) {
        throw new Error("Session not found or invalid.");
      }
      const bearerToken = session.bearerToken;

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
        const statusCode = response.status;
        const errorMessages: Record<string, string> = {
          "401": "Nicht autorisiert",
          "402": "Nicht genug Token verfügbar",
          "403": "Zugriff verweigert",
          "404": "Ressource nicht gefunden",
          "500": "Interner Serverfehler",
        }
        const errorMessage = errorMessages[statusCode.toString()] || "Ein Fehler ist aufgetreten.";
        throw new Error(errorMessage);
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (error) {
      console.log("Error in API fetcher:", error);
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
