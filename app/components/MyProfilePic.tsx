import React from "react";
import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={"/images/profile-pic.png"}
        width={200}
        height={200}
        alt="Nathan"
        priority={true}
      />
    </section>
  );
}
