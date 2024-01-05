import { Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { data } from "../../../Config";

const Projects = () => {
  return (
    <>
      <Grid2 container>
        <Grid2 item xs={12}>
          <Typography variant="h5">Projects</Typography>
        </Grid2>
        <Grid2 item xs={10} sx={{ m: "auto", display: "flex" }}>
          {data.map((el) => {
            return <ProjectCard data={el} key={el.title} />;
          })}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Projects;
