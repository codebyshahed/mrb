import React, { useRef } from "react";

const UnControlledField = () => {
  const email_ref = useRef("");
  const password_ref = useRef("");

  const handle_onsubmit = (e) => {
    e.preventDefault();
    console.log(email_ref.current.value);
    console.log(password_ref.current.value);
  };

  return (
    <div>
      <form onSubmit={handle_onsubmit}>
        <input ref={email_ref} type="text" name="name" id="name" />
        <br />
        <input
          ref={password_ref}
          type="password"
          name="password"
          id="password"
        />
        <br />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default UnControlledField;
