import { Typography } from "@mui/material";
import { aboutMe } from "../../Config";

const data = aboutMe;

const headerStyle = { fontWeight: "bold" };

const About = () => {
  return (
    <>
      <Typography variant="h6">About Me:</Typography>
      <br />

      <Typography variant="body2">{data.description}</Typography>
      <br />

      <Typography variant="body1" sx={headerStyle}>
        Tools Used: <br />
        {data.tools.map((el, i) => {
          return (
            <Typography variant="body2" style={{ display: "inline" }}>
              {el}
              {`${i != data.tools.length - 1 ? `, ` : "."}`}
            </Typography>
          );
        })}
      </Typography>
      <br />
      <Typography variant="body1">
        Skills:
        {data.skills.map((el) => {
          return <Typography variant="body2">{el}</Typography>;
        })}
      </Typography>
      <br />
      <Typography variant="body1">
        Interests: <Typography variant="body2">{data.interests}</Typography>
      </Typography>
      <br />
      <Typography variant="body1">
        Personal Information:{" "}
        {Object.entries(data.personalInformation).map((el) => {
          return (
            <Typography variant="body2">
              {el[0][0].toUpperCase() + el[0].slice(1).replace("_", " ") + `: `}
              {el[1]}
            </Typography>
          );
        })}
      </Typography>
    </>
  );
};

export default About;
