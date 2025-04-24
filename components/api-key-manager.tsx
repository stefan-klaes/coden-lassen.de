"use client";

import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { useApiFetcher } from "@/hooks/api-fetcher";
import {
  Loader2Icon,
  Eye,
  EyeOff,
  Trash2,
  Copy as CopyIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Fragment } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { toast } from "sonner";

export default function ApiKeyManager({
  session,
}: {
  session: Session | null;
}) {
  const { fetcher, isPending, data } = useApiFetcher<"get-api-key">();
  const [showApiKeys, setShowApiKeys] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [deleteDialogIdx, setDeleteDialogIdx] = useState<number | null>(null);
  const [deletingIdx, setDeletingIdx] = useState<number | null>(null);

  const fetchApiKey = async () => {
    await fetcher("get-api-key", {
      method: "GET",
      body: null,
    });
  };

  useEffect(() => {
    fetchApiKey();
  }, [session?.user?.project?.id]);

  // Callback to refetch API key after creation
  const handleApiKeyCreated = async () => {
    await fetchApiKey();
    // Optionally show all after creation
    if (data?.apiKeys) {
      const showAll: { [key: number]: boolean } = {};
      data.apiKeys.forEach((_, i) => (showAll[i] = true));
      setShowApiKeys(showAll);
    }
  };

  return (
    <div className="p-4 rounded shadow-md">
      <p className="text-muted-foreground">
        API Keys
        {Array.isArray(data?.apiKeys) && data.apiKeys.length >= 3
          ? " (max. 3)"
          : ""}
        :
      </p>
      <div className="flex flex-col gap-2">
        {isPending ? (
          <div className="mt-2">
            <div className="animate-pulse w-full max-w-72 h-5 bg-gray-100 rounded" />
          </div>
        ) : Array.isArray(data?.apiKeys) && data.apiKeys.length > 0 ? (
          data.apiKeys.map((apiKey: string, idx: number) => (
            <Fragment key={idx}>
              <div className="flex items-center gap-2">
                <span className="truncate font-semibold text-purple-700 text-sm">
                  {showApiKeys[idx] ? apiKey : new Array(36).fill("•").join("")}
                </span>
                <div className="ml-auto flex gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-6 p-0"
                    onClick={async () => {
                      await navigator.clipboard.writeText(apiKey);
                      toast.success("API Key kopiert", { duration: 2000 });
                    }}
                    aria-label="Copy API Key"
                  >
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-6 p-0"
                    onClick={() =>
                      setShowApiKeys((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    aria-label={
                      showApiKeys[idx] ? "Hide API Key" : "Show API Key"
                    }
                  >
                    {showApiKeys[idx] ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                  <Dialog
                    open={deleteDialogIdx === idx}
                    onOpenChange={(open) =>
                      setDeleteDialogIdx(open ? idx : null)
                    }
                  >
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-6 p-0 text-destructive hover:text-destructive"
                        aria-label="Delete API Key"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>API Key löschen</DialogTitle>
                        <DialogDescription>
                          Möchtest du diesen API Key wirklich löschen?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button
                            variant="outline"
                            disabled={deletingIdx === idx}
                          >
                            Abbrechen
                          </Button>
                        </DialogClose>
                        <DeleteApiKeyButton
                          apiKey={apiKey}
                          onDeleted={async () => {
                            setDeleteDialogIdx(null);
                            setDeletingIdx(null);
                            await fetchApiKey();
                          }}
                          onLoadingChange={(loading) =>
                            setDeletingIdx(loading ? idx : null)
                          }
                        />
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <p className="font-semibold text-purple-700 text-sm">
            kein API Key erstellt
          </p>
        )}
      </div>
      {Array.isArray(data?.apiKeys) && data.apiKeys.length < 3 ? (
        <div className="mt-4">
          <CreateApiKeyButton
            isPending={isPending}
            onCreated={handleApiKeyCreated}
          />
        </div>
      ) : null}
    </div>
  );
}

function DeleteApiKeyButton({
  apiKey,
  onDeleted,
  onLoadingChange,
}: {
  apiKey: string;
  onDeleted: () => void;
  onLoadingChange: (loading: boolean) => void;
}) {
  const { fetcher, isPending } = useApiFetcher<"delete-api-key">();

  const handleDelete = async () => {
    onLoadingChange(true);
    await fetcher("delete-api-key", {
      method: "DELETE",
      body: { apiKey },
    });
    onLoadingChange(false);
    onDeleted();
  };

  return (
    <Button onClick={handleDelete} variant="destructive" disabled={isPending}>
      {isPending ? <Loader2Icon className="size-3 animate-spin" /> : "Löschen"}
    </Button>
  );
}

function CreateApiKeyButton({
  onCreated,
  isPending,
}: {
  onCreated?: () => void;
  isPending: boolean;
}) {
  const { fetcher, isPending: isCreatePending } =
    useApiFetcher<"create-api-key">();

  const createApiKey = async () => {
    await fetcher("create-api-key", {
      method: "POST",
      body: null,
    });
    if (onCreated) onCreated();
  };

  return (
    <Button
      onClick={createApiKey}
      disabled={isPending || isCreatePending}
      variant="secondary"
      size="sm"
    >
      {isCreatePending ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        <PlusIcon />
      )}
      API Key erstellen
    </Button>
  );
}
