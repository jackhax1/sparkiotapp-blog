import React from "react";
import { Layout, Menu, Button, Typography } from "antd";
import "./App.css"; // Optional for additional styling

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            height: 31,
            margin: "16px 24px 16px 0px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Jamil Khan
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => scrollToSection("home")}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => scrollToSection("skills")}>
            Skills
          </Menu.Item>
          <Menu.Item key="3" onClick={() => scrollToSection("experience")}>
            Experience
          </Menu.Item>
          <Menu.Item key="4" onClick={() => scrollToSection("projects")}>
            Projects
          </Menu.Item>
          <Menu.Item key="5" onClick={() => scrollToSection("education")}>
            Education
          </Menu.Item>
          <Menu.Item key="6" onClick={() => scrollToSection("contact")}>
            Contact Me
          </Menu.Item>
        </Menu>
      </Header>

      {/* Home Section */}
      <Content
      id = "home"
        style={{
          marginTop: 64,
          padding: "50px 20px 50px 20px",
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
          textAlign: "center",
        }}
      >
        <Title level={1}>Welcome to My Portfolio</Title>
        <Text style={{ fontSize: "18px" }}>
          Hi, I'm Jamil, a passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
        </Text>
        <div style={{ marginTop: 30 }}>
          <Button type="primary" size="large" style={{ marginRight: 15 }}>
            View Projects
          </Button>
          <Button size="large">Get in Touch</Button>
        </div>
      </Content>

      {/* About Section */}
      <Content
        id="skills"
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Title level={2}>About Me</Title>
        <Text style={{ fontSize: "18px" }}>
          I am a developer with expertise in modern web technologies. I love
          creating responsive and efficient applications.
        </Text>
      </Content>

      {/* About Section */}
      <Content
        id="experience"
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Title level={2}>experience</Title>
        <Text style={{ fontSize: "18px" }}>
          
Embedded Software EngineerEmbedded Software Engineer
Daikin Research & Development Malaysia · Full-timeDaikin Research & Development Malaysia · Full-time Aug 2022 - Present · 2 yrs 5 mosAug 2022 to Present · 2 yrs 5 mos Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · On-siteKuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · On-site

        - Co-developed custom bootloader to enable firmware upgrade through UART
        - Develop Firmware for Embedded System devices involving BLE, WiFi and Zigbee. 
        - Develop automated unit testing platform for IoT devices to test both software and hardware
        - Develop Automated Test Execution and Monitoring Dashboard, Dev Login system, report/ log file retreival UI. All hosted on a local linux machine. 
        - Develop Matter based IoT devices- Co-developed custom bootloader to enable firmware upgrade through UART - Develop Firmware for Embedded System devices involving BLE, WiFi and Zigbee. - Develop automated unit testing platform for IoT devices to test both software and hardware - Develop Automated Test Execution and Monitoring Dashboard, Dev Login system, report/ log file retreival UI. All hosted on a local linux machine. - Develop Matter based IoT devices 

FounderFounder
SparkIotApp · FreelanceSparkIotApp · Freelance Mar 2024 - Present · 10 mosMar 2024 to Present · 10 mos Petaling Jaya, Selangor, Malaysia · Remote
        </Text>
      </Content>

      {/* Projects Section */}
      <Content
        id="projects"
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          backgroundColor: "#e6f7ff",
          textAlign: "center",
        }}
      >
        <Title level={2}>My Projects</Title>
        <Text style={{ fontSize: "18px" }}>
          Here are some of the projects I have worked on.
        </Text>
      </Content>

      {/* Contact Section */}
      <Content
        id="education"
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          backgroundColor: "#f9f0ff",
          textAlign: "center",
        }}
      >
        <Title level={2}>My Education</Title>
        <Text style={{ fontSize: "18px" }}>
          
University of Malaya logo
University of MalayaUniversity of Malaya
Bachelor of Electrical Engineering, Electrical EngineeringBachelor of Electrical Engineering, Electrical Engineering 2018 - 20222018 - 2022

    Grade: 3.97Grade: 3.97

Kolej Matrikulasi PerakKolej Matrikulasi Perak
Physics and Computer Science ModulePhysics and Computer Science Module Aug 2017 - Aug 2018Aug 2017 - Aug 2018

    Grade: 4.00Grade: 4.00
        MUET: Band 5
        </Text>
      </Content>

      {/* Contact Section */}
      <Content
        id="contact"
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          backgroundColor: "#f9f0ff",
          textAlign: "center",
        }}
      >
        <Title level={2}>Contact Me</Title>
        <Text style={{ fontSize: "18px" }}>
          Feel free to reach out to me at [Your Email] or connect on LinkedIn!
        </Text>
      </Content>

      {/* Footer Section */}
      <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white" }}>
        ©2024 Created by [Your Name]
      </Footer>
    </Layout>
  );
};

export default App;
