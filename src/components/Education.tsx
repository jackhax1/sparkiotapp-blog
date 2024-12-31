import { Layout, Card, Typography, Row, Col, Image } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const Education = () => {
  return (
      <Content style={{ padding: "50px 20px", backgroundColor: "#f0f2f5",minHeight:"100vh" }} id="education">
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Education
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {/* University of Malaya */}
          <Col xs={24} md={18}>
            <Card>
              <Row gutter={[16, 16]} align="middle">
                <Col xs={6} md={4}>
                  {/* University Logo */}
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Malaya_%28UM%29_coat_of_arms.png/330px-University_of_Malaya_%28UM%29_coat_of_arms.png"
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
            <Card>
              <Row gutter={[16, 16]} align="middle">
                <Col xs={6} md={4}>
                  {/* College Logo Placeholder */}
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/ms/thumb/7/71/Kolej_Matrikulasi_Perak.png/300px-Kolej_Matrikulasi_Perak.png"
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
