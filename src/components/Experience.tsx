import { Layout, Card, Typography, Row, Col } from "antd";
import "../App.css"

const { Content } = Layout;
const { Title, Text } = Typography;

const Experience = () => {
  return (
    <Content className="content-section" style={{ backgroundColor: "#f0f2f5" }} id="experience">
      <Title level={2} className="content-title">
        Experience
      </Title>

      <Row gutter={[16, 16]} justify="center">
        {/* Daikin Experience */}
        <Col xs={24} md={18}>
          <Card className="large-card">
            <Title level={4}>
              Embedded Software Engineer -{" "}
              <Text strong>Daikin Research & Development Malaysia</Text>
            </Title>
            <Text type="secondary">Aug 2022 – Present · 3 yrs 4 mos</Text>
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
          <Card className="large-card">
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
                Developed free client-side <strong>PDF-to-Image converter</strong> with <strong>Optical Character Recognition</strong>.
              </li>
              <li>
                Developed an open-source <strong>Django-based IoT platform</strong>.
              </li>
              <li>
                Developed automated <strong>LinkedIn-to-portfolio site generator</strong> (WIP).
              </li>
              <li>
                Developed <strong>Air Quality Index (AQI) scraping API</strong> for gathering data from the <strong>Ministry of Environment</strong> website.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Experience;
