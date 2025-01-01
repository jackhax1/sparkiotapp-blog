import { Layout, Card, Typography, Row, Col, Image } from "antd";
import "../App.css"

const { Content } = Layout;
const { Title, Text } = Typography;

const Education = () => {
  return (
      <Content className="content-section" style={{ backgroundColor: "#f0f2f5"}} id="education">
        <Title level={2} className="content-title">
          Education
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {/* University of Malaya */}
          <Col xs={24} md={18}>
            <Card className="large-card">
              <Row gutter={[16, 16]} align="middle">
                <Col xs={6} md={4}>
                  {/* University Logo */}
                  <Image
                    src="/University_of_Malaya_(UM)_coat_of_arms.webp"
                    alt="University of Malaya"
                    preview={false}
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col xs={18} md={20}>
                  <Title level={4}>University of Malaya</Title>
                  <Text type="secondary">
                    Bachelor of Electrical Engineering, Electrical Engineering
                  </Text>
                  <br />
                  <Text type="secondary">2018 – 2022</Text>
                  <br />
                  <Text>Grade: 3.97</Text>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Kolej Matrikulasi Perak */}
          <Col xs={24} md={18}>
            <Card className="large-card">
              <Row gutter={[16, 16]} align="middle">
                <Col xs={6} md={4}>
                  {/* College Logo Placeholder */}
                  <Image
                    src="/Kolej_Matrikulasi_Perak.webp"
                    alt="Kolej Matrikulasi Perak"
                    preview={false}
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col xs={18} md={20}>
                  <Title level={4}>Kolej Matrikulasi Perak</Title>
                  <Text type="secondary">
                    Physics and Computer Science Module
                  </Text>
                  <br />
                  <Text type="secondary">Aug 2017 – Aug 2018</Text>
                  <br />
                  <Text>Grade: 4.00</Text>
                  <br />
                  <Text>MUET: Band 5</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
  );
};

export default Education;
