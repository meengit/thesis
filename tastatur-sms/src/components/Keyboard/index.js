import React, { Fragment } from "react";
import "./styles.css";
import Block from "../Block";
import Button from "../Button";
import { TYPEMODE, ORIENTATION } from "../../settings";

import { UIConsumer } from "../../store";

function Keyboard() {
  return (
    <UIConsumer>
      {context => (
        <div className="Keyboard">
          <div className="Keyboard__main">
            <Block className="Button--startRow" id="block01" />
            <Block id="block02" width="large" />
            <Block id="block03" width="large" />
            <Block className="Button--startRow" id="block04" width="large" />
            <Block id="block05" width="large" />
            <Block id="block06" width="large" />

            {context.orientation === ORIENTATION.L ? (
              <Fragment>
                <Button
                  className="Button--startRow"
                  onMouseUp={e => context.action.backspace()}
                  label="⌫"
                ></Button>
                <Button
                  onMouseUp={e => context.action.append(" ")}
                  label="Space"
                ></Button>
                <Block id="block07" width="large" />

                <Button
                  className="Button--startRow Button--negative"
                  onMouseUp={e => context.action.orientation(ORIENTATION.L)}
                  label="L"
                  active={context.orientation === ORIENTATION.L}
                  width="small"
                  heigh="small"
                ></Button>
                <Button
                  onMouseUp={e => context.action.append("\n")}
                  label=" ‎⏎"
                  heigh="small"
                ></Button>
                <Button
                  onMouseUp={e => context.action.caps()}
                  label="⇪"
                  active={context.typeMode === TYPEMODE.CAP}
                  width="small"
                  heigh="small"
                ></Button>
                <Button label="🌐" width="small" heigh="small"></Button>
                <Button
                  className="Button--negative"
                  onMouseUp={e => context.action.orientation(ORIENTATION.R)}
                  label="R"
                  active={context.orientation === ORIENTATION.R}
                  width="small"
                  heigh="small"
                ></Button>
              </Fragment>
            ) : (
              <Fragment>
                <Block
                  className="Button--startRow"
                  id="block07"
                  width="large"
                />
                <Button
                  onMouseUp={e => context.action.append(" ")}
                  label="Space"
                ></Button>
                <Button
                  onMouseUp={e => context.action.backspace()}
                  label="⌫"
                ></Button>

                <Button
                  className="Button--startRow Button--negative"
                  onMouseUp={e => context.action.orientation(ORIENTATION.L)}
                  label="L"
                  active={context.orientation === ORIENTATION.L}
                  width="small"
                  heigh="small"
                ></Button>
                <Button label="🌐" width="small" heigh="small"></Button>
                <Button
                  onMouseUp={e => context.action.caps()}
                  label="⇪"
                  active={context.typeMode === TYPEMODE.CAP}
                  width="small"
                  heigh="small"
                ></Button>
                <Button
                  onMouseUp={e => context.action.append("\n")}
                  label=" ‎⏎"
                  heigh="small"
                ></Button>

                <Button
                  className="Button--negative"
                  onMouseUp={e => context.action.orientation(ORIENTATION.R)}
                  label="R"
                  active={context.orientation === ORIENTATION.R}
                  width="small"
                  heigh="small"
                ></Button>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </UIConsumer>
  );
}

export default Keyboard;
