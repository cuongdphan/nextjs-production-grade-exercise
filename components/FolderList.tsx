// import FolderOpenIcon from "components/FolderOpenIcon";
import { FolderOpenIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { FC } from "react";

const FolderList: FC<{ folders: any[] }> = ({ folders }) => {
  const router = useRouter();

  return (
    <nav>
      {folders.map((folder) => (
        <div className="p-4" key={folder._id}>
          <button
            className="nav-item"
            onClick={() => router.push(`/app/${folder._id}`)}
          >
            <FolderOpenIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm">{folder.name}</span>
          </button>
        </div>
      ))}
    </nav>
  );
};

export default FolderList;
