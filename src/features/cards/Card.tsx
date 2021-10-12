import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCards } from "./slice";
import {getCards} from './api'
import styles from "./Card.module.css";

export function Card() {
  const cards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards())
  });

 

  return (
    <div>
      {!!cards.length && (
        <div>
        {cards.slice(0,5).map((card, i)=>(
          <div key={`${card.name}_${i}`} >{card.name}</div>
        ))}
        </div>
      )}
 
    </div>
  );
}
