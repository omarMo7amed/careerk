export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface JobSeekerSkill {
  skillId: string;
  name: string;
  verified: boolean;
}
