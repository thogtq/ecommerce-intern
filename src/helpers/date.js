import { weekday, shortMonth } from "constants/date";

export function getFormatedDateString(date) {
  let dayOfWeek = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
    weekday[dayOfWeek] + ", " + day + "th " + shortMonth[month] + ", " + year
  );
}
