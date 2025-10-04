import { Layout, Row, Col, Typography } from "antd";

import ParallaxContainer from "./ParallaxComponent";
import "../App.css"

const { Content } = Layout;
const { Title, Text } = Typography;

const AboutMe = () => {

  return (
    <Layout>
      <Content className="content-section" style={{ backgroundColor: "#f0f2f5", paddingTop:"64px"}} id="aboutme">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} sm={24} md={10} lg={8} style={{ textAlign: "center" }}>
            <div style={{ paddingTop: "200px"}}>
              <ParallaxContainer
                imageUrl="/1735563437587_1.avif"
                height="120px"
                overlayColor="rgba(0, 0, 0, 0)"
                parallaxSpeed={0.5}

              />
            </div>


          </Col>
          <Col xs={24} sm={24} md={14} lg={16} style={{backgroundColor:"#f0f2f5"}}>
            <Title level={2} style={{ marginBottom: "20px" }}>
              About Me
            </Title>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Hello! I'm an <strong>Embedded Software Engineer</strong> and an{" "}
              <strong>IoT Developer</strong> passionate about leveraging
              technology to create innovative solutions. I specialize in
              developing firmware for IoT devices, focusing on communication
              protocols such as <strong>WiFi</strong>, and{" "}<strong>BLE</strong>.
              <br />
              <br />
              With a strong foundation in full-stack development using{" "}
              <strong>Django</strong> and <strong>React</strong>, I've also
              worked on various projects, including IoT platforms, home
              automation systems, and computer vision applications. I'm always
              looking for new challenges and opportunities to grow in this
              dynamic field.
              <br />
              <br />
              When I'm not coding, I enjoy exploring new technologies, gardening and kickboxing.
            </Text>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AboutMe;
