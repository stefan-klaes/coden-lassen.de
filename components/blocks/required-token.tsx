import { SparkleIcon } from "lucide-react"

export default function RequiredToken({ requiredToken }: { requiredToken: number }) {
  
    return (
      <div className="text-purple-700 mb-2 max-w-screen-md mx-auto flex items-center justify-center gap-2 text-xs px-2 py-1 rounded-full border bg-gradient-to-br from-purple-50 to-purple-100">
        <SparkleIcon className="size-4" />
        <span>
          <span className="font-semibold">{requiredToken} Token</span> benötigt
        </span>
      </div>
    );
}