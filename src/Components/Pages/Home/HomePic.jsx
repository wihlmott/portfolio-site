import { homePic } from "../../../Config";

const styles = {
  aspectRatio: "1",
  height: "65%",
  borderRadius: "50%",
  transform: "translate(10%,20%)",
  overflow: "hidden",
  boxShadow: "4px 4px 10px 5px rgba(0,0,0,0.5)",
};

const HomePic = () => {
  return (
    <div style={styles}>
      <img
        src={homePic}
        style={{
          aspectRatio: "auto",
          width: "680px",
          position: "relative",
        }}
      />
    </div>
  );
};

export default HomePic;
