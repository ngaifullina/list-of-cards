import React, { useState, useEffect } from "react";
import { Notifications } from "./Notifications";
import { useAppDispatch } from "../../app/hooks";
import {
  addEvent,
  deleteEvents,
  markEventsRead,
  loadRandomSentence,
  toggleShowEvents,
} from "./slice";
import styles from "./Controls.module.css";

export function Controls() {
  const dispatch = useAppDispatch();
  const [eventName, setEventName] = useState("");

  const timeReceivingEvents = 5000;
  useEffect(() => {
    const timer = setInterval(
      () => dispatch(loadRandomSentence()),
      timeReceivingEvents
    );
    return () => clearTimeout(timer);
  });

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

  function markAllEventsRead() {
    dispatch(markEventsRead());
  }

  function toggleModal() {
    dispatch(toggleShowEvents());
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={eventName}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
            placeholder="Введите название события.."
          />
          <button
            className={`${styles.button} ${styles.button__small}`}
            onClick={handleSendButtonClick}
          >
            Отправить
          </button>
        </div>

        <button className={styles.button} onClick={markAllEventsRead}>
          Пометить все события прочитанными
        </button>
        <button className={styles.button} onClick={deleteAllEvents}>
          Удалить все события
        </button>
        <button className={styles.button} onClick={toggleModal}>
          Скрыть/показать попап нотификаций
        </button>
      </div>
    </div>
  );
}
