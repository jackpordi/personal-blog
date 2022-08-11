import { ComponentType, DetailedHTMLProps, ImgHTMLAttributes } from "react";

type ImgComponent = ComponentType<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
interface Components {
  img: ImgComponent;
  [index: string]: ComponentType;
}

const codeColors = "bg-gray-100 dark:bg-grey-600";

export const MDXComponents: Components = {
  img: ({ src, alt }) => (
    <img
      className="my-2 lg:my-8 mx-auto"
      src={src!}
      alt={alt!}
    />
  ),
  p: ({ children }) => <p className="fg-text my-2">{children}</p>,
  h1: ({ children }) => <h1 className="fg-text text-3xl font-semibold my-2">{children}</h1>,
  h2: ({ children }) => <h2 className="fg-text text-2xl font-semibold my-2">{children}</h2>,
  h3: ({ children }) => <h3 className="fg-text text-xl font-semibold my-2">{children}</h3>,
  h4: ({ children }) => <h4 className="fg-text text-lg font-semibold my-2">{children}</h4>,
  h5: ({ children }) => <h5 className="fg-text text-md font-semibold">{children}</h5>,
  pre: ({ children }) => <pre className={`whitespace-pre-wrap p-2 my-4 rounded-md ${codeColors}`}>
    {children}
  </pre>,
  code: ({ children }) => <code className={`text-xs dark:text-gray-200 ${codeColors} rounded-sm`}>
    {children}
  </code>,
  ul: ({ children }) => <ul className="list-disc list-inside fg-text mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside fg-text mb-4">{children}</ol>,
  li: ({ children }) => (
    <li
      style={{
        paddingLeft: "1em",
        textIndent: "-1em",
      }}>
      { children }
    </li>),
  blockquote: ({ children }) => <blockquote className="bg-gray-100 my-2 px-4 py-1 rounded-md italic items-center">{children}</blockquote>,
  // @ts-ignore href not part of FunctionComponent props
  a: ({ children, href }) => <a href={href} className="hover:underline dark:text-cyan-400 text-blue-600">{children}</a>,
};
