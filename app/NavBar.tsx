'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const NavBar = () => {
const links = [{label:"home",link:"/"},{label:"issues",link:"/issues"}]

const currentPath = usePathname()

console.log(currentPath)
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href={"/"}>
            <AiFillBug />
        </Link>
        <ol className='flex space-x-6'>
         {links.map(link =>
            <li 
            className={classNames({
                'text-zinc-900': link.link === currentPath,
                'text-zinc-500':link.link !== currentPath,
                'hover:text-zinc-800 transition-colors': true
            })}
            key={link.label}>
                <Link href={link.link}>{link.label}</Link>
            </li>
        )}
        </ol>
    </nav>
  )
}

export default NavBar