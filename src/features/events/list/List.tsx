import React from "react";

import { useAppSelector } from "../../../app/hooks";
import { selectEvents } from "../eventsSlice";
import styles from "./List.module.css";
import { timeMessage } from "../timeMessage";

export function List() {
  const events = useAppSelector(selectEvents);

  return (
    <div className={styles.row}>
      {events.slice(0, 5).map((evt, i) => (
        <div className={styles.item}>
          <div key={`${evt.name}_${i}`} className={styles.name}>
            {evt.name}
          </div>
          <div className={styles.time}>
            {timeMessage(evt.timestamp, new Date().getMilliseconds())}
          </div>
        </div>
      ))}
      {events.length > 5 && <a className={styles.link}>посмотреть все...</a>}
    </div>
  );
}
