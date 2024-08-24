import React, { Children, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  color?: "info" | "primary" | "success" | "danger";
  onClick: () => void;
}

function Alert({ onClick, children, color }: Props) {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Alert;
