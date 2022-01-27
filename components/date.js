import { parseISO, format } from "date-fns";

export const DateFormat = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};
