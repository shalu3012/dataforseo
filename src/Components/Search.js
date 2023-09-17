import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Screenshot from "./Screenshot";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Search = ({ makegetrequest }) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [imgurl, setImgUrl] = useState("");
  const [fetchImg, setFetchImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const post_array = [];
  function handleChange(e) {
    const { value } = e.target;
    setUrl(value);
  }
  post_array.push({
    url: url,
    for_mobile: true,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/page_screenshot",
      auth: {
        username: process.env.REACT_APP_API_user,
        password: process.env.REACT_APP_API_key,
      },
      data: [{ url: url }],
      headers: {
        "content-type": "application/json",
      },
    }).then(function (response) {
      setImgUrl(response.data.tasks[0].result[0].items[0].image);
    });

    await axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/lighthouse/task_post",
      auth: {
        username: process.env.REACT_APP_API_user,
        password: process.env.REACT_APP_API_key,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (response) {
        var result = response["data"]["tasks"];
        makegetrequest(result[0].id, imgurl, url);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        navigate("*");
      });
  };
  return (
    <>
      {loading && <Loading />}
      {imgurl ? (
        <Screenshot imgurl={imgurl} />
      ) : (
        <Container>
          <Form className="my-4 " onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your website url</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Url"
                value={url}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              type="submit"
              className="submit-btn"
              style={{
                backgroundColor: "orange",
                border: "1px solid orange",
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default Search;
