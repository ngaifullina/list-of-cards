import React from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectEvents, selectRead, toggleShowEvents } from "../slice";

import styles from "./Bell.module.css";

export function Bell() {
  const events = useAppSelector(selectEvents);
  const read = useAppSelector(selectRead);
  const unreadCount = events.length - read;
  const dispatch = useAppDispatch();

  function toggleModal() {
    dispatch(toggleShowEvents());
  }

  return (
    <div className={styles.wrapper} onClick={toggleModal}>
      <img src="bell.png" alt="" className={styles.icon} />
      {unreadCount !== 0 && <div className={styles.number}>{unreadCount}</div>}
    </div>
  );
}
