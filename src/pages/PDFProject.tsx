import { useState, useEffect, lazy } from "react";

import { Row, Col,Layout, Card } from "antd";
const { Content} = Layout;

import { RcFile } from "antd/es/upload/interface.js";

import FileInput from "../components/pdfproject/file-input";
import FileConverter from "../components/pdfproject/file-converter";
import MenuBarBack from "../components/MenuBarBack";

import { scrollToTop } from "../utils";
const PageFooter = lazy(()=> import("../components/PageFooter"))


const PDFProject = () => {
    const [pdfFile, setPdfFile] = useState<RcFile>();

    useEffect(() => {
        scrollToTop();
    }, [])

    return (
        <Layout>
            <MenuBarBack/>


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

            <PageFooter/>
        </Layout>
    );
};

export default PDFProject;
