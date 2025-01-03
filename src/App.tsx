import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PDFProject from "./pages/PDFProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<PDFProject />} />
      </Routes>
    </Router>
  );
}

export default App;