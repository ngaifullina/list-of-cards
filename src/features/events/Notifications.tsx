import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectEvents, showPopoverOpen, togglePopover } from "./slice";
import styles from "./Notifications.module.css";
import { timeMessage } from "../events/lib/timeMessage";
import { Bell } from "./lib/Bell";

type EventsCount = {
  popoverEventsCount: number;
};
export function Notifications(props: EventsCount) {
  const events = useAppSelector(selectEvents);
  const showModal = useAppSelector(showPopoverOpen);
  const dispatch = useAppDispatch();

  function handleExpandClick() {
    dispatch(togglePopover());
  }
  return (
    <div>
      <Bell />
      {showModal && !!events.length && (
        <div className={styles.row}>
          {events.slice(0, props.popoverEventsCount).map((evt, i) => (
            <div key={`${evt.name}_${i}`} className={styles.item}>
              <div className={styles.name}>{evt.name}</div>
              <div className={styles.time}>
                {timeMessage(evt.timestamp, new Date().getMilliseconds())}
              </div>
            </div>
          ))}
          {events.length > 5 && (
            <button className={styles.link} onClick={handleExpandClick}>
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
