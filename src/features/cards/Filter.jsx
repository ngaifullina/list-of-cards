import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleShowLikedCards, selectShowLiked } from "./slice";
import styles from "./Filter.module.css";

export function Filter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectShowLiked);

  function handleFilter() {
    dispatch(toggleShowLikedCards());
  }

  return (
    <div>
      <button
        className={`${styles.button} ${filter ? styles.button_active : ""}`}
        onClick={handleFilter}
      >
        Показать любимые товары
      </button>
    </div>
  );
}
