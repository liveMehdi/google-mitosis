import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header({page}) {
  const router = useRouter();
  const searchInputRef = useRef(null);
  

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }
    if (page === "all") {
      router.push(`/search?term=${term}`);

    }
    if (page === "image") {
      router.push(`/imagesSearch?term=${term}`);
    }
  }

  return (
    <header className="sticky bg-white top-0">
      <div className="flex p-6 items-center ">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          className="cursor-pointer"
          alt="logo"
          width={120}
          height={40}
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow border border-gray-200 rounded-full hover:shadow-lg 
      max-w-3xl items-center focus-within:shadow-lg transition duration-100
      px-6 py-3 ml-10 mr-5"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none font-[400]"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className={`h-7 sm:mr-3 text-gray-500 cursor-pointer
        transtion duration-100 tranform hover:scale-110 `}
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 text-blue-500 mr-3 hidden sm:inline-flex 
          border-l-2 border-gray-300 pl-4"
          />
          <SearchIcon
            className="h-6 
        text-blue-500 hidden sm:inline-flex"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://www.linkpicture.com/q/LPic64147ed31e337626507709.png" />
      </div>

      <HeaderOptions page={page}/>
    </header>
  );
}

export default Header;
