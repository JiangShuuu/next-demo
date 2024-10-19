import { wait } from "@/app/lib/tools";

export default async function ServerPage({
  params,
}: {
  params: { id: string };
}) {
  await wait(5000);
  return <div>Server Page {params.id}</div>;
}
