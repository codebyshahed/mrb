import { useState } from "react";

const useInputField = (defaultValue) => {
  const [filedValue, setFiledValue] = useState(defaultValue);

  const handle_field_on_change = (e) => {
    setFiledValue(e.target.value);
  };

  return [filedValue, handle_field_on_change];
};

export default useInputField;
