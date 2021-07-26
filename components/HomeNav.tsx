import Link from "next/link";
import Logo from "./Logo";

const HomeNav = () => (
  <nav className="h-16 py-2 border-b border-gray-200">
    <div className="h-full container">
      <div className="h-full flex justify-between items-center">
        <Logo />

        <div className="flex justify-around items-center px-6 space-x-12">
          <Link href="/blog">
            <a>
              <span>Blog</span>
            </a>
          </Link>
          <Link href="/signin">
            <a>
              <button className="signup-button">Sign up</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default HomeNav;
