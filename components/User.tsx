import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/client";
import Image from "next/image";
import { FC, Fragment } from "react";
// import { FC } from "react";
import type { UserSession } from "types";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const User: FC<{ user: UserSession }> = ({ user }) => {
  return (
    <Menu as="div" className="fixed top-5 right-5">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="h-12 w-12 rounded-full overflow-hidden cursor-pointer border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <Image
                width={48}
                height={48}
                src={user.image}
                alt="Avatar"
                layout="responsive"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-sm text-gray-700 truncate">{user.email}</p>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active && "bg-gray-100",
                        "block w-full text-left px-4 py-2 text-sm text-red-600"
                      )}
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default User;
