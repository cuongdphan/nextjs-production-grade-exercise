import Logo from "components/Logo";
import SocialButton from "components/SocialButton";

const Signin = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 px-16 py-10 bg-green-500 flex justify-center items-center">
        <div className="grid gap-4">
          <Logo fontSize="text-6xl" textColor="text-white" />
          <span className="text-xl text-white">Sign in.</span>
        </div>
      </div>

      <div className="w-1/2 px-14 bg-gray-100 flex items-center">
        <SocialButton type="github" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Signin;
