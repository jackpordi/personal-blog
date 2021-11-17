import { FunctionComponent } from "react";

interface Components {
  [index: string]: FunctionComponent;
}

export const MDXComponents: Components = {
  p: ({ children }) => <p className="text-gray-600">{children}</p>,
  h1: ({ children }) => <h1 className="text-gray-700 text-3xl font-semibold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-gray-700 text-2xl font-semibold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-gray-700 text-xl font-semibold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-gray-700 text-lg font-semibold">{children}</h4>,
  h5: ({ children }) => <h5 className="text-gray-700 text-md font-semibold">{children}</h5>,
  code: ({ children }) => <code className="bg-gray-100 block p-2 my-4 rounded">{children}</code>,
};
