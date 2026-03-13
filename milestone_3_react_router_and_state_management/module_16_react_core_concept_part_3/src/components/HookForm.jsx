import React from "react";
import useInputField from "../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");

  const handle_submit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handle_submit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={nameOnChange}
          defaultValue={name}
        />
        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default HookForm;
