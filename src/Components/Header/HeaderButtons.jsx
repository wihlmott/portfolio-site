import { Button } from "@mui/material";

const buttonStyles = [
  {
    textTransform: "capitalize",
    borderRadius: "20px",
    color: "black",
    px: 5,
    fontWeight: "bold",
  },
  { "&:hover": { backgroundColor: "rgba(230, 230, 230, 0.4)" } },
];

const headerButtons = ({ buttons, receiveClick }) => {
  const sendSelection = (e) => {
    receiveClick(e.target.innerText);
  };

  return (
    <>
      {buttons.map((buttonText) => {
        return (
          <>
            <Button sx={buttonStyles} onClick={sendSelection} key={buttonText}>
              {buttonText}
            </Button>
          </>
        );
      })}
    </>
  );
};
export default headerButtons;
