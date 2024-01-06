import Grid2 from "@mui/material/Unstable_Grid2";
import About from "./About";
import HomePic from "./HomePic";

import styles from "./Home.module.css";

const leftBoxesTop = {
  height: "44%",
  position: "relative",
};
const leftBoxesBottom = {
  height: "56%",
};

const Home = ({ name, message, homeOrAbout }) => {
  return (
    <>
      {
        <Grid2 item md={7}>
          <Grid2 item xs={12} sx={leftBoxesTop}>
            {/* <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: "0",
                m: 2,
                fontSize: "1.5rem",
                "@media (max-width:600px)": {
                  fontSize: "1.2rem",
                  display: `${homeOrAbout ? "" : "none"}`,
                },
              }}
            >
              {name}
            </Typography> */}
            <p
              className={
                homeOrAbout
                  ? `${styles.name}`
                  : `${styles.name} ${styles.hidden}`
              }
            >
              {name}
            </p>
          </Grid2>
          <Grid2 item xs={12} sx={leftBoxesBottom}>
            <p
              className={
                homeOrAbout
                  ? `${styles.message1}`
                  : `${styles.message1} ${styles.hidden}`
              }
            >
              {message.split("-")[0]} -{" "}
            </p>
            <p
              className={
                homeOrAbout
                  ? `${styles.message2}`
                  : `${styles.message2} ${styles.hidden}`
              }
            >
              {message.split("-")[1]}
            </p>
          </Grid2>
        </Grid2>
      }
      <Grid2 item md={5}>
        {!homeOrAbout && <About />}
        {homeOrAbout && <HomePic />}
      </Grid2>
    </>
  );
};

export default Home;
