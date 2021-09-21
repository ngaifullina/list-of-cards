import React from "react";

import { useAppSelector } from "../../../app/hooks";
import { selectEvents } from "../eventsSlice";

import styles from "./Bell.module.css";

export function Bell() {
  const events = useAppSelector(selectEvents);

  return (
    <div className={styles.wrapper}>
      <img src="bell.png" alt="" className={styles.icon} />
      <div className={styles.number}>{events.length}</div>
    </div>
  );
}
