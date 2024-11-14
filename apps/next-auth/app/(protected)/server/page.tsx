import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { sleep } from "@/lib/promise";

export default async function ServerPage() {
  const user = await currentUser();
  await sleep(3000);

  return <UserInfo user={user} label="Server component" />;
}
