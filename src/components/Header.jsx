import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#ffffff",
  padding: "16px 0",
  borderBottom: "1px solid #e9ecef",
  marginBottom: "20px",
  textAlign: "center",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "500",
  margin: "0 12px",
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
      </nav>
    </header>
  );
}
