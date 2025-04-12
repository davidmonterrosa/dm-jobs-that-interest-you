import { notFound } from "next/navigation";
import CompanyInfo from "@/utils/data/CompanyInfo.json";
import { JobItem } from "@/utils/Interfaces";

interface PageProps {
  params: {
    slug: string;
  };
}

const CompanyPage = ({ params }: PageProps) => {
  const company: JobItem | undefined = CompanyInfo.find(
    (item) => item.slug === params.slug
  );

  if (!company) return notFound();

  return (
    <div className="bg-[#eec983] min-w-screen w-full p-6 text-black">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
        <p className="text-lg text-gray-600">{company.tagline}</p>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 inline-block"
        >
          Visit Company Website ↗
        </a>
      </header>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Why I Want to Work Here</h2>
          <p className=" mt-2">
            {company.jobAppeal}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Tech Stack Fit</h2>
          <p className=" mt-2">
            {company.stackFit}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Goals in This Role</h2>
          <ul className="list-disc list-inside mt-2">
            {company.goalsInPosition.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Skillset Evaluation</h2>
          <div className="flex justify-evenly">
            <section>
              <p className=" mt-2 mb-2">
                Skills I have:
              </p>
              <ul className="list-disc list-inside pl-4 mb-4 ">
                {company.currentSkillMatch.have.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </section>
            <section>
              {company.currentSkillMatch.needToLearn.length > 0 && (
                <>
                  <p className=" mt-2 mb-2"> Skills I’d need to learn:</p>
                  <ul className="list-disc list-inside pl-4 ">
                    {company.currentSkillMatch.needToLearn.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Related Position</h2>
          <p className=" mt-2 mb-2">
            <strong>{company.relatedPosition.title}:</strong> {company.relatedPosition.description}
          </p>
          <a
            href={company.relatedPosition.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Position ↗
          </a>
        </div>
      </section>
    </div>
  );
}

export default CompanyPage