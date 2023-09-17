import React from "react";
import PagenotFound from "./PagenotFound";
import ScoreBar from "./ScoreBar";
import { Col, Container, Row, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Results = ({ data }) => {
  return (
    <main>
      {!data ? (
        <PagenotFound />
      ) : (
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <p style={{ marginTop: "10px", fontWeight: 500, color: "darkgrey" }}>
            Everything you need to know
          </p>
          <h1>Results for {data.requestedUrl}</h1>
          <Row>
            <Col className="d-flex flex-column align-items-center justify-content-center">
              <div className="screenshot-container py-5">
                <div className="ss-header py-4">
                  <div className="dots">
                    <span className="white-dots"></span>
                    <span className="white-dots"></span>
                    <span className="white-dots"></span>
                  </div>
                </div>
                <Image
                  src="https://api.dataforseo.com/cdn/screenshot/09170738-5830-0444-0000-1da7513c83e0"
                  alt="Image"
                  rounded
                  width={600}
                  height={400}
                  className="animate-pulse  border border-t-0"
                />
              </div>
            </Col>
            <Col className="d-flex  align-items-center justify-content-center">
              <ScoreBar
                percentage={data.categories.accessibility.score * 100}
                title={data.categories.accessibility.title}
              />
              <ScoreBar
                percentage={data.categories["best-practices"].score * 100}
                title={data.categories["best-practices"].title}
              />

              <ScoreBar
                percentage={data.categories.performance.score * 100}
                title={data.categories.performance.title}
              />

              <ScoreBar
                percentage={data.categories.seo.score * 100}
                title={data.categories.seo.title}
              />
            </Col>
          </Row>

          {Object.keys(data.categories).map((k) => (
            <div className="main-grid-container" key={k}>
              <h1>{data.categories[k].title}</h1>
              <div className="grid-container">
                {data.categories[k].auditRefs.map((item) => (
                  <Card className="grid-item" key={item.id}>
                    {data.audits[item.id].score ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="green"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="red"
                        className="bi bi-exclamation-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    )}

                    <Card.Body>
                      <Card.Title>{data.audits[item.id].title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {data.audits[item.id].description}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </Container>
      )}
    </main>
  );
};

export default Results;
