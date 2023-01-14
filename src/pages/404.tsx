import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1 h-full mt-64 dark:text-white text-grey-800">
      <h2 className="text-4xl font-bold">
        Uh oh, that's a
      </h2>
      <h1 className="text-9xl font-bold animate-text bg-gradient-to-r from-cyan-400 via-red-400 to-blue-600 bg-clip-text text-transparent font-black">
        404!
      </h1>
      <div className="text-lg mt-2 text-center">
        We couldn't find the page you're looking for.
        <br/>
        <Link
          href="/"
          className="text-lg hover:underline dark:text-cyan-400 text-blue-600">
          Take me back home
        </Link>
      </div>
    </div>
  );
}
