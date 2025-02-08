export interface Topic {
    id: string;
    title: string;
    content: string;
    subtopics?: Subtopic[];
    quiz?: QuizItem[];
}
  
export interface Subtopic {
    id: string;
    title: string;
    content: string;
    quiz?: QuizItem[];
}
  
export interface QuizItem {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

