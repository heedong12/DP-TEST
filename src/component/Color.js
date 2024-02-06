const Color = ({ color, onColorClick }) => {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: color,
      }}
      onClick={() => onColorClick(color)}
    ></div>
  );
};
export default Color;
