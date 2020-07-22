import React from "react";

function Wrapper({ style, ...props }) {
  const containerStyle = {
    maxWidth: "30rem",
    margin: "0 auto",
    padding: "1rem",
  };
  return <div style={containerStyle} {...props} />;
}

export default Wrapper;