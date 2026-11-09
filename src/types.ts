export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Course {
  id: string;
  title: string;
  category: 'foundations' | 'engineering' | 'productivity';
  shortDescription: string;
  fullDescription: string;
  level: CourseLevel;
  duration: string;
  modulesCount: number;
  projectOutcome: string;
  learningObjectives: string[];
  skills: string[];
  syllabus: {
    week: string;
    title: string;
    topics: string[];
  }[];
  prerequisites: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  outcome: string;
  architecturePoints: string[];
  demoType: 'chatbot' | 'study_assistant' | 'automation';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  background: string;
  imageAlt: string;
  quote: string;
  highlight: string;
  projectBuilt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  currentRole: string;
  areaOfInterest: string;
  learningPace: string;
  notes?: string;
}
