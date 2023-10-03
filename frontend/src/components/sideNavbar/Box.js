import SVGIcon from "../svg/SVGIcon";

const Box = ({ show, setShow }) => {
  const handleClick = () => {
    setShow(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        top: 11,
        left: 8,
      }}
    >
      {show && (
        <ul
          style={{
            padding: "0",
            margin: "0",
            listStyleType: "none",
            textAlign: "center",
            boxShadow: "0px 0px 3px #ccc",
            borderRadius: "5px",
          }}
        >
          {Object.keys(SVGIcon()).map((data, i) => {
            return (
              <li
                key={i}
                style={{
                  padding: "5px 2px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                {SVGIcon()[data]}
                <br />
                {data}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Box;
