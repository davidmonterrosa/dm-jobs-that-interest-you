'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { JobItem } from '@/utils/Interfaces'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CompanyCardProps {
  jobInfo: JobItem;
}

const CompanyCard: React.FC<CompanyCardProps> = ({jobInfo}) => {

  return (
    <div className='flex flex-col p-3'>
        <div className='h-28 w-auto object-fill'>
            <img src={jobInfo.imageUrl} alt="Company Logo" />
        </div>
        <div>
            <h1 className='text-xl'>{jobInfo.name}</h1>
            <p>{jobInfo.description}</p>
            <p className='overflow-x-hidden'>
                <a href={jobInfo.jobUrl}></a>
                {`${jobInfo.name} Website`}
            </p>
            <Link href={`/${jobInfo.slug}`} className='flex justify-end mt-4 ' passHref>
                    <Button className='px-10 py-5'>Read More</Button>
            </Link>
        </div>
        
    </div>
  )
}

export default CompanyCard