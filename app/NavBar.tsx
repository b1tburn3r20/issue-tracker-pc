import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
const links = [{label:"home",link:"/"},{label:"issues",link:"/issues"}]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href={"/"}>
            <AiFillBug />
        </Link>
        <ol className='flex space-x-6'>
         {links.map(link =>
            <li className='transition-colors    text-zinc-600 hover:text-zinc-900' key={link.label}>
                <Link href={link.link}>{link.label}</Link>
            </li>
        )}
        </ol>
    </nav>
  )
}

export default NavBar