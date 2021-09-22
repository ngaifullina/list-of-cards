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
      <Events />
      <List />
    </div>
  );
}

export default App;
