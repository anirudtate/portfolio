import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Anirud Tate</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Anirud Tate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Anirud Tate" />
        <meta name="description" content="I'm Anirud Tate, and I'm a Bachelor of Science in Information Technology graduate." />

        <meta property="og:title" content="Anirud Tate" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://anirudtate.xyz/" />
        <meta property="og:image" content="https://anirudtate.xyz/screenshot.png" />
        <meta property="og:description" content="I'm Anirud Tate, and I'm a Bachelor of Science in Information Technology graduate." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@anirudtate"/>
        <meta name="twitter:title" content="Anirud Tate"/>
        <meta name="twitter:description" content="I'm Anirud Tate, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta name="twitter:creator" content="@anirudtate"/>
        <meta name="twitter:image" content="https://anirudtate.xyz/screenshot.png"/>
      </Head>
      <Home />
    </>
  );
}
