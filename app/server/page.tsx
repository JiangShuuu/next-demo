import { wait } from "../lib/tools";
import PromiseComponent from "./component/promise";

export default async function ServerPage() {
  await wait(2000);
  return (
    <div>
      Server Page
      <PromiseComponent />
    </div>
  );
}
