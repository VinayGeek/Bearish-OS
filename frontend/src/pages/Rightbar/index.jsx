import React from "react";
import RightBarBox from "../../components/RightBarBox";
import Expand from "../../Constant/SVG/Expand";

const RightBar = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <p>
            <b>Cloud Analytics</b>
            <br />5 Active Analytic Links
          </p>
          <p>
            <Expand />
          </p>
        </div>
        {/* box */}
        {[1, 1, 1].map((item, index) => {
          return <RightBarBox key={index} />;
        })}
        <div>
          <p>View More</p>
        </div>
        {/* bearish OS Card */}
        <div
          style={{
            backgroundColor: "#fef4e2",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h4
            style={{
              lineHeight: "0",
            }}
          >
            Upload to Bearish OS
          </h4>
          <p style={{ color: "#999" }}>
            All items uploaded to Bearish OS are fully secured and private
          </p>
          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "85%",
            }}
          >
            <img src="./ss2.png" />
          </div>

          <p style={{ textAlign: "center", color: "#999" }}>
            Drag and Drop items here to upload them
          </p>
        </div>
      </div>
    </>
  );
};

export default RightBar;
