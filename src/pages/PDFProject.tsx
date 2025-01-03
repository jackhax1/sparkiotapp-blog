import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid } from "@mui/material";

import "../pdfproject.css"

import FileInput from "../components/pdfproject/file-input";
import FileConverter from "../components/pdfproject/file-converter.jsx";

const PDFProject = () => {
  const navigate = useNavigate();
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      <h1>Tesseract.js PDF OCR</h1>
    <div style={{ height: "100dvh" }}>
      <Grid container className="d-flex" sx={{ py: 6, px: 4 }}>
        <Grid item className="box">
          <FileInput onFileChange={(file) => setPdfFile(file)} />
        </Grid>
        {pdfFile && (
          <Grid item sx={{ width: "100%" }}>
            <FileConverter
              pdfUrl={URL.createObjectURL(pdfFile)}
              fileName={pdfFile.name}
            />
          </Grid>
        )}
      </Grid>
    </div>
    </div>
  );
};

export default PDFProject;
