export interface Query {
  id: string;
  sql: string;
  result?: any[];
  error?: string;
}

export interface Exercise {
  id: string;
  question: string;
  expectedResult: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  category: string;
}

export interface TheoryTopic {
  id: string;
  title: string;
  content: string;
  subtopics?: TheoryTopic[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DatabaseObject {
  id: string;
  name: string;
  type: 'table' | 'view' | 'trigger';
  definition: string;
  createdAt: string;
  columns?: Column[];
  data?: any[];
}

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
  isPrimary: boolean;
}