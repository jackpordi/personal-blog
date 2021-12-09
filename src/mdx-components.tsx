import { FunctionComponent } from "react";

interface Components {
  [index: string]: FunctionComponent;
}

export const MDXComponents: Components = {
  p: ({ children }) => <p className="text-gray-800 my-2">{children}</p>,
  h1: ({ children }) => <h1 className="text-gray-800 text-3xl font-semibold my-2">{children}</h1>,
  h2: ({ children }) => <h2 className="text-gray-800 text-2xl font-semibold my-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-gray-800 text-xl font-semibold my-2">{children}</h3>,
  h4: ({ children }) => <h4 className="text-gray-800 text-lg font-semibold my-2">{children}</h4>,
  h5: ({ children }) => <h5 className="text-gray-800 text-md font-semibold">{children}</h5>,
  code: ({ children }) => <code className="bg-gray-100 block p-2 my-4 rounded-md">{children}</code>,
  ul: ({ children }) => <ul className="list-disc list-inside text-gray-800 mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside text-gray-800 mb-4">{children}</ol>,
  li: ({ children }) => <li style={{ paddingLeft: "1em", textIndent: "-1em" }}><span className="-ml-1">{children}</span></li>,
  blockquote: ({ children }) => <blockquote className="bg-gray-100 my-2 px-4 py-1 rounded-md italic items-center">{children}</blockquote>,
  // @ts-ignore href not part of FunctionComponent props
  a: ({ children, href }) => <a href={href} className="hover:underline text-blue-600">{children}</a>,
};
