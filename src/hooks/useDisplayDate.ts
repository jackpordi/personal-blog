import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";

import { useIsMobile } from "./useIsMobile";

export function useDisplayDate(dateString: string) {

  const isMobile = useIsMobile();

  const displayDate = useMemo(
    () => {
      if (isMobile) {
        return dayjs(dateString).format("D/MM/YY H:mmA");
      }
      return dayjs(dateString).format("dddd D MMMM YYYY, H:mmA");
    },
    [ dateString, isMobile ],
  );

  const age = useMemo(() => {
    const date = dayjs(dateString);

    const now = dayjs();
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

function formatTimeAgo(date: Dayjs, unit: "day" | "week" | "month" | "year") {
  const diff = dayjs().diff(date, unit);

  const unitString = diff === 1 ? unit : `${unit}s`;
  return `${diff} ${unitString} ago`;
}
