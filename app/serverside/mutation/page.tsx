import { QueryClient } from "@tanstack/react-query";
import {
  useCustomerLoginMutation,
  CustomerLoginMutation,
} from "@/graphql/generated/second-endpoint";

export default async function ServerComponent() {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery<CustomerLoginMutation>({
    queryKey: ["login"],
    queryFn: useCustomerLoginMutation.fetcher({
      phoneNumber: "0912345678",
      password: "Q12345678",
    }),
  });

  return (
    <div className="space-y-4 p-4">
      <p className="text-2xl font-bold">Backend Server Mutation</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
