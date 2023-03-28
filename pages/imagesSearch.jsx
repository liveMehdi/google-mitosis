import Header from "@/components/Header";
import ImageResults from "@/components/ImageResults";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ResponseImages from "../ResponseImages";

function imagesSearch({ resultsImagesFirst, resultsImagesSec, resultsImagesT }) {
    let resultsImages
    if (resultsImagesSec) {
       resultsImagesSec.items.map((each) => resultsImagesFirst.items.push(each))
        resultsImages = resultsImagesFirst 
    }
    else {
        resultsImages = resultsImagesT
    }
     
  const router = useRouter();

  console.log(resultsImages);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Image Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page="image" />

      <ImageResults resultsImages={resultsImages} />
    </div>
  );
}

export default imagesSearch;

export async function getServerSideProps(context) {
  const useDummyDataImages = false;
  const startIndex = context.query.start || "0";
  let dataImages
  let dataImagesSec
  let dataImagesT
  if (!useDummyDataImages) {
    dataImages = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&searchType=Image&q=${context.query.term}&start=${startIndex}`
    ).then((res) => res.json());
    dataImagesSec = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&searchType=Image&q=${
        context.query.term
      }&start=10`
    ).then((res) => res.json());
  } else {
    dataImagesT = ResponseImages;
  }

  return {
    props: {
      resultsImagesFirst: dataImages || null,
      resultsImagesSec: dataImagesSec || null,
      resultsImagesT: dataImagesT || null,
    },
  };
}
