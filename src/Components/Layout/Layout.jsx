import Header from "../Header/Header";
import Body from "../Body";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Projects from "../Pages/Projects/Projects";

const boxStyling = {
  backgroundColor: "none",
  borderRadius: "4px",
};

const buttons = ["home", "about", "projects", "resume"];
const email = "wit.valentine@gmail.com";
const name = "Wihlmott Valentine";
const message =
  "Web Developer - creating responsive websites and web applications.";

const Layout = () => {
  const [page, setPage] = useState("Home");
  const [home, setHome] = useState(true);

  const clicked = (pageSelected) => {
    if (pageSelected == "Home") {
      setHome(true);
      setPage("Home");
    }
    if (pageSelected == "About") {
      setHome(false);
      setPage("Home");
    }

    if (pageSelected == "Projects") setPage(pageSelected);
    if (pageSelected == "Resume") setPage(pageSelected);
  };

  return (
    <>
      <Header
        email={email}
        buttons={buttons}
        boxStyling={boxStyling}
        clicked={clicked}
      />
      {page == "Home" && (
        <Body name={name} message={message} homeOrAbout={home} />
      )}
      {page == "Projects" && <Projects />}
      <Footer boxStyling={boxStyling} />
    </>
  );
};

export default Layout;
