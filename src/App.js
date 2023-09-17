import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Search from "./Components/Search";
import Results from "./Components/Results";
import { useState } from "react";
import React from "react";

import PagenotFound from "./Components/PagenotFound";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  function makegetrequest(id, url) {
    const interval = setInterval(() => {
      get(id);
    }, 10000);
    function get(taskid) {
      axios({
        method: "get",
        url:
          "https://api.dataforseo.com/v3/on_page/lighthouse/task_get/json/" +
          taskid,
        auth: {
          username: process.env.REACT_APP_API_user,
          password: process.env.REACT_APP_API_key,
        },

        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (response) {
          if (response.data.tasks[0].status_code === 40401) {
            setError(true);
            return;
          }
          setData(response.data.tasks[0].result[0]);
          clearInterval(interval);
        })
        .catch(function (error) {});
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        {data && <Navigate to="/result" />}
        {error && <Navigate to="*" />}
        <Routes>
          <Route path="*" element={<PagenotFound />} />
          <Route
            path="/"
            element={<Search makegetrequest={makegetrequest} />}
          ></Route>
          <Route path="/result" element={<Results data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
