import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen">
      <p>Hello World</p>
      <div className="flex space-x-4">
        <Link href="/server">
          <p className="p-4 rounded-md border cursor-pointer hover:bg-gray-100">
            Go to server page
          </p>
        </Link>
        <Link href="/client">
          <p className="p-4 rounded-md border cursor-pointer hover:bg-gray-100">
            Go to client page
          </p>
        </Link>
      </div>
    </div>
  );
}
