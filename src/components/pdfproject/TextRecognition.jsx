import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

import { Progress, Typography } from "antd";

const { Text } = Typography;

const TextRecognition = ({ selectedImage }) => {
  const [recognizedText, setRecognizedText] = useState('');
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage, 'eng',
          {
            logger: (m) => {
              setStatus(toTitleCase(m.status));
              if (m.status === 'recognizing text') {
                setProgress(m.progress);
              }
            },
          }
        );
        setRecognizedText(result.data.text);
        console.log(result.data.text);
      }
    };
    recognizeText();
  }, [selectedImage]);
  return (
    <div>
      <div>
        <p>{progress === 1 ? "Done" : status}</p>
        {progress > 0 && (
          <div style={{ marginTop: 20, border: "1px solid #d9d9d9", padding: "10px" }}>
            <Text>Progress: {(progress * 100).toFixed(0)}%</Text>
            <Progress
              percent={progress * 100}
              status={progress < 1 ? "active" : "success"}
              showInfo={false}
              style={{ marginTop: 10 }}
            />
          </div>
        )}
        <p>{recognizedText}</p>
      </div>
    </div>
  );
};
export default TextRecognition;