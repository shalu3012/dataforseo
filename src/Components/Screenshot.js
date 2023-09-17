import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PropagateLoader from "react-spinners/PropagateLoader";

const Screenshot = ({ imgurl }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="screenshot-container py-5">
            <div className="ss-header py-4">
              <div className="dots">
                <span className="white-dots"></span>
                <span className="white-dots"></span>
                <span className="white-dots"></span>
              </div>
            </div>
            <Image
              src={imgurl}
              // alt="Image"
              rounded
              width={600}
              height={400}
              className="animate-pulse  border border-t-0"
            />
          </div>
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ maxHeight: "100vh" }}
        >
          <p
            style={{
              fontSize: "25px",
              fontWeight: "500",
              fontFamily: "monospace",
            }}
            className="animate-pulse text-2xl font-medium"
          >
            Hang on, we are analyzing your page...
          </p>
          <PropagateLoader
            color={"orange"}
            loading={true}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <p style={{ fontSize: "20px", margin: "15px" }}>
            This may take a few minutes. Please do not close this window.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Screenshot;
