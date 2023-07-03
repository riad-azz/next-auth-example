import { getServerSession } from "next-auth/next";
import { authOptions } from "@/configs/next-auth";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex min-h-screen items-center justify-center">
      {user ? (
        <UserInfo user={user} />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 p-5 w-fit shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold">Next-Auth Example</h1>
          <p className="flex gap-2">
            You must be signed in to view this page
            <Link href="/signin">
              <span className="text-blue-500 cursor-pointer hover:underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      )}
    </main>
  );
}
