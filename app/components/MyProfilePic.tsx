"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MyProfilePic() {
  const [userHovering, setUserHovering] = useState(false);
  return (
    <>
      <section
        className="w-fit mx-auto"
        onMouseOver={() => setUserHovering(true)}
        onMouseLeave={() => setUserHovering(false)}
      >
        {!userHovering ? (
          <Image
            className={
              "border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8"
            }
            src={"/images/profile-pic.png"}
            width={300}
            height={300}
            alt="picture of nathan"
            priority={true}
          />
        ) : (
          <Image
            className="border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8"
            src={"/images/ogre-no-bg.png"}
            width={352}
            height={352}
            alt="picture of ogre"
            priority={true}
          />
        )}
      </section>
    </>
  );
}
