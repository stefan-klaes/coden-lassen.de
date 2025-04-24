import React from "react";

export default function OfficialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-24 p-4 w-full max-w-screen-md mx-auto">
      <div className="bg-accent p-4 border rounded">{children}</div>
    </div>
  );
}
