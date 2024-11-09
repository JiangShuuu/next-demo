import { Button } from "@repo/ui/components/ui/button";
import { DialogDemo } from "../app/components/dialog";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-center h-screen">
      <Button size={"lg"}>Open alert</Button>
      <DialogDemo />
    </div>
  );
}
