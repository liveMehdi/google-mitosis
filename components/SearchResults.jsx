import React from "react";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  console.log(results);
  return (
    <div>
      {results && (
        <div className="mx-auto w-full pl-3 pr-3 sm:pl-[5%] md:pl-[14%] lg:pl-[200px]">
          <p className="text-[#70757a] text-[14px] font-[400] mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults + " "}
            results ({results.searchInformation.formattedSearchTime} seconds)
          </p>

          {results.items?.map((result) => (
            <div key={result.link} className="max-w-xl mb-8 font-[400]">
              <div className="group cursor-pointer">
                <a href={result.link} className="text-sm text-[#4d5156]">
                  {result.formattedUrl}
                </a>
                <a href={result.link} className="text-sm group-hover:underline">
                  <h2 className="truncate text-xl text-[#1a0dab]">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className="text-[#4d5156] line-clamp-2">{result.snippet}</p>
            </div>
          ))}
          <PaginationButtons />
        </div>
      )}
      {!results && (<div>
        loading
      </div>)}
    </div>
  );
}

export default SearchResults;
