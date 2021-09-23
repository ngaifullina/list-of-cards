import React from "react";
import { Controls } from "./features/events/Controls";
import { Notifications } from "./features/events/Notifications";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications />
      </header>
      <Controls />
    </div>
  );
}

export default App;
