import app from "./express";
import config from "../config";

/* CONNECT To NodeJs SERVER USING EXPRESS */
app.listen(3000, err => {
  if (err) {
    console.log(err);
  }
  const mail = process.env.MAIL_USER;
  console.log(`Server running on port ${config.PORT}`);
});
/* <--end--> */
