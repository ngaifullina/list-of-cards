import React from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectEvents, showEvents, toggleShowEvents } from "../eventsSlice";
import styles from "./List.module.css";
import { timeMessage } from "../timeMessage";

export function List() {
  const events = useAppSelector(selectEvents);
  const showModal = useAppSelector(showEvents);
  const dispatch = useAppDispatch();
  const numberOfShownEvents = 5;
  function toggleModal() {
    dispatch(toggleShowEvents());
  }
  if (showModal && events.length) {
    return (
      <div>
        <div className={styles.row}>
          {events.slice(0, numberOfShownEvents).map((evt, i) => (
            <div className={styles.item}>
              <div key={`${evt.name}_${i}`} className={styles.name}>
                {evt.name}
              </div>
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
      </div>
    );
  } else {
    return <div className={styles.row}>Нет событий</div>;
  }
}
