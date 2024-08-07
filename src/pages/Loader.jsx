import React from "react";
import LoaderImages from "../components/LoaderImages";

const Loader = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fffff",
        backgroundAttachment: "fixed",
      }}
    >
      <LoaderImages />
    </div>
  );
};

export default Loader;
