import { Button } from "@mui/material";

const buttonStyles = [
  {
    textTransform: "capitalize",
    borderRadius: "20px",
    color: "black",
    px: 5,
    fontWeight: "bold",
    textShadow: "2px 0px 4px rgba(0, 0, 0, 0.12)",
  },
  { "&:hover": { backgroundColor: "rgba(230, 230, 230, 0.45)" } },
];

const headerButtons = ({ buttons, receiveClick }) => {
  const sendSelection = (e) => {
    receiveClick(e.target.innerText);
  };

  return (
    <>
      {buttons.map((buttonText) => {
        return (
          <Button sx={buttonStyles} onClick={sendSelection} key={buttonText}>
            {buttonText}
          </Button>
        );
      })}
    </>
  );
};
export default headerButtons;
