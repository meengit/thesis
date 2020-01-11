import React from "react";
import "./styles.css";
import Text from "../Text";
import Keyboard from "../Keyboard";

import { UIProvider, UIConsumer } from "../../store";

function App() {
  return (
    <UIProvider>
      <UIConsumer>
        {context => (
          <div className="App">
            <div className="App__text">
              <Text context={context} />
            </div>
            <div className="App__keyboard">
              <Keyboard />
            </div>
          </div>
        )}
      </UIConsumer>
    </UIProvider>
  );
}

export default App;
