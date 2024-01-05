import Grid2 from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

import HeaderButtons from "./HeaderButtons";

const boxStylingButtons = {
  backgroundColor: "none",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const Header = ({ email, buttons, boxStyling, clicked }) => {
  const receiveClick = (clickedPage) => {
    clicked(clickedPage);
  };

  return (
    <>
      <Grid2 item xs={11} sx={boxStylingButtons}>
        <HeaderButtons buttons={buttons} receiveClick={receiveClick} />
        <Button
          sx={{
            textTransform: "lowercase",
            alignItems: "flex-end",
            display: "flex",
          }}
        >
          {email}
        </Button>
      </Grid2>
    </>
  );
};

export default Header;
