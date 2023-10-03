import Typography from "@mui/material/Typography";
import { STORAGE_LIST } from "../../Constant/Storagelist";
import StorageCard from "../../components/StorageCard";
import CardStyle from "./card.module.css";
import Carousel from "../../components/Carousel";

import { Folder, Menu, Three, File } from "../../Constant/SVG";
import FolderList from "../../components/FolderComp";
import UserList from "../../components/UserList";

export default function Dashboard() {
  return (
    <>
      <div className={CardStyle.container}>
        <Typography variant="h6" component="div">
          Cloudstorage
        </Typography>
        <div>
          <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "700" }}>
            My Cloud Storages
          </Typography>

          <Carousel>
            <div className={CardStyle.cardLayout}>
              {STORAGE_LIST.map((item, index) => (
                <StorageCard data={item} key={index} />
              ))}
            </div>
          </Carousel>
        </div>

        {/* folder section */}
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              columnGap: "5px",
            }}
          >
            <Folder />
            <b>Folders</b>
          </div>

          <div style={{ display: "flex", columnGap: "10px" }}>
            <Menu />
            <Three />
            <p>Show all folder</p>
          </div>
        </div>
        <FolderList />
        <div
          style={{
            width: "25%",
            display: "flex",
            columnGap: "50px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              columnGap: "5px",
            }}
          >
            <File />
            <b>Files</b>
          </div>
          <img src="ss.png" style={{ width: "100%" }} />
        </div>
        <UserList />
      </div>
    </>
  );
}
