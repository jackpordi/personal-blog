import Link from 'next/link'
import { FunctionComponent } from 'react'

export const Nav: FunctionComponent = () => {
  return (
    <nav className="inset-x-0 fixed flex flex-1 items-center justify-between flex-wrap bg-green-500 p-6 py-22 text-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight">Jack Pordi</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full lg:flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-2xl lg:flex-grow lg:items-center lg:flex justify-end">
          <Link href="/about" passHref>
            <div className="block mt-4 lg:inline-block lg:mt-0 cursor-pointer hover:text-green-100 mr-4">
              About
            </div>
          </Link>
          <Link href="/posts" passHref>
            <div className="block mt-4 lg:inline-block lg:mt-0 cursor-pointer hover:text-green-100 mr-4">
              Posts
            </div>
          </Link>
          <a href="mailto: contact@jackpordi.com" className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">Contact</a>
        </div>
      </div>
    </nav>
  )
}

