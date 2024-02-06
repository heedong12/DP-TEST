import Color from "./Color.js";
const Palette = ({ onColorClick }) => {
  const colors1 = [
    "#FF0000",
    "#FF4C00",
    "#FFE500",
    "#11D800",
    "#010BFF",
    "#0D009F",
    "#9902F5",
    "#FF00B8",
    "#000000",
    "#C3C2C2",
    "#550D0D",
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "5px",
        }}
      >
        {colors1.map((c, index) => (
          <Color key={index} color={c} onColorClick={onColorClick} />
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Palette;
