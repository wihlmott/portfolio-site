import ProjectCard from "./ProjectCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { data } from "../../../Config";

const Projects = () => {
  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
      }}
    >
      <Grid2 container>
        <Grid2 item xs={12}>
          <h1
            style={{
              fontSize: "1.4rem",
              textShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Projects
          </h1>
        </Grid2>
        <Grid2 item xs={10} sx={{ display: "contents" }}>
          {data.map((el) => {
            return <ProjectCard data={el} key={el.title} />;
          })}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Projects;
