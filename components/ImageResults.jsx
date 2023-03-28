import Image from "next/image";
import React from "react";

function ImageResults({ resultsImages }) {
  console.log(resultsImages);
  return (
    <div className=" w-full pl-3 pr-3 sm:pl-[5%]">
      <p className="text-[#70757a] text-[14px] font-[400] mb-5 mt-3">
        About {resultsImages.searchInformation?.formattedTotalResults + " "}
        results ({resultsImages.searchInformation?.formattedSearchTime} seconds)
      </p>

      <div className="flex flex-wrap justify-center items-center"></div>
      {resultsImages.items?.map((result, index) => (
        <div
          className="p-1 sm:p-[10px] inline-block "
          key={index}
          target="_blank"
          rel="noreferrer"
        >
          <a
            href={result.link}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src={result.image.thumbnailLink}
              alt={result.title}
              loading="lazy"
              className="h-[100px] sm:h-[150px] lg:h-[220px] rounded-lg 
              group-hover:translate-y-[1px] transition shadow-lg"
            />
          </a>

          <a href={result.image.contextLink} target="_blank">
            <p className="w-36 break-words text-sm mt-2 hover:underline cursor-pointer">
              {result.title.slice(0, 40)}
            </p>
          </a>
        </div>
      ))}
      {/* <PaginationButtons/> */}
    </div>
  );
}

export default ImageResults;
