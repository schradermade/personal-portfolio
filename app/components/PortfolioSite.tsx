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
      <div className="w-fit ">
        <Link href={siteUrl} target="_blank">
          <Image
            src={imgPath}
            alt="my wiki site"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSite;
