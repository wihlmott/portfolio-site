import { aboutMe } from "../../../Config";
import styles from "./About.module.css";

const data = aboutMe;

const About = () => {
  return (
    <div style={{ height: "75vh", overflowY: "auto" }}>
      <h1 className={styles.header}>About Me:</h1>

      <p>{data.description}</p>

      <h1>Education: </h1>
      {data.education.map((el, i) => {
        return (
          <p style={{ display: "inline" }} key={el}>
            {el}
            {`${i != data.education.length - 1 ? `, ` : "."}`}
          </p>
        );
      })}

      <h1>Tools Used: </h1>
      {data.tools.map((el, i) => {
        return (
          <p style={{ display: "inline" }} key={el}>
            {el}
            {`${i != data.tools.length - 1 ? `, ` : "."}`}
          </p>
        );
      })}

      <br />
      <h1>Skills:</h1>
      {data.skills.map((el) => {
        return <p key={el}>{el}</p>;
      })}

      <h1>Interests:</h1>
      <p>{data.interests}</p>

      <h1>Personal Information:</h1>
      {Object.entries(data.personalInformation).map((el) => {
        return (
          <p key={el}>
            {el[0][0].toUpperCase() + el[0].slice(1).replace("_", " ") + `: `}
            {el[1]}
          </p>
        );
      })}
    </div>
  );
};

export default About;
