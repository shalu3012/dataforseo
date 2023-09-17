import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScoreBar = ({ percentage, title }) => {
  let color = percentage === 100 ? "#08c208" : "orange";

  return (
    <div style={{ width: 120, height: 120, margin: "0px 10px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
        })}
      />
      <h6 style={{ textAlign: "center" }}>{title}</h6>
    </div>
  );
};

export default ScoreBar;
