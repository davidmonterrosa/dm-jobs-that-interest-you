'use client'
import React from 'react'
import { Button } from './ui/button'
import { JobItem } from '@/utils/Interfaces'
import Link from 'next/link';

interface CompanyCardProps {
  jobInfo: JobItem;
}

const CompanyCard: React.FC<CompanyCardProps> = ({jobInfo}) => {

  return (
    <div className='bg-linear-to-t from-[#00000000] from-30% to-white flex flex-col p-3 m-4 rounded-lg'>
        <div className=' border-black'>
            <img className='h-28 w-full object-contain' src={jobInfo.imageUrl} alt="Company Logo" />
        </div>
        <div className='flex flex-col justify-between grow '>
            <section>
                <h1 className='text-2xl mb-2 font-bold'>{jobInfo.name}</h1>
                <p className='grow'>{jobInfo.description}</p>
            </section>
            <section className='flex justify-between'>
                <a href={jobInfo.website} target="_blank" rel="noopener noreferrer" className="mt-4" >
                    <Button className='hover:bg-indigo-300 hover:white font-bold ring-2 bg-[#00000000] text-black py-5 px-5 hover:cursor-pointer'>
                        Company Website ↗
                    </Button>
                </a>
                <Link href={`/${jobInfo.slug}`} className='mt-4' passHref>
                        <Button className='px-5 py-5 lg:px-10 hover:cursor-pointer'>Read More</Button>
                </Link>
            </section>
        </div>
        
    </div>
  )
}

export default CompanyCard