import { Layout } from "antd";
// import "./App.css"; // Optional for additional styling
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MenuBar from "./components/MenuBar";
const { Footer } = Layout;

const App = () => {


  return (
    <Layout>
      <MenuBar />

      <AboutMe />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Contact />

      <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white" }}>
        ©2024 Created by Jamil Khan
      </Footer>
    </Layout>
  );
};

export default App;
