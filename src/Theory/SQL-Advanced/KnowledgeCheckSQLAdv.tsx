import { Subtopic } from './dbms';

function createKnowledgeCheckAdvancedSQL(): Subtopic {
    return {
        id: 'knowledge-check-advanced-sql',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What is the main difference between a Nested Query and a Correlated Nested Query?',
                options: [
                    'A nested query is executed once, whereas a correlated nested query is executed multiple times.',
                    'A correlated nested query is always faster than a normal nested query.',
                    'Nested queries cannot contain aggregate functions.',
                    'There is no difference between them.'
                ],
                correctAnswer: 0,
                explanation: 'A nested query runs independently, whereas a correlated nested query executes once per row in the outer query.'
            },
            {
                id: '2',
                question: 'Which SQL clause is used to define temporary result sets that can be referenced within a query?',
                options: ['WITH', 'HAVING', 'GROUP BY', 'EXISTS'],
                correctAnswer: 0,
                explanation: 'The WITH clause defines Common Table Expressions (CTEs) to simplify complex queries.'
            },
            {
                id: '3',
                question: 'What does the ANY operator do in SQL?',
                options: [
                    'Checks if any value in a subquery satisfies the condition.',
                    'Returns all matching records.',
                    'Compares values from different tables.',
                    'Filters unique values only.'
                ],
                correctAnswer: 0,
                explanation: 'ANY returns true if at least one value in the subquery satisfies the condition.'
            },
            {
                id: '4',
                question: 'How does the ALL operator function in SQL?',
                options: [
                    'Returns true if all values in a subquery satisfy the condition.',
                    'Checks if at least one value satisfies the condition.',
                    'Performs a UNION of all values.',
                    'Ignores NULL values.'
                ],
                correctAnswer: 0,
                explanation: 'ALL returns true only if all values in the subquery meet the condition.'
            },
            {
                id: '5',
                question: 'Which operator is used to check whether a value exists in a given set of values?',
                options: ['IN', 'EXISTS', 'ANY', 'ALL'],
                correctAnswer: 0,
                explanation: 'The IN operator checks if a value exists in a given set of values.'
            },
            {
                id: '6',
                question: 'What is the difference between EXISTS and IN operators?',
                options: [
                    'EXISTS checks for the existence of rows, while IN checks for matching values.',
                    'IN is used for correlated queries only.',
                    'EXISTS returns all rows, while IN filters rows.',
                    'There is no difference between them.'
                ],
                correctAnswer: 0,
                explanation: 'EXISTS checks if the subquery returns any rows, while IN matches a value against a list.'
            },
            {
                id: '7',
                question: 'Which SQL operation combines results from two queries while removing duplicates?',
                options: ['UNION', 'INTERSECT', 'JOIN', 'EXCEPT'],
                correctAnswer: 0,
                explanation: 'UNION combines results from two queries but removes duplicates unless UNION ALL is used.'
            },
            {
                id: '8',
                question: 'What does the INTERSECT operator do?',
                options: [
                    'Returns only common rows between two queries.',
                    'Joins two tables.',
                    'Finds the difference between two queries.',
                    'Performs a Cartesian product.'
                ],
                correctAnswer: 0,
                explanation: 'INTERSECT returns only the rows that are present in both queries.'
            },
            {
                id: '9',
                question: 'How can you find the Kth highest salary in SQL?',
                options: [
                    'Using the LIMIT and OFFSET clause.',
                    'Using the RANK() function.',
                    'Using the DENSE_RANK() function.',
                    'All of the above.'
                ],
                correctAnswer: 3,
                explanation: 'Kth highest salary can be retrieved using LIMIT, OFFSET, RANK(), or DENSE_RANK().' 
            },
            {
                id: '10',
                question: 'What does the SQL DIVISION operator return?',
                options: [
                    'Tuples that are associated with all values of another relation.',
                    'The Cartesian product of two relations.',
                    'A single-column result set.',
                    'None of the above.'
                ],
                correctAnswer: 0,
                explanation: 'Division returns tuples related to all values in another relation.'
            }
            // Add 10 more MCQs here following the same format
        ]
    };
}

export default createKnowledgeCheckAdvancedSQL;
