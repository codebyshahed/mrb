import React, { useState } from "react";

const ControlledField = () => {
  // alll states
  const [password, setPassword] = useState("kps");

  const handle_form_submit = (e) => {
    // page ta reload hoyo nh
    e.preventDefault();

    console.log(e);
  };

  const handle_password_onchange = (e) => {
    console.log(e.target.value);
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
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ControlledField;
