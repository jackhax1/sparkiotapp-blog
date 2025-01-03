import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { Button, LinearProgress, Typography } from '@mui/material';

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
      <p>{progress==1? "Done": status}</p>
      {progress > 0 && (
        <div style={{ marginTop: 20 , border:"1px"}}>
          <Typography variant="body1">Progress: {(progress*100).toFixed(0)}%</Typography>
          <LinearProgress variant="determinate" value={progress*100} />
        </div>
      )}
      <p>{recognizedText}</p>
    </div>
  );
};
export default TextRecognition;