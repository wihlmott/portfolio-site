import Grid2 from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import About from "../About";
import HomePic from "./HomePic";

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
            <Typography
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
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sx={leftBoxesBottom}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2.6rem",
                "@media (max-width:600px)": {
                  fontSize: "1.6rem",
                  display: `${homeOrAbout ? "" : "none"}`,
                },
              }}
            >
              {message}
            </Typography>
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
