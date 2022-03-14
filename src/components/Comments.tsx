import { useEffect, useRef } from "react";

const SCRIPT_ELEM_ID = "utterancesScript";
export function Comments() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const scriptEl = document.createElement("script");
    scriptEl.id = SCRIPT_ELEM_ID;
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", "true");
    scriptEl.setAttribute("repo", "jackpordi/personal-blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");

    ref.current!.appendChild(scriptEl);
    return () => {
      document.getElementById(SCRIPT_ELEM_ID)?.remove();
      document.getElementsByClassName("utterances")[0]?.remove();
    };
  }, []);

  return (
    <div style={{ width: "100%" }} id="comments">
      <div ref={ref}/>
    </div>
  );
}
