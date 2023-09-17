import React from "react";
import { Container } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <ClipLoader
        color={"orange"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

export default Loading;
