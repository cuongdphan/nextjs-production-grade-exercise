import { useSession } from "next-auth/client";
import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";

const HomeNav: FC<{ links?: { name: string; link: string }[] }> = ({
  links = [{ name: "Blog", link: "/blog" }],
}) => {
  const [session] = useSession();

  return (
    <nav className="h-16 py-2 border-b border-gray-200">
      <div className="h-full container">
        <div className="h-full flex justify-between items-center">
          <Logo />

          <div className="flex justify-around items-center px-6 space-x-12">
            {links && links.length > 0
              ? links.map((link) => (
                  <Link href="/blog" key={link.name}>
                    <a>
                      <span>Blog</span>
                    </a>
                  </Link>
                ))
              : null}
            <Link href={session ? "/app" : "/signin"}>
              <a>
                <button className="signup-button">
                  {session ? "Dashboard" : "Sign up"}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
