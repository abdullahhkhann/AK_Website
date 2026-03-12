export interface NavItem {
  label: string
  href: string
}

export interface Skill {
  name: string
  level: number
  highlight?: boolean
}

export interface SkillCategoryType {
  title: string
  skills: Skill[]
}

export interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  category: 'cloud' | 'systems' | 'web' | 'all'
}

export interface EducationItem {
  degree: string
  institution: string
  gpa?: string
  startYear: string
  endYear: string
  location: string
  note?: string
  coursework: string[]
}

export interface StatItem {
  value: string
  label: string
  numericValue: number
}
