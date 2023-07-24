import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiSemanticuireact, SiTypescript } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { HiCloud } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between sm:flex-row ">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 ">
          <span className="text-amber-50/90 font-light no-underline hover:text-white">
            Nathan Schrader
          </span>
          <span className="text-white/90 text-base font-thin no-underline hover:text-white">
            Fullstack Engineer II
          </span>
          <div className="flex items-center mt-4 text-lime-300 text-base font-light no-underline hover:text-white">
            <SiSemanticuireact color={"black"} />
            &nbsp;React.js 18
          </div>
          <div className="flex items-center h-fit text-lime-300 text-base font-light no-underline hover:text-white">
            <Image
              alt="next icon"
              src={"images/nextjs-icon.svg"}
              width={15}
              height={15}
              style={{ height: "fit-content", margin: "0" }}
            />
            &nbsp;Next.js 13
          </div>
          <div className="flex items-center text-lime-300 text-base font-light no-underline hover:text-white">
            <SiTypescript color={"black"} />
            &nbsp;TypeScript
          </div>
          <div className="flex items-center text-lime-300 text-base font-light no-underline hover:text-white">
            <FaNodeJs color={"black"} />
            &nbsp;Node
          </div>
          <div className="flex items-center text-lime-300 text-base font-light no-underline hover:text-white">
            <HiCloud color={"black"} />
            &nbsp;REST / GraphQL
          </div>
          <div className="flex items-center text-lime-300 text-base font-light no-underline hover:text-white">
            <BiLogoAws color={"black"} />
            &nbsp;AWS Certified
          </div>
        </h1>

        <div className="flex flex-row justify-start  align-middle gap-4 text-white text-5xl xs:flex-col">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/schradermade/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/schradermade"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
