import Link from "next/link";

const HomeNav = () => (
  <nav className="h-16 py-2 border-b border-gray-200">
    <div className="h-full container">
      <div className="h-full flex justify-between items-center">
        <Link href="/">
          <a>
            <span className="text-3xl text-green-500">
              <strong>Known.</strong>
            </span>
          </a>
        </Link>

        <div className="flex justify-around items-center">
          <Link href="/blog">
            <a>
              <span>Blog</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default HomeNav;
