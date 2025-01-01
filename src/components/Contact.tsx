import { Layout, Row, Col, Form, Input, Button, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import "../App.css"

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const Contact = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
      <Content  className="content-section" id="contact" style={{backgroundColor:"#f9f9f9"}} >
        <Title level={2} className="content-title">
          Contact Me
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {/* Contact Information */}
          <Col xs={24} md={10}>
            <Space direction="vertical" size="large">
              {/* Email */}
              <div>
                <MailOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
                <Text style={{ marginLeft: "10px" }}>exjamil@gmail.com</Text>
              </div>
              {/* Phone */}
              <div>
                <PhoneOutlined style={{ fontSize: "24px", color: "#52c41a" }} />
                <Text style={{ marginLeft: "10px" }}>+6011-3660 2337</Text>
              </div>
              {/* Location */}
              <div>
                <EnvironmentOutlined
                  style={{ fontSize: "24px", color: "#faad14" }}
                />
                <Text style={{ marginLeft: "10px" }}>
                  Petaling Jaya, Malaysia
                </Text>
              </div>
              {/* LinkedIn */}
              <div>
                <LinkedinOutlined
                  style={{ fontSize: "24px", color: "#0e76a8" }}
                />
                <Link
                  href="https://www.linkedin.com/in/jamil-khan-45195216b/"
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  LinkedIn Profile
                </Link>
              </div>
              {/* Resume */}
              <div>
                <DownloadOutlined
                  style={{ fontSize: "24px", color: "#1890ff" }}
                />
                <Link
                  href="/path-to-your-resume.pdf"
                  target="_blank"
                  download
                  style={{ marginLeft: "10px" }}
                >
                  Download Resume
                </Link>
              </div>
            </Space>
          </Col>

          {/* Contact Form */}
          <Col xs={24} md={12}>
            <Form
              name="contact"
              layout="vertical"
              onFinish={handleSubmit}
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="yourname@example.com" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <Input.TextArea rows={4} placeholder="Write your message here..." />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
  );
};

export default Contact;
