import { Alert, Button, TextField } from "@mui/material";
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

  const [alertMsg, setAlertMsg] = useState();

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
      if (!nameIsValid) {
        setAlertMsg({ status: "warning", msg: "Name cannot be blank." });
        return;
      }
      if (!emailIsValid) {
        setAlertMsg({
          status: "warning",
          msg: "Email must contain '@' and a period(.)",
        });
        return;
      }
      if (!messageIsValid) {
        setAlertMsg({ status: "warning", msg: "Message cannot be blank." });
        return;
      }
    }
    const formObj = { from_name: name, from_email: email, message: message };

    emailjs
      .send(serviceID, templateID, formObj, publicKey)
      .then((res) => {
        console.log(res.status);
        setAlertMsg({ status: "success", msg: "Email sent." });
        resetForm();
      })
      .catch((err) => {
        console.log(err.message);
        setAlertMsg({ status: "error", msg: `Error - ${err.message}` });
      });
  };

  const resetForm = () => {
    setName(""), setEmail(""), setMessage("");
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

      <Grid2 container>
        <Grid2 item md={4} xs={0.5}></Grid2>
        <Grid2 item md={4} xs={11}>
          <div
            style={{
              height: "60vh",
              width: "100%",
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
              {alertMsg && (
                <Grid2 item xs={12}>
                  <Alert severity={alertMsg.status} sx={{ m: "auto" }}>
                    {alertMsg.msg}
                  </Alert>
                </Grid2>
              )}
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
        </Grid2>
        <Grid2 item md={4} xs={0.5}></Grid2>
      </Grid2>
    </>
  );
};

export default GetInTouch;
