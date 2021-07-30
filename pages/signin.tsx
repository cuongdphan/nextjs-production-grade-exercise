import Logo from "components/Logo";
import SocialButton from "components/SocialButton";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signin = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log(session);
      router.push("/app");
    }
  }, [session, router]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 px-16 py-10 bg-green-500 flex justify-center items-center">
        <div className="grid gap-4">
          <Logo fontSize="text-6xl" textColor="text-white" />
          <span className="text-xl text-white">Sign in.</span>
        </div>
      </div>

      <div className="w-1/2 px-14 bg-gray-100 flex items-center">
        <SocialButton
          type="github"
          onClick={() => {
            signIn("github");
          }}
        />
      </div>
    </div>
  );
};

export default Signin;
