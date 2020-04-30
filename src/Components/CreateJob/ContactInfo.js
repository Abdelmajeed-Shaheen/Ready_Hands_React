import React from "react";
import TextField from "@material-ui/core/TextField";
export default function ContactInfo() {
  return (
    <div>
      <h3 style={{ marginLeft: 30 }}>Please fill these information:</h3>
      <form noValidate autoComplete="off">
        <TextField
          required
          id="standard-basic"
          label="Phone number"
          style={{ marginLeft: 30, paddingRight: 10 }}
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          style={{ paddingRight: 10 }}
        />
        <TextField required id="standard-basic" label="Address" />
      </form>
    </div>
  );
}
