"use client";
import CompanyCard from "@/components/CompanyCard";
import { JobItem } from "@/utils/Interfaces";
import CompanyInfo from "@/utils/data/CompanyInfo.json";

export default function Home() {
  const companies: JobItem[] = CompanyInfo;

  return (
    <main
      className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-[auto_minmax(350px,auto)_minmax(350px,auto)_minmax(350px,auto)_minmax(350px,auto)_minmax(350px,auto)] md:grid-rows-[auto_minmax(350px,auto)_minmax(350px,auto)_minmax(350px,auto)] xl:grid-rows-[auto_minmax(350px,auto)_minmax(350px,auto)] gap-4 min-h-screen h-full bg-[#eec983] text-black pb-4"
    >
      <article className="flex flex-col min-h-96 bg-[url(/images/manCodingThreeMonitors.jpg)] bg-center lg:bg-[center_-10rem] bg-cover  bg-no-repeat mt-10 md:col-span-2 xl:col-span-3 justify-center text-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white ">
          What Comes After CodeStack?
        </h1>
        <p className="md:text-2xl  text-white">
          Here are 5 companies that I would like to work for
        </p>
      </article>

      {/* Company Cards */}
      {companies.map((company: JobItem, idx: number) => (
        <CompanyCard key={idx} jobInfo={company} />
      ))}
    </main>
  );
}
