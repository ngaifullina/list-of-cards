import React from "react";

import { useAppSelector } from "../../../app/hooks";
import { selectEvents, selectRead } from "../eventsSlice";

import styles from "./Bell.module.css";

export function Bell() {
  const events = useAppSelector(selectEvents);
  const read = useAppSelector(selectRead);

  const unreadCount = events.length - read;

  return (
    <div className={styles.wrapper}>
      <img src="bell.png" alt="" className={styles.icon} />
      {unreadCount !== 0 && <div className={styles.number}>{unreadCount}</div>}
    </div>
  );
}
