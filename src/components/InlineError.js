import React from "react";
import { ErrorMessage } from "@hookform/error-message";

export const InlineError = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p style={{ color: "red", marginTop: 0 }}>{`${message} ⚠️`}</p>
      )}
    />
  );
};
