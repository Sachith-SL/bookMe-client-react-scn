import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PassingChildren({ children }: Props) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

export default PassingChildren;
