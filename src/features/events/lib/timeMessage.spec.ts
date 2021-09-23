import { timeMessage, MINUTE, HOUR, DAY, MONTH } from "./timeMessage";

const CURRENT_TIMESTAMP = 1632182400000;
const SECOND = 1000;

describe("Past time message", () => {
  it("for 1 second ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - SECOND;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "1 секунду назад"
    );
  });

  it("for 3 seconds ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 3 * SECOND;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "3 секунды назад"
    );
  });

  it("for 10 seconds ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 10 * SECOND;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "10 секунд назад"
    );
  });

  it("for 90 secs min ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 90 * SECOND;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "1 минуту назад"
    );
  });

  it("for 2 min ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 2 * MINUTE;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "2 минуты назад"
    );
  });

  it("for 12 min ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 12 * MINUTE;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "12 минут назад"
    );
  });

  it("for 1h 5 min ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - (HOUR + 5 * MINUTE);
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "1 час назад"
    );
  });

  it("for 2h 5 min ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - (HOUR * 2 + 5 * MINUTE);
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "2 часа назад"
    );
  });

  it("for 13h ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 13 * HOUR;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "13 часов назад"
    );
  });

  it("for 25h ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 25 * HOUR;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "1 день назад"
    );
  });

  it("for 2d 2h ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - (2 * DAY + 2 * HOUR);
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "2 дня назад"
    );
  });

  it("for 7d 2h ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - (7 * DAY + 2 * HOUR);
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "7 дней назад"
    );
  });

  it("for 30d ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - MONTH;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "1 месяц назад"
    );
  });

  it("for 63d ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 63 * DAY;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "2 месяца назад"
    );
  });

  it("for 5 month ago", () => {
    const fromTimestamp = CURRENT_TIMESTAMP - 5 * MONTH;
    expect(timeMessage(fromTimestamp, CURRENT_TIMESTAMP)).toEqual(
      "5 месяцев назад"
    );
  });
});
