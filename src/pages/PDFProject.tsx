import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Row, Col, Button, Layout, Card } from "antd";

const { Content, Footer } = Layout;

import FileInput from "../components/pdfproject/file-input";
import FileConverter from "../components/pdfproject/file-converter.jsx";
import { RcFile } from "antd/es/upload/interface.js";



const PDFProject = () => {
    const navigate = useNavigate();
    const [pdfFile, setPdfFile] = useState<RcFile>();

    return (
        <Layout>
            <Content>
            <Row >
                <Button  onClick={() => navigate("/")} type="primary">
                    Back to Home
                </Button>
                </Row>
            </Content>
            <Content className="content-section" style={{ backgroundColor: "#f0f2f5" }}>
                <Row justify="center" >
                    <Col>
                        <Card className="mini-card">
                            <FileInput onFileChange={(file: RcFile) => setPdfFile(file)} />
                        </Card>
                    </Col>
                    {pdfFile && (
                        <Col span={24}>
                            <FileConverter
                                pdfUrl={URL.createObjectURL(pdfFile)}
                                fileName={pdfFile.name}
                            />
                        </Col>
                    )}
                </Row>
            </Content>

            <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white" }}>
                ©2024 Created by Jamil Khan
            </Footer>
        </Layout>
    );
};

export default PDFProject;
