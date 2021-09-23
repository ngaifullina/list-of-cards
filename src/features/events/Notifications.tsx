import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectEvents, showEvents, toggleShowEvents } from "./slice";
import styles from "./Notifications.module.css";
import { timeMessage } from "../events/lib/timeMessage";
import { Bell } from "./lib/Bell";
export function Notifications() {
  const events = useAppSelector(selectEvents);
  const showModal = useAppSelector(showEvents);
  const dispatch = useAppDispatch();
  const numberOfShownEvents = 5;
  function toggleModal() {
    dispatch(toggleShowEvents());
  }
  return (
    <div>
      <Bell />
      {showModal && !!events.length && (
        <div className={styles.row}>
          {events.slice(0, numberOfShownEvents).map((evt, i) => (
            <div key={`${evt.name}_${i}`} className={styles.item}>
              <div className={styles.name}>{evt.name}</div>
              <div className={styles.time}>
                {timeMessage(evt.timestamp, new Date().getMilliseconds())}
              </div>
            </div>
          ))}
          {events.length > 5 && (
            <button className={styles.link} onClick={toggleModal}>
              посмотреть все...
            </button>
          )}
        </div>
      )}
      {events.length === 0 && showModal && (
        <div className={styles.row}>Нет событий</div>
      )}
    </div>
  );
}
