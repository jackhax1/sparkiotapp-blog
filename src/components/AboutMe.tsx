import { Layout, Row, Col, Typography } from "antd";
import "../AboutMe.css"; // Custom CSS for parallax

import ParallaxContainer from "./ParallaxComponent";

const { Content } = Layout;
const { Title, Text } = Typography;

const AboutMe = () => {

  return (
    <Layout>
      <Content style={{ padding: "50px 20px", backgroundColor: "#f9f9f9",minHeight:"100vh" }} id="aboutme">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} sm={24} md={10} lg={8} style={{ textAlign: "center" }}>
            <div style={{ paddingTop: "200px" }}>
              <ParallaxContainer
                imageUrl="https://media.licdn.com/dms/image/v2/D5603AQH0L_YkvZ3KSg/profile-displayphoto-shrink_800_800/B56ZQXpGLYG4Ac-/0/1735563437587?e=1741219200&v=beta&t=NvmB-Jecgva6JWBl23ZC2NZ0RSBXUW7zVyCmWQUMF0k"
                height="300px"
                overlayColor="rgba(0, 0, 0, 0.3)"
                parallaxSpeed={0.5}

              />
            </div>


          </Col>
          <Col xs={24} sm={24} md={14} lg={16}>
            <Title level={2} style={{ marginBottom: "20px" }}>
              About Me
            </Title>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Hello! I'm an <strong>Embedded Software Engineer</strong> and an{" "}
              <strong>IoT Developer</strong> passionate about leveraging
              technology to create innovative solutions. I specialize in
              developing firmware for IoT devices, focusing on communication
              protocols such as <strong>WiFi</strong>, <strong>BLE</strong>, and{" "}
              <strong>Zigbee</strong>.
              <br />
              <br />
              With a strong foundation in full-stack development using{" "}
              <strong>Django</strong> and <strong>React</strong>, I’ve also
              worked on various projects, including IoT platforms, home
              automation systems, and computer vision applications. I’m always
              looking for new challenges and opportunities to grow in this
              dynamic field.
              <br />
              <br />
              When I’m not coding, I enjoy exploring new technologies, improving my
              knowledge of wireless communication protocols, and staying updated with
              the latest trends in IoT and embedded systems.
            </Text>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AboutMe;
