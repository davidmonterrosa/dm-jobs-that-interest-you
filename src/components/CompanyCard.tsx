'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { JobItem } from '@/utils/Interfaces'
import { useRouter } from 'next/navigation';

interface CompanyCardProps {
  jobInfo: JobItem;
}

const CompanyCard: React.FC<CompanyCardProps> = ({jobInfo}) => {
    const {push} = useRouter();

    // const [company, setCompany] = useState<JobItem>(jobInfo);

    const handleReadMoreBtn = () => {
        // setCompany(jobInfo);
        push(`/articles/${jobInfo.slug}`);
    }

  return (
    <div className='flex flex-col p-3'>
        <div>
            temporary text
            {/* <img src="" alt="Company Logo" /> */}
        </div>
        <div>
            <h1 className='text-xl'>{jobInfo.name}</h1>
            <p>{jobInfo.description}</p>
            <p>{jobInfo.jobUrl}</p>
            <div className='flex justify-end mt-4 '>
                <Button className='px-10 py-5' onClick={handleReadMoreBtn}>Read More</Button>
            </div>
        </div>
        
    </div>
  )
}

export default CompanyCard