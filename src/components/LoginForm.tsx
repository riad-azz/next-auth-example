"use client";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "@/components/Icons";

const LoginForm = () => {
  const [name, setName] = useState<undefined | string>("admin");
  const [password, setPassword] = useState<undefined | string>("admin");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signIn("credentials", {
      username: name,
      password,
    });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg"
    >
      <button
        onClick={() => signIn("github")}
        type="button"
        className="flex justify-center gap-4 bg-slate-800 my-4 text-white p-3 rounded-lg hover:bg-slate-700"
      >
        <Icons.github />
        <span> Sign in with Github</span>
      </button>
      <div className="relative my-3">
        <hr />
        <small className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-8 text-center">
          Or
        </small>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email or Username</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="p-3 border border-slate-700 rounded-lg"
            id="name"
            placeholder="Uname@mail.com"
            required
          />
        </div>
        <div className="flex mt-2 flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="p-3 border border-slate-700 rounded-lg"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
