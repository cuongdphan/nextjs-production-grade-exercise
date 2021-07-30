import ExpiredDialog from "components/ExpiredDialog";
import FolderList from "components/FolderList";
import Logo from "components/Logo";
import NewFolderButton from "components/NewFolderButton";
import NewFolderDialog from "components/NewFolderDialog";
import User from "components/User";
import { getSession, useSession } from "next-auth/client";
import { useState } from "react";

const App = () => {
  const [session, loading]: [session: any, loading: boolean] = useSession();
  const [newFolderIsShown, setIsShown] = useState(false);

  if (loading) {
    return null;
  }

  if (!loading && !session) {
    return <ExpiredDialog />;
  }

  return (
    <div className="flex w-screen h-screen relative">
      <div className="w-72 h-full bg-gray-100 border-r border-gray-200">
        <div className="p-4 flex justify-between items-center">
          <Logo />
          <NewFolderButton onClick={() => setIsShown(true)} />
        </div>
        <FolderList folders={[{ _id: 1, name: "hello" }]} />
      </div>
      <div className="h-full flex-grow">
        <User user={session.user} />
      </div>
      <NewFolderDialog
        close={() => setIsShown(false)}
        isShown={newFolderIsShown}
      />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const props: any = { session };

  if (!session || !session.user) {
    return { props: {} };
  }

  return {
    props,
  };
}

export default App;
