import moment from "moment";
import { useMemo } from "react";

import { useIsMobile } from "./useIsMobile";

export function useDisplayDate(dateString: string): string {

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

  return displayDate;
}
