import { wait } from "@/app/lib/tools";

export default async function PromiseComponent() {
  await wait(3000);
  return <div>Promise Component</div>;
}
