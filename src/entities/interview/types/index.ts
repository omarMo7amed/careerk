export enum RoleSlug {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DATA_ENGINEER = 'DATA_ENGINEER',
  DEVOPS = 'DEVOPS',
  SYSTEMS_ENGINEER = 'SYSTEMS_ENGINEER',
}

export enum LevelSlug {
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
}

export enum QuestionCategory {
  TECHNICAL = 'TECHNICAL',
  PROBLEM_SOLVING = 'PROBLEM_SOLVING',
  BEHAVIORAL = 'BEHAVIORAL',
}

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export interface Guidance {
  keyPoints: string[]
  commonMistakes: string[]
  answerStructure: string[]
}

export interface InterviewQuestion {
  id: string
  role: RoleSlug
  level: LevelSlug
  category: QuestionCategory
  question: string
  difficulty: Difficulty
  skills: string[]
  estimatedTime: string
  guidance: Guidance
  createdAt: string
}

export interface PaginatedQuestions {
  questions: InterviewQuestion[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface PrepStats {
  total: number
  technical: number
  problemSolving: number
  behavioral: number
}
