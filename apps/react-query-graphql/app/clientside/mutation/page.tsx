"use client";

import { useMutation } from "@tanstack/react-query";
import { useCustomerLoginMutation } from "@/graphql/generated/second-endpoint";

export default function ClientMutation() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      phoneNumber,
      password,
    }: {
      phoneNumber: string;
      password: string;
    }) => {
      return useCustomerLoginMutation.fetcher(
        {
          phoneNumber,
          password,
        },
        {
          test: "123",
        }
      )();
    },
  });

  const handleSubmit = () => {
    mutate({
      phoneNumber: "0912345678",
      password: "Q12345678",
    });
  };

  return (
    <div className="space-y-4 p-4">
      <p className="text-2xl font-bold">Client Mutation</p>
      <button
        className="rounded border border-black p-2"
        onClick={handleSubmit}
      >
        送出
      </button>
      {isPending && <div>Loading...</div>}
      {error && <div>錯誤: {(error as Error).message}</div>}
    </div>
  );
}
