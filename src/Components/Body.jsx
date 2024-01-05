import Grid2 from "@mui/material/Unstable_Grid2";
import Home from "./Pages/Home/Home";

const Body = ({ name, message, homeOrAbout }) => {
  return (
    <>
      <Grid2
        container
        sx={{
          height: "80vh",
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "white",
        }}
      >
        <Home name={name} message={message} homeOrAbout={homeOrAbout} />
      </Grid2>
    </>
  );
};

export default Body;
