import classNames from "classnames";
import Link from "next/link";
import type { FC } from "react";

const Logo: FC<{
  fontSize?: string;
  textColor?: string;
}> = ({ fontSize = "text-3xl", textColor = "text-green-500" }) => {
  const logoClasses = classNames(`${fontSize} ${textColor}`);

  return (
    <Link href="/">
      <a>
        <span className={logoClasses}>
          <strong>Known.</strong>
        </span>
      </a>
    </Link>
  );
};

export default Logo;
