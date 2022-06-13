import classNames from 'classnames'
import React from 'react'
import { BsWallet } from "react-icons/bs"
import cn from 'classnames'

function Navbar() {
  return (
    <div className='px-5 py-3 bg-slate-900 items-center shadow-lg mx-auto flex justify-between'>
        <a href='/'><h1 className='text-white font-bold text-2xl'>ZILLIQA</h1></a>
        <button className={
            cn(
                "flex",
                "gap-3",
                "items-center",
                "px-6",
                "py-2.5",
                "bg-blue-600",
                "text-white",
                "font-medium",
                "leading-tight",
                "uppercase",
                "rounded",
                "shadow-md",
                "hover:bg-blue-700",
                "hover:shadow-lg",
                "focus:bg-blue-700",
                "focus:shadow-lg",
                "focus:outline-none",
                "focus:ring-0",
                "active:bg-blue-800",
                "active:shadow-lg",
                "transition",
                "duration-150",
                "ease-in-out"
              )
        }><BsWallet/> Connect</button>
    </div>
  )
}

export default Navbar