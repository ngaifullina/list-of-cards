export const MINUTE = 60000;
export const HOUR = 3600000;
export const DAY = 86400000;
export const MONTH = 2629800000;
export const YEAR = 31557600000;

export function timeMessage(fromTimestamp: number, currentTimestamp: number) {
  let difference = currentTimestamp - fromTimestamp;

  switch (true) {
    case difference < MINUTE:
      return "несколько секунд назад";
    case difference > MINUTE && difference < MINUTE * 2:
      return `1 минуту назад`;
    case difference > MINUTE && difference < HOUR:
      return `${Math.floor(difference / MINUTE)} минут назад`;
    case difference > HOUR && difference < HOUR * 2:
      return `1 час назад`;
    case difference > HOUR && difference < DAY:
      return `${Math.floor(difference / HOUR)} часов назад`;
    case difference > DAY && difference < DAY * 2:
      return `1 день назад`;
    case difference > DAY && difference < MONTH:
      return `${Math.floor(difference / DAY)} дней назад`;
    case difference > MONTH && difference < MONTH * 2:
      return `1 месяц назад`;
    case difference > MONTH && difference < YEAR:
      return `${Math.floor(difference / MONTH)} месяца назад`;
  }
}
