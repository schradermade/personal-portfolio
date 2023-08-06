import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  siteUrl: string;
  title: string;
  imgPath: string;
  description?: string;
};

const PortfolioSite: React.FC<Props> = ({
  siteUrl,
  title,
  imgPath,
  description,
}) => {
  return (
    <div className="flex flex-col m-8 w-4/5">
      <h1 className="text-lime-300 text-2xl pl-1">{title}</h1>
      <p className="text-gray-50 text-xs pl-1 pb-2">
        (click image to visit live site)
      </p>
      <h2 className="text-gray-50 pb-1 pl-1 font-semibold underline">
        Project Description:
      </h2>
      <div className="w-full">
        <h3 className="text-white pl-1 pb-6">{description}</h3>
      </div>
      <div className="max-w-sm max-h-sm hover:max-w-xl ">
        <Link href={siteUrl} target="_blank">
          <Image
            src={imgPath}
            alt={title}
            width={800}
            height={800}
            className="rounded-lg hover:w-800"
          />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSite;
