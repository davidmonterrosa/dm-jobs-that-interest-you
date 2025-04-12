'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavbarLayout = ({children}: {children: React.ReactNode}) => {
  const {push} = useRouter();

  const handleHome = () => {
    push('/');
  }
  return (
    <div className='bg-[#eec983] min-w-screen'>
      <div className='flex justify-end p-4'>
        <Button className='bg-[#eec983] hover:bg-white/50 px-10 py-5' onClick={handleHome}>
          <img className='size-6' src="/images/home.png" alt="home button" />
        </Button>
      </div>
        {children}
    </div>

  )
}

export default NavbarLayout