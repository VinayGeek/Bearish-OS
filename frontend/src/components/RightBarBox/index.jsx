import React from "react";
import Link from "../../Constant/SVG/Link";
import Folder from "../../Constant/SVG/Folder";
import Eye from "../../Constant/SVG/Eye";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const RightBarBox = () => {
  return (
    <div
      style={{
        boxShadow: "0 0 2px #ccc",
        borderRadius: "5px",
        margin: "0 30px 7px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          alignItems: "center",
          height: "30px",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "5px",
          }}
        >
          <Link />
          Link Name One
        </p>
        <span>
          <ArrowRightIcon />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          marginLeft: "40px",
          lineHeight: "0",
        }}
      >
        <Folder />
        <span
          style={{
            height: "30px",
          }}
        >
          <p>Folder or File Linked...</p>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          marginLeft: "40px",
          lineHeight: "0",
        }}
      >
        <Eye />
        <span>
          <p>10 Total Views</p>
        </span>
      </div>
    </div>
  );
};

export default RightBarBox;
