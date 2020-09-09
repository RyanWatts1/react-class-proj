import React from "react";

const PasswordCard = (props) => {
  const inputStyle = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentPassword}
    />
  );
};

export default PasswordCard;
