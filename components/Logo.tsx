import Link from "next/link";
import type { FC } from "react";

const Logo: FC<{
  fontSize?: string;
  textColor?: string;
}> = ({ fontSize = "text-3xl", textColor = "text-green-500" }) => (
  <Link href="/">
    <a>
      <span className={`${fontSize} ${textColor}`}>
        <strong>Known.</strong>
      </span>
    </a>
  </Link>
);

export default Logo;
