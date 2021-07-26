import React, { FC } from "react";
import GithubIcon from "./GithubIcon";

const icons: { [key: string]: () => JSX.Element } = { github: GithubIcon };
const SocialButton: FC<{
  type: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}> = ({ type, onClick }) => {
  const Icon = icons[type] || GithubIcon;

  return (
    <div className="w-full text-center">
      <button className="w-full max-w-xs rounded px-4 py-3 bg-gray-900 ring-1 ring-gray-200 ring-opacity-80">
        <div className="flex justify-evenly items-center text-xl">
          <Icon />
          <span className="text-white">
            {"Continue with "}
            <strong>{type}</strong>
          </span>
        </div>
      </button>
    </div>
  );
};

export default SocialButton;
