import React, { Fragment } from "react";

function Input({
  element = "input",
  type = "text",
  name,
  placeTxt,
  labelTxt,
  ref,
}) {
  return (
    <Fragment>
      <label htmlFor={name}>{labelTxt}</label>
      {element === "textarea" ? (
        <textarea name={name} id={name}></textarea>
      ) : (
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          placeholder={placeTxt}
        />
      )}
    </Fragment>
  );
}

export default Input;
