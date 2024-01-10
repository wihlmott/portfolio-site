import Header from "../Header/Header";
import Body from "../Body";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Projects from "../Pages/Projects/Projects";
import GetInTouch from "../Pages/GetInTouch";
import Resume from "../Pages/Resume";

const buttons = ["home", "about", "projects", "resume"];
const email = "wit.valentine@gmail.com";
const name = "Wihlmott Valentine";
const message =
  "Mobile and Web Developer - creating responsive websites, web applications and Mobile applications";

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
    if (pageSelected == "Get In Touch") setPage(pageSelected);
  };

  return (
    <>
      <Header email={email} buttons={buttons} clicked={clicked} />
      {page == "Home" && (
        <Body name={name} message={message} homeOrAbout={home} />
      )}
      {page == "Projects" && <Projects />}
      {page == "Get In Touch" && <GetInTouch />}
      {page == "Resume" && <Resume />}
      {page != "Get In Touch" && <Footer clicked={clicked} />}
    </>
  );
};

export default Layout;
