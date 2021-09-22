export const MINUTE = 60000;
export const HOUR = 3600000;
export const DAY = 86400000;
export const MONTH = 2629800000;
export const YEAR = 31557600000;

export function timeMessage(
  fromTimestampMillis: number,
  currentTimestampMillis: number
) {
  let differenceMillis = currentTimestampMillis - fromTimestampMillis;

  switch (true) {
    case differenceMillis < MINUTE:
      return "несколько секунд назад";

    case differenceMillis > MINUTE && differenceMillis < MINUTE * 2:
      return `1 минуту назад`;
    case differenceMillis >= MINUTE * 2 && differenceMillis < MINUTE * 5:
      return `${Math.floor(differenceMillis / MINUTE)} минуты назад`;
    case differenceMillis >= MINUTE * 5 && differenceMillis < HOUR:
      return `${Math.floor(differenceMillis / MINUTE)} минут назад`;

    case differenceMillis > HOUR && differenceMillis < HOUR * 2:
      return `1 час назад`;
    case differenceMillis >= HOUR * 2 && differenceMillis < HOUR * 5:
      return `${Math.floor(differenceMillis / HOUR)} часа назад`;
    case differenceMillis >= HOUR * 5 && differenceMillis < DAY:
      return `${Math.floor(differenceMillis / HOUR)} часов назад`;

    case differenceMillis > DAY && differenceMillis < DAY * 2:
      return `1 день назад`;
    case differenceMillis >= DAY * 2 && differenceMillis < DAY * 5:
      return `${Math.floor(differenceMillis / DAY)} дня назад`;
    case differenceMillis >= DAY * 5 && differenceMillis < MONTH:
      return `${Math.floor(differenceMillis / DAY)} дней назад`;

    case differenceMillis >= MONTH && differenceMillis < MONTH * 2:
      return `1 месяц назад`;
    case differenceMillis >= MONTH * 2 && differenceMillis < MONTH * 5:
      return `${Math.floor(differenceMillis / MONTH)} месяца назад`;
    case differenceMillis >= MONTH * 5 && differenceMillis < YEAR:
      return `${Math.floor(differenceMillis / MONTH)} месяцев назад`;
  }
}
