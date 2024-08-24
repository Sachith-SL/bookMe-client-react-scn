import React, { ReactNode, useState } from "react";
import Alert from "./Alert";

interface Props {
  children: ReactNode;
  color?: "info" | "primary" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color = "info" }: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
