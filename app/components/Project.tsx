import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  siteUrl: string;
  title: string;
  imgPath: string;
  description?: string;
};

const Project: React.FC<Props> = ({ siteUrl, title, imgPath, description }) => {
  return (
    <Link
      href={siteUrl}
      target="_blank"
      className="bg-slate-700 border-2 border-slate-600 hover:bg-slate-600 hover:border-slate-500 rounded-md p-6 flex flex-col m-8 w-4/5 shadow-xl"
    >
      <h1 className="text-lime-300 text-2xl pl-1">{title}</h1>
      <p className="text-gray-50 text-xs pl-1 pb-4">
        (click to visit live site)
      </p>
      <h2 className="text-gray-50 pl-1">DESCRIPTION:</h2>
      <div className="w-full">
        <h3 className="text-gray-50 pl-1 pb-4">{description}</h3>
      </div>
      <div className="max-w-xl">
        <Image
          src={imgPath}
          alt={title}
          width={800}
          height={800}
          className="rounded-lg hover:w-800"
        />
      </div>
    </Link>
  );
};

export default Project;
