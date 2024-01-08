import Grid2 from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

import HeaderButtons from "./HeaderButtons";

const boxStylingButtons = {
  mt: -2,
  backgroundColor: "none",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const Header = ({ email, buttons, clicked }) => {
  const receiveClick = (clickedPage) => clicked(clickedPage);

  return (
    <>
      <Grid2 item xs={11} sx={boxStylingButtons}>
        <HeaderButtons buttons={buttons} receiveClick={receiveClick} />
        <Button
          sx={{
            textTransform: "lowercase",
            alignItems: "flex-end",
            display: "flex",
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
        >
          {email}
        </Button>
      </Grid2>
    </>
  );
};

export default Header;
