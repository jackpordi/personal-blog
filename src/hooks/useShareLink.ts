import { useCallback } from "react";

export function useShareLink(shareData: ShareData) {

  const share = useCallback(() => {
    if (navigator.share) void navigator.share(shareData);
  }, []);

  return share;
}
