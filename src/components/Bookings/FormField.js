import React from "react";

export default function FormField({children, label, htmlFor, hasError, errorMessage,}) {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
}
