import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCards } from "./slice";
import {getCards} from './api'
import styles from "./Card.module.css";
import like from './like.png';
import liked from './liked.png';

export function Card() {
  const cards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getCards())
  },[]);

 

  return (
    <div>
      {!!cards.length && (
        <div className={styles.wrapper}>
        {cards.map((card, i)=>(
          <div key={`${card.name}_${i}`} className={styles.card}>
            <div className={styles.close}></div>
            <div className={styles.card__name}>{card.name}</div>
            <img src={card.imageLink} alt=''/>
            <div><img src={card.liked? liked : like} alt='' className={styles.icon}/></div>
          </div>
        ))}
        </div>
      )}
 
    </div>
  );
}
