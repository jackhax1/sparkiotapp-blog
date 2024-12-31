import { Layout, Row, Col, Card, Typography, Tag } from "antd";
import { CloudOutlined, FilePdfOutlined, HomeOutlined, ExperimentOutlined, AppstoreOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

const Projects = () => {
  const projects = [
    {
      icon: <CloudOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
      title: "Django-Based IoT Platform",
      description:
        "Developed an IoT platform integrated with EMQX, FastAPI, PostgreSQL, React, and Django on AWS.",
      tags: ["Django", "AWS", "IoT", "FastAPI", "PostgreSQL", "React"],
    },
    {
      icon: <FilePdfOutlined style={{ fontSize: "36px", color: "#faad14" }} />,
      title: "Client-Side PDF to Image Converter",
      description:
        "Built a React-based application for converting PDFs to images without server-side processing.",
      tags: ["React", "PDF", "Client-Side"],
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
        "Developed a computer vision system to recognize traffic signs under adverse weather conditions.",
      tags: ["Computer Vision", "ML", "Traffic Signs"],
    },
    {
      icon: <AppstoreOutlined style={{ fontSize: "36px", color: "#eb2f96" }} />,
      title: "Diamond Digger Game Clone",
      description:
        "Created a C++ clone of the Diamond Digger game with enhanced gameplay features.",
      tags: ["C++", "Game Development"],
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: "50px 20px", backgroundColor: "#ffffff" }} id="projects">
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Projects
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{
                  textAlign: "center",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
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
