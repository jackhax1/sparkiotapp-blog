import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import { Typography,Upload,notification } from "antd";
import { CloseOutlined, FilePdfOutlined } from "@ant-design/icons";



const FileInput = (props) => {
  const wrapperRef = useRef(null);

  const [file, setFile] = useState(null);

  useEffect(() => {
    props.onFileChange(file);
  }, [file]);

  const handleCloseNotification = () => {
    notification.destroy();
  };

  const showNotification = () => {
    notification.error({
      message: "File Upload Error",
      description: "Please upload a PDF file only.",
      placement: "topRight",
      duration: 4,
      onClose: handleCloseNotification,
    });
  };

  const returnSize = (file) => {
    const fileSizeInBytes = file.size; // Example file size in bytes
    let fileSize;

    if (fileSizeInBytes >= 1048576) {
      fileSize = (fileSizeInBytes / 1048576).toFixed(2) + " MB";
    } else {
      fileSize = (fileSizeInBytes / 1024).toFixed(2) + " KB";
    }
    return fileSize;
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <Typography.Title
          level={1}
          style={{
            fontSize: "40px",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 1,
            color: "#1890ff",
          }}
        >
          PDF
        </Typography.Title>
        <Typography.Title
          level={1}
          style={{
            fontSize: "40px",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          to Text by Jamil
        </Typography.Title>
      </div>

      {!file ? (
        <div
          ref={wrapperRef}
          style={{
            border: "2px dashed #d9d9d9",
            padding: "16px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onDragEnter={() => {}}
          onDragLeave={() => {}}
        >
          <Upload.Dragger
            beforeUpload={(file) => {
              if (file.type !== "application/pdf") {
                showNotification();
                return Upload.LIST_IGNORE;
              }
              setFile(file);
              return false;
            }}
            showUploadList={false}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="uploadImg.png" alt="" style={{ maxWidth: "100px" }} />
              <p>Drag & Drop your files here</p>
            </div>
          </Upload.Dragger>
        </div>
      ) : (
        <div className="drop-file-preview" style={{ marginTop: "24px" }}>
          <Typography.Text strong>Uploaded file</Typography.Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              padding: "8px",
              marginTop: "12px",
            }}
          >
            <FilePdfOutlined/>
            <div>
              <p>{file.name}</p>
              <p>{returnSize(file)}</p>
            </div>
            <CloseOutlined
              onClick={() => setFile(null)}
              style={{ cursor: "pointer", color: "#ff4d4f" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

FileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileInput;
