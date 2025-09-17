import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 p-5 bg-gray-200 text-lg font-medium'>
        <Link href='/'>Home Page</Link>
        <Link href='/about'>About Page</Link>
        <Link href='/contact'>Contact Page</Link>
    </div>
  )
}

export default Navbar