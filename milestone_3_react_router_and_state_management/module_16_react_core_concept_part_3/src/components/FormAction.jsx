import React from "react";

const FormAction = () => {
  const handle_form_action = (form_data) => {
    console.log(form_data.get("name"));
    console.log(form_data.get("email"));
  };

  return (
    <div>
      <form action={handle_form_action}>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="your name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default FormAction;
