import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  siteUrl: string;
  title: string;
  imgPath: string;
};

const PortfolioSite: React.FC<Props> = ({ siteUrl, title, imgPath }) => {
  return (
    <div className="flex flex-col m-8">
      <h1 className="text-amber-100 text-2xl pl-1">{title}</h1>
      <h4 className="text-amber-100 pb-2 text-xs pl-1">
        (click image to visit)
      </h4>
      <div className="max-w-sm max-h-sm hover:max-w-xl hover:max-h-xl">
        <Link href={siteUrl} target="_blank">
          <Image
            src={imgPath}
            alt={title}
            width={800}
            height={800}
            className="rounded-lg hover:w-800 w-500 h-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSite;
