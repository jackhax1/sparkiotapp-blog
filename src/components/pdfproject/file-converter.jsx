import { Row, Col, Card, Button, Spin, Modal } from "antd";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons";

import React, { useEffect, useMemo, useState } from "react";
import TextRecognition from './TextRecognition';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



function FileConverter({ pdfUrl, fileName }) {
  const myRef = React.createRef();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, [imageUrls]);

  const handleClickOpen = (url, index) => {
    setSelectedImage({ url, index });
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  const UrlUploader = (url) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          const data = atob(e.target.result.replace(/.*base64,/, ""));
          renderPage(data);
        };
        reader.readAsDataURL(blob);
      });
    });
  };

  useMemo(() => {
    UrlUploader(pdfUrl);
  }, []);

  const renderPage = async (data) => {
    setLoading(true);
    const imagesList = [];
    const canvas = document.createElement("canvas");
    canvas.setAttribute("className", "canv");
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    for (let i = 1; i <= pdf.numPages; i++) {
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };
      await page.render(render_context).promise;
      let img = canvas.toDataURL("image/png");
      imagesList.push(img);
    }
    setNumOfPages((e) => e + pdf.numPages);
    setImageUrls((e) => [...e, ...imagesList]);
  };

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [imageUrls]);

  const downloadImage = (url, index) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}_${index + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    handleClose();
  };

  return (
    <div style={{ margin: "16px 0", textAlign: "center" }} ref={myRef} id="image-container">

      {loading ? (<Spin size="large" />) : (
        <>
          {imageUrls.length > 0 && (
            <>
              <h4 className="drop-file-preview__title">
                Converted Images - {numOfPages}
              </h4>
              <Row gutter={[16, 16]}>
                {imageUrls.map((url, index) => (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <Card hoverable style={{ position: "relative", width: "100%", height: "250px", overflow: "hidden", }}
                      cover={
                        <>
                        <Row>
                          <Button type="text" icon={<EyeOutlined />} onClick={() => handleClickOpen(url, index)} />
                          <Button type="text" icon={<DownloadOutlined />} onClick={() => downloadImage(url, index)} />
                        </Row>
                          
                          <img src={url} alt={`Page ${index + 1}`} style={{ width: "100%", height: "100%", }} />
                        </>
                      }

                    />
                    <Card style={{ marginTop: "16px" }}>
                      <TextRecognition selectedImage={url} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </>


      )}

      <Modal open={open} onCancel={handleClose} title="Preview" footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button key="download" type="primary" onClick={() => downloadImage(selectedImage?.url, selectedImage?.index)}>
          Download
        </Button>,
      ]}
      >
        <div style={{ overflow: "auto", maxHeight: "400px" }}>
          <img src={selectedImage?.url} alt={selectedImage?.url} style={{ width: "100%", height: "auto", objectFit: "cover", }} />
        </div>
      </Modal>
    </div>
  );
}

export default FileConverter;
