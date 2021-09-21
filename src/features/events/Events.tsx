import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addEvent, selectEvents } from "./eventsSlice";
import styles from "./Events.module.css";
import { timeMessage } from "./timeMessage";

export function Events() {
  const events = useAppSelector(selectEvents);
  const dispatch = useAppDispatch();
  const [eventName, setEventName] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEventName(e.target.value);
  }

  function handleButtonClick() {
    if (eventName.length) {
      dispatch(addEvent(eventName));
      setEventName("");
    }
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (eventName.length && e.key === "Enter") {
      handleButtonClick();
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={eventName}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
        />
        <button className={styles.button} onClick={handleButtonClick}>
          Add Note
        </button>
      </div>

      <div className={styles.row}>
        <ul>
          {events.map((evt, i) => (
            <li key={`${evt.name}_${i}`}>
              {evt.name}
              <p>{timeMessage(evt.timestamp, new Date().getMilliseconds())}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
