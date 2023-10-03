import { useRef, useState } from "react";
import ScrollStyle from "./scroll.module.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Carousel({ children }) {
  const elem = useRef(null);
  const [buttonCall, setButtonCall] = useState(0);

  const scrollNext = () => {
    if (elem.current) {
      elem.current.firstChild.scrollLeft += 300;
      setButtonCall((elem.current.firstChild.scrollLeft += 300));
    }
  };

  const scrollBack = () => {
    if (elem.current) {
      elem.current.firstChild.scrollLeft -= 300;
      setButtonCall((elem.current.firstChild.scrollLeft -= 300));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {buttonCall > 0 ? (
        <button className={ScrollStyle.scrollButton} onClick={scrollBack}>
          <ArrowLeftIcon />
        </button>
      ) : null}

      <div style={{ overflow: "hidden" }} ref={elem}>
        {children}
      </div>

      <button onClick={scrollNext} className={ScrollStyle.scrollButton}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default Carousel;
