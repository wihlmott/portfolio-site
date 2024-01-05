import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";

const bottomLinksStyle = [
  {
    textTransform: "capitalize",
    borderRadius: "30px",
    p: 2.4,
    px: 3.5,
    m: 0.5,
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    boxShadow: "3px 3px 2px 0px rgba(0,0,0,0.5)",
    fontWeight: "bold",
  },
  { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" } },
];

const Footer = ({ boxStyling }) => {
  return (
    <>
      <Grid2 item xs={12} sx={boxStyling}>
        <Button sx={bottomLinksStyle}>
          <Typography variant="body">Get in touch</Typography>
        </Button>
      </Grid2>
    </>
  );
};

export default Footer;
