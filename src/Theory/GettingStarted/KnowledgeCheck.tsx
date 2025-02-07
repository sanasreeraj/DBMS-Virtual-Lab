import { Subtopic} from './dbms';

function createKnowledgeCheckSubtopic(): Subtopic {
    return {
        id: 'knowledge-check',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What does DBMS stand for?',
                options: [
                    'Database Management System',
                    'Data Basic Memory System',
                    'Database Memory Storage',
                    'Data Basic Management Storage',
                ],
                correctAnswer: 0,
                explanation: 'DBMS stands for Database Management System, which is software that manages databases.',
            },
            {
                id: '2',
                question: 'Which of the following is not a type of DBMS?',
                options: [
                    'Relational DBMS',
                    'Hierarchical DBMS',
                    'Network DBMS',
                    'Linear DBMS',
                ],
                correctAnswer: 3,
                explanation: 'Linear DBMS is not a valid type of DBMS.',
            },
            {
                id: '3',
                question: 'Which DBMS architecture involves a client-server model?',
                options: [
                    'Single-Tier',
                    'Two-Tier',
                    'Three-Tier',
                    'None of the above',
                ],
                correctAnswer: 1,
                explanation: 'The Two-Tier architecture involves a client-server model, where clients interact with the database server.',
            },
            {
                id: '4',
                question: 'What is the main focus of OLAP systems?',
                options: [
                    'Transactional data processing',
                    'Complex data analysis',
                    'Data redundancy reduction',
                    'Ensuring data integrity',
                ],
                correctAnswer: 1,
                explanation: 'OLAP systems are designed for complex queries and data analysis.',
            },
            {
                id: '5',
                question: 'Which of the following is a feature of a DBMS?',
                options: [
                    'Data redundancy',
                    'Data integrity',
                    'File management',
                    'Data fragmentation',
                ],
                correctAnswer: 1,
                explanation: 'A key feature of a DBMS is data integrity, ensuring that data is accurate and reliable.',
            },
            {
                id: '6',
                question: 'Which type of DBMS architecture has the least complexity?',
                options: [
                    'Single-Tier',
                    'Two-Tier',
                    'Three-Tier',
                    'All of the above',
                ],
                correctAnswer: 0,
                explanation: 'Single-Tier architecture is the simplest, as both the client and database reside on the same system.',
            },
            {
                id: '7',
                question: 'What type of DBMS is best suited for handling real-time transactions?',
                options: [
                    'OLAP',
                    'OLTP',
                    'Data Warehousing',
                    'Data Mining',
                ],
                correctAnswer: 1,
                explanation: 'OLTP (Online Transaction Processing) is best suited for real-time transactional systems.',
            },
            {
                id: '8',
                question: 'Which DBMS model stores data in a table format with rows and columns?',
                options: [
                    'Network Model',
                    'Relational Model',
                    'Hierarchical Model',
                    'Object-Oriented Model',
                ],
                correctAnswer: 1,
                explanation: 'The Relational Model stores data in tables with rows and columns, using SQL for queries.',
            },
            {
                id: '9',
                question: 'Which schema layer defines the users view of the data?',
                options:  [
                    'External Schema',
                    'Conceptual Schema',
                    'Internal Schema',
                    'None of the above',
                ],
                correctAnswer: 0,
                explanation: 'The External Schema defines the users view of the data, and different users can have different views.',
            },
            {
                id: '10',
                question: 'Which DBMS architecture involves separating the presentation, application, and database layers?',
                options: [
                    'Single-Tier',
                    'Two-Tier',
                    'Three-Tier',
                    'None of the above',
                ],
                correctAnswer: 2,
                explanation: 'The Three-Tier Architecture separates the client, application, and database layers to improve scalability and maintainability.',
            },
            {
                id: '11',
                question: 'Which of the following is true about physical data independence?',
                options: [
                    'Changes to storage do not affect logical structure or user views.',
                    'Changes to storage impact the external schema.',
                    'It makes it harder to update the storage medium.',
                    'None of the above',
                ],
                correctAnswer: 0,
                explanation: 'Physical data independence ensures that changes in storage methods do not affect the logical schema or user views.',
            },
            {
                id: '12',
                question: 'Which DBMS model allows multiple relationships to be defined between records?',
                options: [
                    'Relational Model',
                    'Network Model',
                    'Hierarchical Model',
                    'Object-Oriented Model',
                ],
                correctAnswer: 1,
                explanation: 'The Network Model allows multiple relationships between records, where each record can have multiple parent-child relationships.',
            },
            {
                id: '13',
                question: 'Which of the following is a key advantage of using a DBMS over a file system?',
                options: [
                    'Data duplication',
                    'High level of data security',
                    'No need for data backup',
                    'Manual data retrieval',
                ],
                correctAnswer: 1,
                explanation: 'A key advantage of DBMS over a file system is its ability to provide high-level data security, ensuring that sensitive data is protected.',
            },
            {
                id: '14',
                question: 'What does SQL stand for?',
                options: [
                    'Structured Query Language',
                    'Simple Query Language',
                    'Structured Query Logic',
                    'Simple Query Logic',
                ],
                correctAnswer: 0,
                explanation: 'SQL stands for Structured Query Language, which is used to query and manipulate data in a relational database.',
            },
            {
                id: '15',
                question: 'What is the primary purpose of data normalization in DBMS?',
                options: [
                    'To reduce data redundancy',
                    'To improve database security',
                    'To increase database size',
                    'To make data retrieval slower',
                ],
                correctAnswer: 0,
                explanation: 'Data normalization is the process of organizing data to reduce redundancy and improve data integrity.',
            },
            {
                id: '16',
                question: 'What does the term "Data Integrity" mean in the context of DBMS?',
                options: [
                    'Ensuring the accuracy and consistency of data',
                    'Storing data in a secure location',
                    'Backing up data periodically',
                    'None of the above',
                ],
                correctAnswer: 0,
                explanation: 'Data integrity ensures the accuracy, consistency, and reliability of data throughout its lifecycle.',
            },
            {
                id: '17',
                question: 'Which of the following DBMS models is known for its tree-like structure?',
                options: [
                    'Network Model',
                    'Relational Model',
                    'Hierarchical Model',
                    'Object-Oriented Model',
                ],
                correctAnswer: 2,
                explanation: 'The Hierarchical Model organizes data in a tree-like structure with parent-child relationships between records.',
            },
            {
                id: '18',
                question: 'In which of the following cases is OLAP used?',
                options: [
                    'Real-time transaction processing',
                    'Generating reports and performing complex queries',
                    'Tracking inventory in real-time',
                    'None of the above',
                ],
                correctAnswer: 1,
                explanation: 'OLAP is used for generating reports and performing complex queries across large datasets, like in business intelligence and analytics.',
            },
            {
                id: '19',
                question: 'What type of DBMS supports both structured and unstructured data?',
                options: [
                    'Relational DBMS',
                    'Object-Oriented DBMS',
                    'NoSQL DBMS',
                    'Hierarchical DBMS',
                ],
                correctAnswer: 2,
                explanation: 'NoSQL DBMS supports both structured and unstructured data, making it suitable for handling a variety of data types like documents, key-value pairs, or graphs.',
            },
            {
                id: '20',
                question: 'Which of the following is an example of a DBMS that supports complex, large-scale data analytics?',
                options: [
                    'MySQL',
                    'Oracle DBMS',
                    'MongoDB',
                    'PostgreSQL',
                ],
                correctAnswer: 1,
                explanation: 'Oracle DBMS is widely used for large-scale data analytics and enterprise applications, offering extensive support for complex queries, transactions, and analytics.',
            }
        ]
    };
}

export default createKnowledgeCheckSubtopic;