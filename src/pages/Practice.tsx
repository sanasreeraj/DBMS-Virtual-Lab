import React, { useState } from 'react';
import SQLEditor from '../components/SQLEditor';
import { Exercise } from '../types';
import { BookOpen, ChevronRight } from 'lucide-react';

const tableSchemas = {
  employees: `
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  department VARCHAR(50),
  salary DECIMAL(10,2)
);

-- Sample data:
INSERT INTO employees (name, email, department, salary) VALUES
('John Doe', 'john@example.com', 'IT', 75000),
('Jane Smith', 'jane@example.com', 'HR', 65000);
`,
  departments: `
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(100),
  budget DECIMAL(15,2)
);

-- Sample data:
INSERT INTO departments (name, location, budget) VALUES
('IT', 'New York', 1000000),
('HR', 'Chicago', 500000);
`
};

const exercises: Exercise[] = [
  {
    id: '1',
    question: 'Write a query to select all employees from the employees table.',
    expectedResult: 'SELECT * FROM employees',
    difficulty: 'easy',
    hints: ['Use the SELECT statement', 'The * symbol selects all columns'],
    category: 'Basic Queries'
  },
  {
    id: '2',
    question: 'Write a query to select employees with salary greater than 50000.',
    expectedResult: 'SELECT * FROM employees WHERE salary > 50000',
    difficulty: 'medium',
    hints: ['Use the WHERE clause', 'Use the > operator for comparison'],
    category: 'Filtering'
  },
  {
    id: '3',
    question: 'Write a query to find the average salary by department.',
    expectedResult: 'SELECT department, AVG(salary) FROM employees GROUP BY department',
    difficulty: 'hard',
    hints: ['Use GROUP BY', 'Use the AVG aggregate function'],
    category: 'Aggregation'
  },
  {
    id: '4',
    question: 'Write a query to join the employees and departments tables.',
    expectedResult: 'SELECT e.*, d.name FROM employees e JOIN departments d ON e.dept_id = d.id',
    difficulty: 'medium',
    hints: ['Use JOIN', 'Match the foreign key with primary key'],
    category: 'Joins'
  },
  {
    id: '5',
    question: 'Write a query to find employees with the highest salary in each department.',
    expectedResult: 'SELECT department, MAX(salary) FROM employees GROUP BY department',
    difficulty: 'hard',
    hints: ['Use GROUP BY', 'Use the MAX aggregate function'],
    category: 'Advanced'
  }
];

export default function Practice() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showHint, setShowHint] = useState(false);
  
  const checkAnswer = (query: string) => {
    if (!selectedExercise) return;
    const isCorrect = query.trim().toLowerCase() === selectedExercise.expectedResult.toLowerCase();
    alert(isCorrect ? 'Correct!' : 'Try again!');
  };

  const categories = Array.from(new Set(exercises.map(ex => ex.category)));

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold">Practice SQL Queries</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Exercise List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Exercises</h2>
            
            {categories.map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-700">{category}</h3>
                <div className="space-y-3">
                  {exercises
                    .filter(ex => ex.category === category)
                    .map(exercise => (
                      <button
                        key={exercise.id}
                        onClick={() => {
                          setSelectedExercise(exercise);
                          setShowHint(false);
                        }}
                        className={`w-full text-left p-4 rounded-lg border transition
                          ${selectedExercise?.id === exercise.id
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Exercise {exercise.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium
                            ${exercise.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'}`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Details and Editor */}
        <div className="lg:col-span-2">
          {selectedExercise ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Exercise {selectedExercise.id}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${selectedExercise.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    selectedExercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                  {selectedExercise.difficulty}
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Schema Reference</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                  {tableSchemas.employees}
                  {'\n'}
                  {tableSchemas.departments}
                </pre>
              </div>

              <p className="text-gray-600 mb-6">{selectedExercise.question}</p>
              
              {showHint && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-700">{selectedExercise.hints[0]}</p>
                </div>
              )}
              
              <SQLEditor onExecute={checkAnswer} />
              
              <button
                onClick={() => setShowHint(!showHint)}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <ChevronRight className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">Select an exercise to begin practicing</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}