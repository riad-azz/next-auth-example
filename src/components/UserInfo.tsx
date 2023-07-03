"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
interface UserInfoProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const UserInfo = ({ user }: UserInfoProps) => {
  const { name, email, image } = user;
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 max-w-md w-full shadow-lg rounded-lg">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <p className="text-xs text-center">You are signed in to your account</p>
        <hr className="my-4" />
        <div className="flex flex-col items-center gap-2 w-full justify-center">
          {image && (
            <Image
              src={image}
              width={100}
              height={100}
              alt="user avatar"
              className="rounded-full border-blue-500 border-2"
            />
          )}
          <div className="w-full">
            <div className="mb-2">
              <label
                htmlFor="user-name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                id="user-name"
                value={name ?? "Name"}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
                disabled
              />
            </div>
            <div>
              <label
                htmlFor="user-name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="user-name"
                value={email ?? "email@example.com"}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
                disabled
              />
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <button
          onClick={() => signOut()}
          className="float-right focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
