import { useCallback } from "react";
import toast from "react-hot-toast";

export function useShareLink(shareData: ShareData) {

  const share = useCallback(async () => {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url!);
      toast("Link Copied!", {
        position: "bottom-right", icon: "📋",
      });
    }
  }, []);

  return share;
}
