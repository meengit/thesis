import React, { Fragment } from "react";
import "./styles.css";

let replaceSpacesWithNbsp = str => {
  // 'ZERO WIDTH SPACE' (U+200B)
  // Non-breakable space is char 0xa0 (160 dec)
  return str.replace(/[ ]/g, "\xa0\u200B");
};

let lastLine = text => {
  let lastChar = text.substr(-1);
  let textMinusLast = text.substring(0, text.length - 1);

  return (
    <Fragment>
      {replaceSpacesWithNbsp(textMinusLast)}
      <span className="Text__lastChar">{lastChar}</span>
      <span className="Text__cursor"></span>
    </Fragment>
  );
};

function Text({ context }) {
  let textLines = context.text.split("\n");
  let lineCount = textLines.length;
  // <p>{lastLine(context.text)}</p>

  return (
    <div
      className={`Text Text--${
        context.lastBlock ? "lastBlock" : "noLastBlock"
      }`}
    >
      {textLines.map((item, index) => {
        if (index === lineCount - 1) {
          return (
            <p className="Text__line" key={index}>
              {lastLine(item)}
            </p>
          );
        } else {
          return (
            <p className="Text__line" key={index}>
              {replaceSpacesWithNbsp(item)}&nbsp;
            </p>
          );
        }
      })}
    </div>
  );
}

export default Text;
