import React from "react";
import "./styles.css";
import { UIConsumer } from "../../store";
import { BLOCKS } from "../../settings";
import Button from "../Button";

function Block({ id, className }) {
  return (
    <UIConsumer>
      {context => (
        <Button
          onMouseDown={e => context.action.startBlockPress(id)}
          onMouseUp={e => context.action.endBlockPress(id)}
          label={BLOCKS[id].label[context.typeMode]}
          className={`${className} Button--block`}
        ></Button>
      )}
    </UIConsumer>
  );
}

export default Block;
