"use client";
import { useFirstExampleQuery } from "@/graphql/generated/first-endpoint";

export function ChildButton() {
  const { refetch } = useFirstExampleQuery({ id: 1 });

  return (
    <button
      className="rounded border border-black p-2"
      onClick={() => refetch()}
    >
      children refetch
    </button>
  );
}
