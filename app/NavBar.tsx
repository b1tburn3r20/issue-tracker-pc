'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { ModeToggle } from './ModeToggle'

const NavBar = () => {
const links = [{label:"home",link:"/"},{label:"issues",link:"/issues"}]

const currentPath = usePathname()

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href={"/"}>
            <AiFillBug />
        </Link>
        <ol className='flex space-x-6'>
         {links.map(link =>
            <li 
            className={classNames({
                'text-foreground': link.link === currentPath,
                'text-foreground/50':link.link !== currentPath,
                'hover:text-foreground/70 transition-colors': true
            })}
            key={link.label}>
                <Link href={link.link}>{link.label}</Link>
            </li>
        )}
        </ol>
        <ModeToggle />
    </nav>
  )
}

export default NavBar