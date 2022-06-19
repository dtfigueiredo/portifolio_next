import type { NextPage } from "next";
import Head from "next/head";
import { Wrapper } from "../components/common/wrapper";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Header from "../components/sections/header";
import Projects from "../components/sections/project";
import Skills from "../components/sections/skills";

export const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Daniel Figueiredo</title>
        <meta name="description" content="Web portifólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Wrapper> */}
      <Header />
      <About />
      {/* <Contact /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* </Wrapper> */}
    </Wrapper>
  );
};

export default Home;
