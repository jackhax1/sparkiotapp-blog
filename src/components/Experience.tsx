import { Layout, Card, Typography, Row, Col } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const Experience = () => {
  return (
      <Content style={{ padding: "50px 20px", backgroundColor: "#f0f2f5",minHeight:"100vh" }} id="experience">
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Experience
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {/* Daikin Experience */}
          <Col xs={24} md={18}>
            <Card>
              <Title level={4}>
                Embedded Software Engineer -{" "}
                <Text strong>Daikin Research & Development Malaysia</Text>
              </Title>
              <Text type="secondary">Aug 2022 – Present · 2 yrs 5 mos</Text>
              <br />
              <Text type="secondary">
                Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia ·
                On-site
              </Text>
              <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
                <li>
                  Co-developed a custom bootloader to enable firmware upgrades
                  via UART.
                </li>
                <li>
                  Developed firmware for embedded systems involving{" "}
                  <strong>BLE</strong>, <strong>Wi-Fi</strong>, and{" "}
                  <strong>Zigbee</strong>.
                </li>
                <li>
                  Designed and implemented an automated unit testing platform
                  for IoT devices, testing both software and hardware.
                </li>
                <li>
                  Created an <strong>Automated Test Execution and Monitoring
                  Dashboard</strong>, a developer login system, and a
                  report/log file retrieval UI—all hosted on a local Linux
                  machine.
                </li>
                <li>Worked on <strong>Matter-based IoT devices</strong>.</li>
              </ul>
            </Card>
          </Col>

          {/* SparkIotApp Experience */}
          <Col xs={24} md={18}>
            <Card>
              <Title level={4}>
                Founder - <Text strong>SparkIotApp</Text>
              </Title>
              <Text type="secondary">Mar 2024 – Present · 10 mos</Text>
              <br />
              <Text type="secondary">
                Petaling Jaya, Selangor, Malaysia · Remote
              </Text>
              <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
                <li>
                  Developed and delivered custom IoT solutions to clients,
                  specializing in <strong>smart home automation</strong> and{" "}
                  <strong>device integration</strong>.
                </li>
                <li>
                  Led end-to-end project management for IoT applications,
                  including design, development, and deployment.
                </li>
                <li>
                  Collaborated remotely with clients to identify requirements
                  and deliver tailored solutions.
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Content>
  );
};

export default Experience;
