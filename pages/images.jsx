import Avatar from "@/components/Avatar";
import Head from "next/head";
import Image from "next/image";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { whatWasSearched } from "@/atoms/modalAtom";
import Link from "next/link";


export default function Home() {
  const searchInputRef = useRef();
  const router = useRouter();
  const [searchedValue, setSearchedValue] = useRecoilState(whatWasSearched);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    setSearchedValue(term);
    if (!term) {
      return;
    }

    router.push(`/imagesSearch?term=${term}`);
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className="flex justify-between w-full p-5
      text-gray-700 text-sm"
      >
        <div className="flex space-x-4 items-center ">
        </div>

        <div className="flex space-x-4 items-center">
          <Link href="/">
            <p className="link">Google</p>
          </Link>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://www.linkpicture.com/q/LPic64147ed31e337626507709.png" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-[18vh] flex-grow">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          className=""
          alt="logo"
          width={300}
          height={100}
        />
        <div
          className="flex w-full mt-7 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border border-gray-200 transition px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none font-[400] text-[16px]"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0
        sm:space-x-4 "
        >
          <button className="btn" onClick={search}>
            Image Search
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
