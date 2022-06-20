import Head from "next/head";

import { Wrapper } from "../components/common/wrapper";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Header from "../components/sections/header";
import Skills from "../components/sections/skills";

import type { NextPage } from "next";
export const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Daniel Figueiredo</title>
        <meta name="description" content="Web portifólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Contact />
      <Skills />
      {/* <Projects /> */}
    </Wrapper>
  );
};

export default Home;
