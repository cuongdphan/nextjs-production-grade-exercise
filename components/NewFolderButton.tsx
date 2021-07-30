import { FC } from "react";

const NewFolderButton: FC<{
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  width?: string;
  height?: string;
}> = ({ onClick, width = "w-10", height = "h-10" }) => (
  <button onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${width} ${height}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 11h4m-2-2v4"
      />
    </svg>
  </button>
);

export default NewFolderButton;
