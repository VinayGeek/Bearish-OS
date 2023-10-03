import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Folder, Three } from "../../Constant/SVG";

const FolderList = () => {
  return (
    <div
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Folder />
        Folder Name
        <div>
          <Three />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Folder />
        Folder Name
        <Three />
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "5px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Folder />
        Folder Name
        <Three />
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default FolderList;
