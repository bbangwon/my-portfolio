import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route
            path="/projects/:id"
            element={<ProjectDetail></ProjectDetail>}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
