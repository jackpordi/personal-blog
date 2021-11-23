import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const GA_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!;

function logPageView(url: string) {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

export function useTrackpageView(): void {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', logPageView)
    return () =>  router.events.off('routeChangeComplete', logPageView);
  }, [router.events])
}
