import { getServerSession } from "next-auth/next";
import { authOptions } from "@/configs/next-auth";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </main>
  );
};

export default SignIn;
