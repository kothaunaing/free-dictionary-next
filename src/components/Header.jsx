"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Header = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const keyword = searchRef?.current?.value || "";

    router.push(`/word/${keyword}`);
  };

  return (
    <header className="w-full flex justify-center max-w-3xl mx-auto sticky inset-x-0 top-0 bg-black border-b border-b-slate-900">
      <div className="flex gap-4 m-2 items-center">
        <Link href={"/"}>
          <h1 className="font-semibold text-lg">Free Dictionary</h1>
        </Link>

        <form onSubmit={search}>
          <div className="flex items-center gap-2 p-1 rounded-lg">
            <SearchIcon />

            <input
              ref={searchRef}
              placeholder="Search..."
              className="h-full bg-transparent outline-none p-2 w-full"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
