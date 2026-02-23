import React, { type ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";

type Props = { variant?: variant; children: ReactNode };

function Button({ variant = "primary", children }: Props) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}

export default Button;
