import { Children } from "react";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLAnchorElement>;

const Button = ({ children }: ButtonProps) => {
  return <button className={styles }>{children}</button>;
};

export default Button;
