import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (
    <div>
      <Container
        className="fof d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh", transition: "all 0.6s" }}
      >
        <h1>Error 404</h1>
        <p>Something went wrong</p>
        <Link to={"/"}>
          <Button
            style={{
              backgroundColor: "orange",
              border: "1px solid orange",
            }}
          >
            Go back
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default PagenotFound;
