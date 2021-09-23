import React from "react";
import { Controls } from "./features/events/Controls";
import { Notifications } from "./features/events/Notifications";
import "./App.css";

const AUTO_EVENT_INTERVAL_MILLIS = 2000;
const POPOVER_EVENTS_COUNT = 5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications popoverEventsCount={POPOVER_EVENTS_COUNT} />
      </header>
      <Controls autoEventIntervalMills={AUTO_EVENT_INTERVAL_MILLIS} />
    </div>
  );
}

export default App;
