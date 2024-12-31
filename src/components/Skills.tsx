import { Layout, Row, Col, Card, Typography } from "antd";
import {
  WifiOutlined,
  ApiOutlined,
  CodeOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

const Skills = () => {
  const skills = [
    {
      icon: <WifiOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
      title: "WiFi Protocols",
      description: "Extensive experience in developing IoT devices using WiFi.",
    },
    {
      icon: (
        <WifiOutlined style={{ fontSize: "36px", color: "#52c41a" }} />
      ),
      title: "Bluetooth (BLE)",
      description: "Proficient in creating energy-efficient BLE integrations.",
    },
    {
      icon: <ApiOutlined style={{ fontSize: "36px", color: "#faad14" }} />,
      title: "Zigbee Protocols",
      description: "Skilled in implementing Zigbee communication in IoT systems.",
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
      description: "Experienced with Django and React for robust web apps.",
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: "50px 20px", backgroundColor: "#f9f9f9", minHeight:"100vh"}} id="skills">
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Skills
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {skills.map((skill, index) => (
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
                {skill.icon}
                <Title level={4} style={{ marginTop: "16px" }}>
                  {skill.title}
                </Title>
                <Text>{skill.description}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Skills;
