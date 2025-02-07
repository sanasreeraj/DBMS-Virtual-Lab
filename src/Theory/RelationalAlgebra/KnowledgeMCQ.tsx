import { Subtopic } from './dbms';

function createKnowledgeCheckRelationalAlgebraSubtopic(): Subtopic {
    return {
        id: 'knowledge-check-relational-algebra',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'Which of the following is a fundamental operation in Relational Algebra?',
                options: [
                    'Join',
                    'Selection',
                    'Projection',
                    'Both Selection and Projection'
                ],
                correctAnswer: 3,
                explanation: 'Selection and Projection are fundamental operations in Relational Algebra.'
            },
            {
                id: '2',
                question: 'What does the Selection (σ) operation do in Relational Algebra?',
                options: [
                    'Selects specific columns',
                    'Filters rows based on a condition',
                    'Joins two relations',
                    'Renames attributes'
                ],
                correctAnswer: 1,
                explanation: 'Selection (σ) filters rows that satisfy a given condition.'
            },
            {
                id: '3',
                question: 'What does the Projection (π) operation do in Relational Algebra?',
                options: [
                    'Filters rows based on conditions',
                    'Selects specific columns',
                    'Joins two relations',
                    'Deletes tuples'
                ],
                correctAnswer: 1,
                explanation: 'Projection (π) selects specific attributes (columns) from a relation.'
            },
            {
                id: '4',
                question: 'Which operator is used to combine tuples from two relations?',
                options: [
                    'Selection',
                    'Projection',
                    'Union',
                    'Difference'
                ],
                correctAnswer: 2,
                explanation: 'Union combines tuples from two relations while eliminating duplicates.'
            },
            {
                id: '5',
                question: 'Which of the following operations requires both relations to have the same schema?',
                options: [
                    'Selection',
                    'Union',
                    'Projection',
                    'Join'
                ],
                correctAnswer: 1,
                explanation: 'Union requires both relations to have the same set of attributes and domain compatibility.'
            },
            {
                id: '6',
                question: 'What is the Cartesian Product (×) operation used for?',
                options: [
                    'Combining tuples from two relations without any condition',
                    'Filtering tuples based on a condition',
                    'Selecting specific attributes',
                    'Removing duplicates'
                ],
                correctAnswer: 0,
                explanation: 'Cartesian Product generates all possible pairs of tuples from two relations.'
            },
            {
                id: '7',
                question: 'Which operation is used to retrieve common tuples from two relations?',
                options: [
                    'Intersection',
                    'Union',
                    'Difference',
                    'Projection'
                ],
                correctAnswer: 0,
                explanation: 'Intersection retrieves tuples that exist in both relations.'
            },
            {
                id: '8',
                question: 'Which operation is used to find tuples present in one relation but not in another?',
                options: [
                    'Union',
                    'Difference',
                    'Intersection',
                    'Selection'
                ],
                correctAnswer: 1,
                explanation: 'Difference retrieves tuples that exist in one relation but not in the second relation.'
            },
            {
                id: '9',
                question: 'Which operation is considered a derived operation in Relational Algebra?',
                options: [
                    'Selection',
                    'Projection',
                    'Join',
                    'Difference'
                ],
                correctAnswer: 2,
                explanation: 'Join is derived from Cartesian Product and Selection operations.'
            },
            {
                id: '10',
                question: 'What does the Division (÷) operation do in Relational Algebra?',
                options: [
                    'Returns tuples related to all values of another relation',
                    'Joins two relations',
                    'Finds common tuples',
                    'Removes duplicates'
                ],
                correctAnswer: 0,
                explanation: 'Division returns tuples that are associated with all tuples in another relation.'
            },
            {
                id: '11',
                question: 'Which relational algebra operation corresponds to the SQL JOIN operation?',
                options: [
                    'Selection',
                    'Projection',
                    'Cartesian Product followed by Selection',
                    'Union'
                ],
                correctAnswer: 2,
                explanation: 'SQL JOIN is implemented using Cartesian Product followed by a Selection condition.'
            },
            {
                id: '12',
                question: 'Which operation is not part of fundamental relational algebra operations?',
                options: [
                    'Union',
                    'Intersection',
                    'Projection',
                    'Selection'
                ],
                correctAnswer: 1,
                explanation: 'Intersection is a derived operation and not a fundamental relational algebra operation.'
            },
            {
                id: '13',
                question: 'What is the main use of the Rename (ρ) operation in Relational Algebra?',
                options: [
                    'To change attribute or relation names',
                    'To remove duplicate tuples',
                    'To filter rows based on conditions',
                    'To select specific attributes'
                ],
                correctAnswer: 0,
                explanation: 'Rename (ρ) is used to rename attributes or relations for convenience in queries.'
            },
            {
                id: '14',
                question: 'Which relational algebra operation helps in eliminating duplicate tuples?',
                options: [
                    'Projection',
                    'Selection',
                    'Union',
                    'Difference'
                ],
                correctAnswer: 0,
                explanation: 'Projection automatically removes duplicate tuples unless specified otherwise.'
            },
            {
                id: '15',
                question: 'Which relational algebra operation retrieves a subset of a relation?',
                options: [
                    'Selection',
                    'Projection',
                    'Union',
                    'Cartesian Product'
                ],
                correctAnswer: 0,
                explanation: 'Selection retrieves specific rows (tuples) from a relation based on a condition.'
            }
        ]
    };
}

export default createKnowledgeCheckRelationalAlgebraSubtopic;
