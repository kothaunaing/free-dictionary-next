import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-3xl mx-auto border-t p-2 mt-auto border-t-slate-900">
      <div className="">
        <p>
          Developed by{" "}
          <Link
            href={"https://github.com/kothaunaing"}
            className="font-bold text-lg underline"
          >
            Than Aung Naing
          </Link>
        </p>
        <p className="text-sm font-semibold">
          Tech Stacks: Next.js, Free Dictionary API, TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
