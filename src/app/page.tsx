'use client'
import CompanyCard from "@/components/CompanyCard";
import { fetchCompanyData } from "@/utils/DataServices";
import { JobItem } from "@/utils/Interfaces";
import { useEffect, useState } from "react";
import CompanyInfo from "@/utils/data/CompanyInfo.json";

export default function Home() {
    const companies: JobItem[] = CompanyInfo;

  return (
    <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-screen h-full bg-[#eec983] text-black">
      <article className="flex flex-col h-96 bg-[url(/images/manCodingThreeMonitors.jpg)] bg-[center_-10rem] bg-cover bg-no-repeat mt-10 md:col-span-2 xl:col-span-3 justify-center">
        <h1 className="text-5xl font-bold text-white text-center">What Comes After CodeStack?</h1>
        <p className="text-2xl text-center text-white">Here are 5 companies that I would like to work for</p>
      </article>
      
      {/* Company Cards */}
      {
        companies.map((company: JobItem, idx: number) => (
          <CompanyCard key={idx} jobInfo={company} />
        ))
      }
    </main>
  );
}
