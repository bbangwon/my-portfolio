import React from "react";

const sectionStyle = {
  textAlign: "center",
  padding: "40px 0",
};

const headingStyle = {
  fontSize: "36px",
  color: "#343a40",
  marginBottom: "16px",
};

const textStyle = {
  color: "#495057",
  fontSize: "18px",
};

export default function Home() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Welcome to My portfolio</h1>
      <p style={textStyle}>Explore my Projects and learn more about me.</p>
    </section>
  );
}
