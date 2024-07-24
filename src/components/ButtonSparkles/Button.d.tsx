import { ButtonHTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

export type ButtonProps = {
  disabled: boolean;
  handleClick: () => void;
  children?: string;
  hueValue?: number;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;