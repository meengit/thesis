import React from "react";
import "./styles.css";

function Button({
  label,
  onMouseDown,
  onMouseUp,
  active,
  width,
  heigh,
  className
}) {
  return (
    <button
      className={`${className} Button Button--${
        active ? "active" : "normal"
      } Button--width-${width ? width : "normal"} Button--heigh-${
        heigh ? heigh : "normal"
      }`}
      onMouseDown={e => (onMouseDown ? onMouseDown(e) : null)}
      onMouseUp={e => (onMouseUp ? onMouseUp(e) : null)}
    >
      {label}
    </button>
  );
}

export default Button;
