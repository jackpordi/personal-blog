import moment from "moment";
import { useMemo } from "react";

export function useDisplayDate(dateString: string): string {

  const displayDate = useMemo(
    () => moment(dateString).format("dddd Do MMMM YYYY, H:mmA"),
    [dateString],
  );

  return displayDate;
}
