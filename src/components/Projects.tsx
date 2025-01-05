import { Layout, Row, Col, Card, Typography, Tag } from "antd";
import {
  CloudOutlined,
  FilePdfOutlined,
  HomeOutlined,
  ExperimentOutlined,
  AppstoreOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

const Projects = () => {

  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/pdf");
  };

  const projects = [
    {
      icon: <EnvironmentOutlined style={{ fontSize: "36px", color: "#13c2c2" }} />,
      title: "Air Pollution Index Scraper API",
      description:
        <>Developed a public API to scrape air pollution index data from the Malaysian
          Ministry of Environment website. Check it out on
          <a target="_blank" href="https://console.apify.com/actors/OcwrPfdIpEGhasbjM">{" "} Apify.</a></>,
      tags: ["API", "Scraping", "Air Pollution", "Apify"],
    },
    {
      icon: <FilePdfOutlined style={{ fontSize: "36px", color: "#faad14" }} />,
      title: "Client-Side PDF Optical Character Recognition",
      description:
        <>Built a React-based application for converting PDFs to images and perform OCR without server-side processing. Check it out{" "} <a href="#pdf" onClick={handleProjectClick}>here.</a></>,
      tags: ["React", "PDF","OCR" ,"Client-Side"],
    },
    {
      icon: <CloudOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
      title: "Django-Based IoT Platform",
      description:
        <>Developed an IoT platform integrated with EMQX, FastAPI, PostgreSQL, React, and Django on AWS.{" "}
          Check it out on <a target="_blank" href="https://github.com/jackhax1/django_full_stack"> Github</a>
        </>,
      tags: ["Django", "AWS", "IoT", "FastAPI", "PostgreSQL", "React"],
    },
    
    {
      icon: <HomeOutlined style={{ fontSize: "36px", color: "#52c41a" }} />,
      title: "Home Automation System",
      description:
        "Integrated Home Assistant to create a smart home automation system.",
      tags: ["Home Assistant", "Automation", "IoT"],
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: "36px", color: "#722ed1" }} />,
      title: "Traffic Sign Recognition in Rainy Conditions",
      description:
      <>Developed a computer vision system to recognize traffic signs under adverse weather conditions.{" "}
          Check it out on <a target="_blank" href="https://github.com/jackhax1/Road-Sign-Recog-in-Rainy"> Github</a>
        </>,
      tags: ["Computer Vision", "ML", "Traffic Signs"],
    },
    {
      icon: <AppstoreOutlined style={{ fontSize: "36px", color: "#eb2f96" }} />,
      title: "Diamond Digger Game Clone",
      description:
      <>Created a C++ clone of the Diamond Digger game with enhanced gameplay features.{" "}
      Check it out on <a target="_blank" href="https://github.com/jackhax1/DiamondDiggerClone"> Github</a>
    </>,
      tags: ["C++", "Game Development"],
    },
    
  ];

  return (
    <Layout>
      <Content className="content-section" style={{backgroundColor: "#f9f9f9" }} id="projects">
        <Title level={2} className="content-title">
          Projects
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                bordered={true}
                className="mini-card"
              >
                {project.icon}
                <Title level={4} style={{ marginTop: "16px" }}>
                  {project.title}
                </Title>
                <Text style={{ display: "block", marginBottom: "12px" }}>
                  {project.description}
                </Text>
                <div>
                  {project.tags.map((tag, idx) => (
                    <Tag color="blue" key={idx}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Projects;
