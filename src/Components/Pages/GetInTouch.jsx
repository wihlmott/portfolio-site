import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = "service_abrrf15";
const templateID = "template_f9qcli9";
const publicKey = "wKJkpcr4cDBZ75lFd";

const GetInTouch = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMessage = (e) => setMessage(e.target.value);

  const submitForm = () => {
    const nameIsValid = name?.length > 0;
    const emailIsValid =
      email?.length > 0 && email.includes("@") && email.includes(".");
    const messageIsValid = message?.length > 0;

    const formValid = nameIsValid && emailIsValid && messageIsValid;

    if (!formValid) {
      console.log(`error`);
      return;
    }
    const formObj = { from_name: name, from_email: email, message: message };
    emailjs
      .send(serviceID, templateID, formObj, publicKey)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h1
        style={{
          fontSize: "1.4rem",
          textShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        Get In Touch
      </h1>
      <div
        style={{
          height: "60vh",
          width: "400px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Grid2 container>
          <Grid2 item xs={6}>
            <div>
              <p>Name:*</p>
              <TextField sx={{ mr: 0.5 }} onChange={updateName} />
            </div>
          </Grid2>
          <Grid2 item xs={6}>
            <p>Email:*</p>
            <TextField sx={{ ml: 0.5 }} onChange={updateEmail} />
          </Grid2>
          <Grid2 item xs={12}>
            <div>
              <p>Message:*</p>
              <TextField
                sx={{ width: "100%" }}
                multiline
                rows={10}
                onChange={updateMessage}
              />
            </div>
          </Grid2>
          <Button
            variant="contained"
            sx={{
              mx: "auto",
              mt: 2,
              borderRadius: "15px",
              background: "black",
            }}
            onClick={submitForm}
          >
            Send
          </Button>
        </Grid2>
      </div>
    </>
  );
};

export default GetInTouch;
