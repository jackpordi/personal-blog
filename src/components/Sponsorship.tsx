import { FC } from "react";

const linkStyle = "text-blue-500 hover:underline"

export const Sponsorship: FC = () => (
  <div className="mt-6">
    <h3 className="text-3xl font-semibold">
      Enjoyed this read? Comment and support me ❤️
    </h3>
    <p className="font-semibold mt-2">
      If you enjoy the above article, please do leave a comment! It lets me know that people out there appreciate my content, and inspires me to write more. Of course, if you <span className="font-ibold italic">really, really</span> enjoy it and want to go the extra mile to support me, then consider <a className={linkStyle} href="https://github.com/sponsors/jackpordi">sponsoring me on GitHub</a> or <a className={linkStyle} href="https://www.buymeacoffee.com/jackpordi">buying me a coffee!</a>
    </p>
  </div>
);
