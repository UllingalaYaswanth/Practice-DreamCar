import { SignedIn } from '@clerk/nextjs';
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react';

const Header = async ({ isAdminPage = false}) =>{
  const isAdmin= true;
  return (
    <header className='fixed top-0 w-full bg-white/80 background-blur-md z-50 border-b'>
      <nav className='mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href={isAdminPage ? '/admin' : "/"}>
        <h1 className='text-2xl font-semibold'><span className='text-blue-400'>Dream</span>Car.</h1>
        {
          isAdminPage && (
            <span className='text-sm font-extralight'>Admin</span>
          )
        }
        </Link>
        <div className="space-x-4 flex items-center">
          {isAdmin ? 
          <Link href='/'>
          <Button variant='outline'>
            <ArrowLeft size={18}/>
            <span>Back to App</span>
          </Button>
          </Link>
          :<SignedIn >
            <Link href='/saved-cars'>
            <Button>
              <Heart size={18}/>
              <span className='hidden md:inline'>Saved Cars</span>
            </Button>
            </Link>
            { !isAdmin ?  <Link href='/my-rev'>
            <Button variant="outline">
              <CarFront size={18}/>
              <span className='hidden md:inline'>My Reservations</span>
              </Button>
            </Link> :
            <Link href='/admin'>
            <Button variant="outline">
              <Layout size={18}/>
              <span className='hidden md:inline'>Admin</span>
              </Button>
            </Link> }
          </SignedIn>}
        </div>
      </nav>
    </header>
  )
}

export default Header