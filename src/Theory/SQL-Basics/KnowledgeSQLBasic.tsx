import { Subtopic } from './dbms';

function createKnowledgeCheckSQLSubtopic(): Subtopic {
    return {
        id: 'knowledge-check-sql-basics',
        title: 'Knowledge Check',
        content: `            
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What does SQL stand for?',
                options: [
                    'Structured Query Language',
                    'Sequential Query Language',
                    'Structured Question Language',
                    'System Query Language',
                ],
                correctAnswer: 0,
                explanation: 'SQL stands for Structured Query Language, used for managing and querying relational databases.',
            },
            {
                id: '2',
                question: 'Which SQL command is used to retrieve data from a database?',
                options: [
                    'SELECT',
                    'UPDATE',
                    'DELETE',
                    'INSERT',
                ],
                correctAnswer: 0,
                explanation: 'The SELECT statement is used to fetch data from a database table.',
            },
            {
                id: '3',
                question: 'Which clause is used to filter records in SQL?',
                options: [
                    'ORDER BY',
                    'WHERE',
                    'GROUP BY',
                    'HAVING',
                ],
                correctAnswer: 1,
                explanation: 'The WHERE clause is used to filter records based on a specific condition.',
            },
            {
                id: '4',
                question: 'Which SQL command is used to remove all records from a table without deleting the table itself?',
                options: [
                    'DROP',
                    'DELETE',
                    'TRUNCATE',
                    'REMOVE',
                ],
                correctAnswer: 2,
                explanation: 'The TRUNCATE command removes all rows from a table but keeps its structure intact.',
            },
            {
                id: '5',
                question: 'What is the purpose of the PRIMARY KEY constraint?',
                options: [
                    'To allow duplicate values in a column',
                    'To uniquely identify each row in a table',
                    'To create a foreign key relationship',
                    'To store only numeric values',
                ],
                correctAnswer: 1,
                explanation: 'The PRIMARY KEY constraint ensures that each row in a table is uniquely identifiable.',
            },
            {
                id: '6',
                question: 'Which SQL function is used to return the total number of rows in a query result?',
                options: [
                    'SUM()',
                    'COUNT()',
                    'TOTAL()',
                    'AVG()',
                ],
                correctAnswer: 1,
                explanation: 'The COUNT() function returns the number of rows in a result set.',
            },
            {
                id: '7',
                question: 'What is the default sorting order of the ORDER BY clause?',
                options: [
                    'Ascending',
                    'Descending',
                    'Random',
                    'Undefined',
                ],
                correctAnswer: 0,
                explanation: 'By default, ORDER BY sorts data in ascending order.',
            },
            {
                id: '8',
                question: 'Which SQL clause is used to group records that have the same values in specified columns?',
                options: [
                    'ORDER BY',
                    'WHERE',
                    'GROUP BY',
                    'HAVING',
                ],
                correctAnswer: 2,
                explanation: 'The GROUP BY clause groups records with identical values in specified columns.',
            },
            {
                id: '9',
                question: 'Which SQL statement is used to modify existing records in a table?',
                options: [
                    'INSERT',
                    'UPDATE',
                    'ALTER',
                    'MODIFY',
                ],
                correctAnswer: 1,
                explanation: 'The UPDATE statement modifies existing records in a table.',
            },
            {
                id: '10',
                question: 'Which SQL keyword is used to fetch only distinct values from a column?',
                options: [
                    'UNIQUE',
                    'DISTINCT',
                    'FILTER',
                    'SEPARATE',
                ],
                correctAnswer: 1,
                explanation: 'DISTINCT ensures that duplicate values are removed from the result set.',
            },
            {
                id: '11',
                question: 'Which of the following is NOT a type of SQL JOIN?',
                options: [
                    'INNER JOIN',
                    'OUTER JOIN',
                    'CROSS JOIN',
                    'MERGE JOIN',
                ],
                correctAnswer: 3,
                explanation: 'MERGE JOIN is not a standard SQL JOIN type.',
            },
            {
                id: '12',
                question: 'What is the purpose of the FOREIGN KEY constraint?',
                options: [
                    'To enforce referential integrity',
                    'To make a column unique',
                    'To store numeric values only',
                    'To speed up queries',
                ],
                correctAnswer: 0,
                explanation: 'A FOREIGN KEY ensures that a column references a valid primary key in another table.',
            },
            {
                id: '13',
                question: 'Which SQL function returns the average of a numeric column?',
                options: [
                    'AVG()',
                    'SUM()',
                    'MEAN()',
                    'TOTAL()',
                ],
                correctAnswer: 0,
                explanation: 'AVG() returns the average value of a numeric column.',
            },
            {
                id: '14',
                question: 'What is the purpose of the HAVING clause?',
                options: [
                    'To filter results after grouping',
                    'To order query results',
                    'To filter individual rows',
                    'To limit query results',
                ],
                correctAnswer: 0,
                explanation: 'HAVING filters results after GROUP BY operations.',
            },
            {
                id: '15',
                question: 'Which SQL command is used to create a new table?',
                options: [
                    'ALTER',
                    'CREATE TABLE',
                    'INSERT',
                    'DEFINE TABLE',
                ],
                correctAnswer: 1,
                explanation: 'The CREATE TABLE statement is used to define a new table.',
            }
        ],
    };
}

export default createKnowledgeCheckSQLSubtopic;
