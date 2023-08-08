import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import styles from "./Navbar.module.css";
import techItems from "../../tech-items.json";
import TechItem from "./TechItem";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 bg-opacity-95 p-4 pb-2 sticky top-0 drop-shadow-xl z-10">
      <div className="flex justify-between mx-8 sm:flex-row xs:mx-0">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-0">
          <span className="text-amber-50/90 font-light no-underline">
            Nathan Schrader
          </span>
          <span className="text-white/90 text-lg font-thin no-underline">
            Software Engineer
          </span>
          {techItems["items"].map(({ label, svgComponent }) => {
            return (
              <TechItem key={label} label={label} svgComponent={svgComponent} />
            );
          })}
        </h1>
        <div className="flex flex-col justify-between items-center py-2 rounded-md text-5xl bg-slate-700 shadow-2xl border border-slate-600">
          <Link
            className="text-gray-300 hover:text-white"
            href="https://www.linkedin.com/in/schradermade/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-gray-300 hover:text-white"
            href="https://github.com/schradermade"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://drive.google.com/file/d/11LtIRTqYyBVJoBFgQ2sTvRgUd6_1-FOT/view?usp=sharing"
            target="_blank"
          >
            <Image
              alt="resume icon"
              src={"/images/resume-icon.png"}
              width={70}
              height={70}
              className={styles.svgFilter}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
