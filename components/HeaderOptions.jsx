import React, { useEffect, useState } from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function HeaderOptions({ page }) {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (page === "all") {
      setSelectedAll(true);
    }
    if (page === "image") {
      setSelectedImage(true);
    }
  }, []);

  return (
    <div
      className="flex w-full text-[#5F6368] justify-evenly text-sm lg:text-base
    lg:justify-start lg:space-x-36 lg:pl-[200px] border-b font-[400]"
    >
      <div className="flex space-x-6">
        <Link href={`/search?term=${router.query.term}`}>
          <HeaderOption
            Icon={SearchIcon}
            title={"All"}
            selected={selectedAll}
          />
        </Link>
        <Link href={`/imagesSearch?term=${router.query.term}`}>
          <HeaderOption
            Icon={PhotographIcon}
            title={"Images"}
            selected={selectedImage}
          />
        </Link>

        <HeaderOption Icon={PlayIcon} title={"Videos"}/>
        <HeaderOption Icon={NewspaperIcon} title={"News"} />
        <HeaderOption Icon={MapIcon} title={"Maps"} />
        <HeaderOption Icon={DotsVerticalIcon} title={"More"} />
      </div>

      <div className="flex space-x-4">
        <p className="link invisible">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
