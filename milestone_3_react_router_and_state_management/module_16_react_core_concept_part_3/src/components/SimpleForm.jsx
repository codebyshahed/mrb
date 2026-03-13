import React from "react";

const SimpleForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Continue" />
      </form>
    </div>
  );
};

export default SimpleForm;
