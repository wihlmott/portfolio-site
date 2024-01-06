import { homePic } from "../../../Config";

import styles from "./HomePic.module.css";

// const styles = {
//   aspectRatio: "1",
//   height: "65%",
//   borderRadius: "50%",
//   transform: "translateY(20%)",
//   overflow: "hidden",
//   boxShadow: "4px 4px 10px 5px rgba(0,0,0,0.5)",

//   "@media (max-width:600px)": 'transform: "translateX(20%)"',
// };

const HomePic = () => {
  return (
    <div className={styles.pic}>
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
