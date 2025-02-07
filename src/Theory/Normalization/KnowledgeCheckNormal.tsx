import { Subtopic } from './dbms';

function createKnowledgeCheckNormalizationSubtopic(): Subtopic {
    return {
        id: 'knowledge-check-normalization',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What is the primary goal of normalization in DBMS?',
                options: [
                    'To increase data redundancy',
                    'To reduce data redundancy and improve data integrity',
                    'To make queries slower',
                    'To allow duplicate data',
                ],
                correctAnswer: 1,
                explanation: 'Normalization reduces redundancy and ensures data integrity by organizing data efficiently.',
            },
            {
                id: '2',
                question: 'Which normal form removes partial dependencies?',
                options: [
                    'First Normal Form (1NF)',
                    'Second Normal Form (2NF)',
                    'Third Normal Form (3NF)',
                    'Boyce-Codd Normal Form (BCNF)',
                ],
                correctAnswer: 1,
                explanation: '2NF eliminates partial dependencies by ensuring all non-key attributes depend on the entire primary key.',
            },
            {
                id: '3',
                question: 'Which normal form ensures that there are no transitive dependencies?',
                options: [
                    '1NF',
                    '2NF',
                    '3NF',
                    'BCNF',
                ],
                correctAnswer: 2,
                explanation: '3NF ensures that non-key attributes depend only on the primary key, removing transitive dependencies.',
            },
            {
                id: '4',
                question: 'What is a functional dependency in DBMS?',
                options: [
                    'A relationship where one attribute uniquely determines another attribute',
                    'A relationship between two tables',
                    'A connection between two databases',
                    'A dependency that cannot be removed',
                ],
                correctAnswer: 0,
                explanation: 'A functional dependency exists when one attribute uniquely determines another attribute in a relation.',
            },
            {
                id: '5',
                question: 'Which normal form is a stricter version of 3NF?',
                options: [
                    '2NF',
                    '3NF',
                    'BCNF',
                    '1NF',
                ],
                correctAnswer: 2,
                explanation: 'BCNF is a stricter version of 3NF that removes all functional dependencies where the determinant is not a superkey.',
            },
            {
                id: '6',
                question: 'What is the main requirement for a relation to be in 1NF?',
                options: [
                    'It must not have repeating groups',
                    'It must be free of partial dependencies',
                    'It must not have transitive dependencies',
                    'It must have a composite key',
                ],
                correctAnswer: 0,
                explanation: 'A relation is in 1NF if it has atomic values and does not contain repeating groups.',
            },
            {
                id: '7',
                question: 'Which normal form removes multivalued attributes and repeating groups?',
                options: [
                    '1NF',
                    '2NF',
                    '3NF',
                    'BCNF',
                ],
                correctAnswer: 0,
                explanation: '1NF eliminates repeating groups and ensures that all attributes contain atomic values.',
            },
            {
                id: '8',
                question: 'What does lossless decomposition ensure?',
                options: [
                    'Data can be perfectly reconstructed after decomposition',
                    'Data loss occurs after decomposition',
                    'Functional dependencies are removed',
                    'Database performance is slowed down',
                ],
                correctAnswer: 0,
                explanation: 'Lossless decomposition ensures that no data is lost when breaking a relation into smaller tables.',
            },
            {
                id: '9',
                question: 'What is the main problem with unnormalized relations?',
                options: [
                    'Increased query speed',
                    'Data redundancy and anomalies',
                    'Improved data integrity',
                    'Efficient indexing',
                ],
                correctAnswer: 1,
                explanation: 'Unnormalized relations lead to redundancy and anomalies, making data maintenance difficult.',
            },
            {
                id: '10',
                question: 'Which of the following is an example of a transitive dependency?',
                options: [
                    'A → B and B → C, so A → C',
                    'A → B and B → A',
                    'A → C and C → B',
                    'A → B and A → C',
                ],
                correctAnswer: 0,
                explanation: 'A transitive dependency occurs when A determines B, and B determines C, making A indirectly determine C.',
            },
            {
                id: '11',
                question: 'What is a partial dependency?',
                options: [
                    'When a non-key attribute depends on part of a composite key',
                    'When a non-key attribute depends on the whole primary key',
                    'When all attributes depend on the candidate key',
                    'When there are multiple foreign keys',
                ],
                correctAnswer: 0,
                explanation: 'Partial dependency occurs when a non-key attribute depends on only part of a composite primary key.',
            },
            {
                id: '12',
                question: 'Which of the following is NOT a type of normal form?',
                options: [
                    '1NF',
                    '2NF',
                    '4NF',
                    '5NF',
                ],
                correctAnswer: 3,
                explanation: 'There is a 5NF, but it is not commonly used in most practical applications.',
            },
            {
                id: '13',
                question: 'What does dependency preservation mean in decomposition?',
                options: [
                    'All functional dependencies must be maintained in decomposed tables',
                    'All tables should have a primary key',
                    'There should be no foreign keys',
                    'Data should be redundant',
                ],
                correctAnswer: 0,
                explanation: 'Dependency preservation ensures that all functional dependencies are maintained in decomposed relations.',
            },
            {
                id: '14',
                question: 'What is the highest normal form a table can be in?',
                options: [
                    'BCNF',
                    '3NF',
                    '4NF',
                    '5NF',
                ],
                correctAnswer: 3,
                explanation: '5NF is the highest normal form, removing join dependencies.',
            },
            {
                id: '15',
                question: 'What happens if a table has only 1NF applied?',
                options: [
                    'It still has redundancy and anomalies',
                    'It is fully normalized',
                    'It has no partial dependencies',
                    'It has no functional dependencies',
                ],
                correctAnswer: 0,
                explanation: '1NF eliminates repeating groups, but redundancy and anomalies may still exist.',
            },
            {
                id: '16',
                question: 'How can you determine a table’s normal form?',
                options: [
                    'By checking dependencies and redundancies',
                    'By counting the number of attributes',
                    'By checking the number of tuples',
                    'By analyzing primary keys only',
                ],
                correctAnswer: 0,
                explanation: 'A table’s normal form is determined by analyzing its functional dependencies and redundancy levels.',
            },
            {
                id: '17',
                question: 'Which type of dependency leads to update anomalies?',
                options: [
                    'Partial dependency',
                    'Transitive dependency',
                    'Both A and B',
                    'None of the above',
                ],
                correctAnswer: 2,
                explanation: 'Both partial and transitive dependencies can lead to anomalies when updating data.',
            },
            {
                id: '18',
                question: 'What is the purpose of decomposition in normalization?',
                options: [
                    'To break a relation into smaller relations without losing data',
                    'To delete data',
                    'To increase redundancy',
                    'To reduce query speed',
                ],
                correctAnswer: 0,
                explanation: 'Decomposition helps organize data efficiently while ensuring data integrity.',
            },
            {
                id: '19',
                question: 'Why is BCNF preferred over 3NF?',
                options: [
                    'BCNF eliminates all functional dependencies where determinant is not a superkey',
                    '3NF allows transitive dependencies',
                    'BCNF allows redundancy',
                    'BCNF is simpler to apply',
                ],
                correctAnswer: 0,
                explanation: 'BCNF removes all dependencies that do not have a superkey as a determinant.',
            },
            {
                id: '20',
                question: 'What is the main drawback of normalization?',
                options: [
                    'Increased number of joins in queries',
                    'Higher redundancy',
                    'Loss of functional dependencies',
                    'Data inconsistency',
                ],
                correctAnswer: 0,
                explanation: 'Normalization can increase the number of joins required in queries, which may affect performance.',
            },
        ],
    };
}

export default createKnowledgeCheckNormalizationSubtopic;
