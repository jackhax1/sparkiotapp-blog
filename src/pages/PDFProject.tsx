import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Row, Col} from "antd";

import "../pdfproject.css"

import FileInput from "../components/pdfproject/file-input";
import FileConverter from "../components/pdfproject/file-converter.jsx";

const PDFProject = () => {
    const navigate = useNavigate();
    const [pdfFile, setPdfFile] = useState(null);

    return (
        <div style={{ padding: "20px" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    backgroundColor: "#1890ff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 15px",
                    cursor: "pointer",
                }}
            >
                Back to Home
            </button>

            <Row justify="center" align="middle" style={{ padding: "24px", gap: "16px", flexWrap: "wrap" }}>
                <Col>
                    <FileInput onFileChange={(file) => setPdfFile(file)} />
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
        </div>
    );
};

export default PDFProject;
