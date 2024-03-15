import React from 'react'
import Link from 'next/link'
import { GiAlienBug } from "react-icons/gi";

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 py-5 items-center'>
            <Link href="/"><GiAlienBug size="2em" /></Link>
            <ul className='flex space-x-6'>
                { links.map(link => 
                    <li key={link.href}>
                        <Link 
                            className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                    
                )}
                {/* <li><Link href="/issues">Issues</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;