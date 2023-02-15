import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!;

function logPageView(url: string) {
  if (window.gtag) window.gtag("config", GA_ID, { page_path: url });
}

export function useTrackpageView(): void {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    logPageView(pathName + searchParams.toString());
  }, [ pathName ]);
}
