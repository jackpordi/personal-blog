import { useEffect, useRef } from "react";

import { useDarkMode } from "hooks/useDarkMode";

const SCRIPT_ELEM_ID = "utterancesScript";
export function Comments() {

  const { dark } = useDarkMode();
  const ref = useRef<HTMLDivElement>(null);

  const theme = dark ? "dark-blue" : "github-light";

  useEffect(() => {

    if (!ref.current) return () => undefined;

    const scriptEl = document.createElement("script");
    scriptEl.id = SCRIPT_ELEM_ID;
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", "true");
    scriptEl.setAttribute("repo", "jackpordi/personal-blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", theme);

    ref.current!.appendChild(scriptEl);
    return () => {
      document.getElementById(SCRIPT_ELEM_ID)?.remove();
      document.getElementsByClassName("utterances")[0]?.remove();
    };
  }, []);

  useEffect(() => {
    if (document.querySelector(".utterances-frame")) {
      const iframe = document.querySelector<HTMLIFrameElement>(".utterances-frame");

      if (!iframe) {
        return;
      }
      iframe?.contentWindow?.postMessage({
        type: "set-theme",
        theme,
      }, "https://utteranc.es");
    }
  }, [ dark ]);

  return (
    <div style={{ width: "100%" }} id="comments">
      <section ref={ref}/>
    </div>
  );
}
