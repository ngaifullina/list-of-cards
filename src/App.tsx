import React from "react";
import { Events } from "./features/events/Events";
import { Bell } from "./features/events/bell/Bell";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bell />
      </header>
      <Events />
    </div>
  );
}

export default App;
