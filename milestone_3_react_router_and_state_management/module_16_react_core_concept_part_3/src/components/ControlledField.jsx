import React, { useState } from "react";

const ControlledField = () => {
  // alll states
  const [password, setPassword] = useState("kps");
  const [err, setErr] = useState("");

  const handle_form_submit = (e) => {
    // page ta reload hoyo nh
    e.preventDefault();

    if (password.length < 6) {
      setErr("Password must be 6 characters");
    } else {
      setErr("");
    }
  };

  const handle_password_onchange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    // if (password.length < 6) {
    //   setErr("Password must be 6 characters");
    // } else {
    //   setErr("");
    // }
  };

  return (
    <div>
      <form onSubmit={handle_form_submit}>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue={password}
          onChange={handle_password_onchange}
          required
          placeholder="password"
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="email"
        />
        <br />
        <p style={{ color: "red" }}>{err}</p>
        {/* <br /> */}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ControlledField;
