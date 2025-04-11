export interface JobItem {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    imageUrl: string;
    website: string;
    jobUrl: string;
    description: string;
    jobAppeal: string;
    location: string;
    workStyle: string;
    requiredSkills: string[];
    stackFit: string;
    goalsInPosition: string[];
    currentSkillMatch: {
      have: string[];
      needToLearn: string[];
    };
    relatedPosition: {
      title: string;
      description: string;
      link: string;
    };
  }
  