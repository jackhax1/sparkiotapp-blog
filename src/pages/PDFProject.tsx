import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Row, Col, Button, Layout, Card } from "antd";
const { Content, Footer, Header } = Layout;

import { RcFile } from "antd/es/upload/interface.js";

import FileInput from "../components/pdfproject/file-input";
import FileConverter from "../components/pdfproject/file-converter";

// const FileInput = lazy(() => import("../components/pdfproject/file-input"));
// const FileConverter = lazy(() => import("../components/pdfproject/file-converter"));




const PDFProject = () => {
    const navigate = useNavigate();
    const [pdfFile, setPdfFile] = useState<RcFile>();

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        scrollToTop();
    }, [])

    return (
        <Layout>
            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                marginTop: "-8px"
            }}>
                <div
                    style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginRight: "30px"
                    }}
                >
                    Jamil Khan
                </div>
                <Row gutter={[32, 32]} justify="center">
                    <Col span={6}>
                    <Button onClick={() => navigate("/")} type="primary">
                        Back to Home
                    </Button>
                    </Col>
                    
                </Row>

            </Header>


            <Content className="content-section" style={{ backgroundColor: "#f0f2f5" }}>
                <Row justify="center" >
                    <Col xs={24} sm={12} lg={8}>
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
