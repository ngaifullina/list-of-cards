import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addEvent, deleteEvents, selectEvents } from "./eventsSlice";
import styles from "./Events.module.css";
import { timeMessage } from "./timeMessage";

export function Events() {
  const events = useAppSelector(selectEvents);
  const dispatch = useAppDispatch();
  const [eventName, setEventName] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEventName(e.target.value);
  }

  function handleSendButtonClick() {
    if (eventName.length) {
      dispatch(addEvent(eventName));
      setEventName("");
    }
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (eventName.length && e.key === "Enter") {
      handleSendButtonClick();
    }
  }

  function deleteAllEvents() {
    dispatch(deleteEvents());
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
          placeholder="Введите название события.."
        />
        <button className={styles.button} onClick={handleSendButtonClick}>
          Отправить
        </button>
        <button className={styles.button} onClick={deleteAllEvents}>
          Удалить все события
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
