import classNames from "classnames";
import React, { MouseEvent } from "react";

import s from "./MainButtonComponent.module.scss";

interface MainButtonProps {
  text: string;
  className: string;
  style?: React.CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  className,
  style,
  onClick,
}) => {
  const buttonClass = classNames(s.button, {
    [s.button__authorization]: className === "authorization",
    [s.button]: className === "",
    [s.button__popup]: className === "popup",
  });

  return (
    <button className={buttonClass} style={style} onClick={onClick}>
      {text}
    </button>
  );
};
