import React from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  selectEvents,
  selectRead,
  toggleShowEvents,
  showEvents,
} from "../eventsSlice";

import styles from "./Bell.module.css";

export function Bell() {
  const events = useAppSelector(selectEvents);
  const read = useAppSelector(selectRead);
  const unreadCount = events.length - read;
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(showEvents);

  function toggleModal() {
    dispatch(toggleShowEvents());
  }
  return (
    <div className={styles.wrapper} onClick={toggleModal}>
      {showModal && events.length > 0 && (
        <div>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
      )}
      <img src="bell.png" alt="" className={styles.icon} />
      {unreadCount !== 0 && <div className={styles.number}>{unreadCount}</div>}
    </div>
  );
}
