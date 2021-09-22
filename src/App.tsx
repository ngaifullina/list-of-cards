import React from "react";
import { Events } from "./features/events/Events";
import { Bell } from "./features/events/bell/Bell";
import { List } from "./features/events/list/List";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bell />
      </header>
      <div className="row">
        <Events />
        <List />
      </div>
    </div>
  );
}

export default App;
