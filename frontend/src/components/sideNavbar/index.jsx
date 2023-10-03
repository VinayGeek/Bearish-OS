import React from "react";
import SideBarStyle from "./siderbar.module.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EditIcon from "@mui/icons-material/Edit";
import { STORAGE_LIST } from "../../Constant/Storagelist";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Setting, Plug } from "../../Constant/SVG";
import Box from "./Box";
import { useState } from "react";

function SiderBar() {
  const [show, setShow] = useState(false);
  return (
    <div className={SideBarStyle["siderbar-container"]}>
      <div className={SideBarStyle["siderbar-header"]}>
        <AcUnitIcon onClick={() => setShow(!show)} />
        <Box show={show} setShow={setShow} />
        <p
          style={{ display: "flex", alignItems: "start", columnGap: "0.5rem" }}
        >
          Company Name <ArrowRightIcon />
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <button className={SideBarStyle.createButton}>
          <EditIcon /> Create New
        </button>
        <Plug />
      </div>
      <div style={{ width: "100%" }}>
        <p style={{ fontSize: "14px", fontWeight: "700" }}>Cloud Storage</p>
        <ul className={SideBarStyle.unorderStyle}>
          {STORAGE_LIST.map((item, index) => {
            return (
              <li className={SideBarStyle.listStyle} key={index}>
                <p>
                  <item.icon /> {item.name}
                </p>{" "}
                {item.menu ? <Setting /> : ""}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p style={{ fontSize: "14px", fontWeight: "700" }}>Shared</p>
      </div>
    </div>
  );
}

export default SiderBar;
