import {lazy } from "react";
import { Layout } from "antd";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MenuBar from "../components/MenuBar";
const PageFooter = lazy(()=> import("../components/PageFooter"))

const Home = () => {


  return (
    <Layout>
      <MenuBar />

      <AboutMe />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Contact />

      <PageFooter />

    </Layout>
  );
};

export default Home;
