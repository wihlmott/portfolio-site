import { Button, Typography } from "@mui/material";

const bottomLinksStyle = [
  {
    textTransform: "capitalize",
    borderRadius: "30px",
    p: 2.4,
    px: 3.5,
    m: 0.5,
    mt: 1,
    cursor: "pointer",
    background: "black",
    color: "white",
    boxShadow: "0 0 0 0 rgba(0,0,0,1)",
    transform: "scale(1)",
    fontWeight: "bold",
    animation: "pulse 2s infinite",
  },
  { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" } },
  {
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0.97)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
      },
      "70%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
      },
      "100%": {
        transform: "scale(0.97)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      },
    },
  },
];

const Footer = ({ clicked }) => {
  const handleClick = (e) => clicked(e.target.innerText);

  return (
    <Button sx={bottomLinksStyle} onClick={handleClick}>
      <Typography variant="body">Get in touch</Typography>
    </Button>
  );
};

export default Footer;
