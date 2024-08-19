'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const Navbar = () => {
    const currentPage = usePathname();
    const links = [
        {lable: 'Movies', href: '/'},
        {lable: 'Actors', href: '/actors'},
        {lable: 'contact', href: '/contact'},
    ]
    return (
        <nav className='flex space-x-10 items-center h-20 text-xl navbar'>
            <Link href='/' className="text-white mx-10c">Logo</Link>
            <ul className="flex space-x-10"> 
                {
                    links.map(link => (
                        <Link key={link.lable} href={link.href} 
                            className={ classNames({
                                'hover:text-sky-300 transition-colors': true,
                                'text-sky-300' : link.href === currentPage,
                                'text-white' : link.href !== currentPage
                            })}>{link.lable}
                        </Link>
                    ))
                }
            </ul>
          
        </nav>
    )
}

export default Navbar