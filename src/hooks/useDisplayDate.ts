import moment, { Moment } from "moment";
import { useMemo } from "react";

import { useIsMobile } from "./useIsMobile";

export function useDisplayDate(dateString: string) {

  const isMobile = useIsMobile();

  const displayDate = useMemo(
    () => {
      if (isMobile) {
        return moment(dateString).format("D/MM/YY H:mmA");
      }
      return moment(dateString).format("dddd Do MMMM YYYY, H:mmA");
    },
    [ dateString, isMobile ],
  );

  const age = useMemo(() => {
    const date = moment(dateString);

    const now = moment();
    const twoWeeksAgo = now.clone().subtract(2, "week");
    const oneMonthAgo = now.clone().subtract(1, "month");
    const oneYearAgo = now.clone().subtract(1, "year");

    if (date.isAfter(twoWeeksAgo)) {
      return formatTimeAgo(date, "day");
    } if (date.isAfter(oneMonthAgo)) {
      return formatTimeAgo(date, "week");
    } if (date.isAfter(oneYearAgo)) {
      return formatTimeAgo(date, "month");
    }
    return formatTimeAgo(date, "year");

  }, [ dateString ]);

  return {
    displayDate, age,
  };
}

function formatTimeAgo(date: Moment, unit: "day" | "week" | "month" | "year") {
  const diff = moment().diff(date, unit);

  const unitString = diff === 1 ? unit : `${unit}s`;
  return `${diff} ${unitString} ago`;
}
