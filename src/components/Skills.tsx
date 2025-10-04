import { Layout, Row, Col,Typography } from "antd";
import {
  WifiOutlined,
  CodeOutlined,
  ToolOutlined,
  DatabaseOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";

import Card3D from "./Card3D";

const { Content } = Layout;
const { Title ,Text} = Typography;

const Skills = () => {

  const skills = [
    {
      icon: <WifiOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
      title: "IoT Device Development",
      description: "RTOS, WiFi, BLE, HTTPS, MQTT, TCP, UDP",
    },
    {
      icon: <CodeOutlined style={{ fontSize: "36px", color: "#722ed1" }} />,
      title: "Programming Languages",
      description:
        "C, C++, Python, JavaScript – strong foundation in multiple languages.",
    },
    {
      icon: <ToolOutlined style={{ fontSize: "36px", color: "#eb2f96" }} />,
      title: "Full Stack Development",
      description: "Experienced with Django and React for robust web applications.",
    },
    {
      icon: <DatabaseOutlined style={{ fontSize: "36px", color: "#13c2c2" }} />,
      title: "Data Science & Analytics",
      description:
        "Skilled in web requests, APIs, SQL/NoSQL databases, ETL processes, and data analytics.",
    },
    {
      icon: <CloudServerOutlined style={{ fontSize: "36px", color: "#fa8c16" }} />,
      title: "AWS Cloud Services",
      description:
        "Proficient in deploying and managing AWS services: EC2, Lambda, Route 53, CloudFront, S3, IoT Core, DynamoDB, RDS, and ECS.",
    },
  ];

  return (
    <Layout>
      <Content  className="content-section" style={{ backgroundColor: "#f9f9f9"}} id="skills">
        <Title level={2} className="content-title">
          Skills 
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {skills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card3D>
                {skill.icon}
                  <Title level={4} style={{ marginTop: "16px" }}>
                    {skill.title}
                  </Title>
                  <Text>{skill.description}</Text>
                </Card3D>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Skills;
