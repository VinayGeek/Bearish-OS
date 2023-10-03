import React from "react";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomizedProgressBars from "../progressBar";

function Card({ data }) {
  const SX_STYLE = {
    width: "100%",
    boxShadow: "0px 2px 5px #ccc",
    borderRadius: "0.25rem",
    backgroundColor: "white",
    minWidth: "220px",
    padding: "0.5rem 0",
  };

  return (
    <Box sx={SX_STYLE}>
      <div style={{ justifyContent: "space-between", padding: "10px" }}>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <data.icon />
          {data.menu ? <MoreHorizIcon /> : null}
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "12px" }}>
            <b>{data.name}</b>
          </p>
          <p style={{ fontSize: "10px" }}>100 files</p>
        </div>

        <p style={{ fontSize: "10px" }}>
          {data.usedStorage} Gb of {data.storageLimit} GB Used
        </p>
        <CustomizedProgressBars
          color={data.color}
          percentage={data.percentage()}
        />
      </div>
    </Box>
  );
}

export default Card;
