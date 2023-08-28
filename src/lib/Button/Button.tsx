import React from "react";
import MaterialButton from "@mui/material/Button";

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large" | string;
  variant: "contained" | "outlined" | "text" | string;
}

const InputButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <MaterialButton variant="outlined">{props.label}</MaterialButton>;
};

export default InputButton;
