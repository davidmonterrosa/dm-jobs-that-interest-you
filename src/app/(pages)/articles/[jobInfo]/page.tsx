import { JobItem } from '@/utils/Interfaces'
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import CompanyInfo from '/public/data/CompanyInfo.json'

interface CompanyArticleProps {
    company: JobItem
}

const CompanyArticle = async ({ params }: { params: Promise<{ company: string }> }) => {
    const {company} = await params;
    // const response = await fetch()

  return (
    <div>This Article is about the {company} </div>
  )
}

// // Step 4: Generate paths for static generation
// export const getStaticPaths: GetStaticPaths = async () => {
//     const paths = companies.map((companyItem) => ({
//       params: { slug: companyItem.slug }
//     }))
  
//     return {
//       paths,
//       fallback: false, // or true/‘blocking’ if you want dynamic generation
//     }
//   }
  
//   // Step 5: Fetch the correct company based on slug
//   export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const slug = params?.slug as string
//     const company = companies.find((companyItem) => company.slug === slug)
  
//     if (!company) {
//       return { notFound: true }
//     }
  
//     return {
//       props: {
//         company
//       }
//     }
//   }
  

// export default CompanyArticle