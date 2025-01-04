import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
const Home = lazy(() => import("./pages/Home"));
const PDFProject = lazy(() => import("./pages/PDFProject"));

import "./App.css"

function App() {
  return (
    <Router>
      {/* Suspense provides a fallback UI while the lazy-loaded component is being fetched */}
      <Suspense fallback={<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
      }}>
        <Spin size="large" />
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdf" element={<PDFProject />} />
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;