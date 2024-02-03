import backBtn from "../assets/backBtn.png";
const Header = ({ pageName }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        boxShadow: "0 4px 2px -2px #D9D9D9",
        padding: "15px 15px",
      }}
    >
      <img src={backBtn} />
      <div
        style={{
          fontSize: "25px",
          flexGrow: "1",
          textAlign: "center",
          marginRight: "40px",
        }}
      >
        {pageName}
      </div>
    </div>
  );
};
export default Header;
