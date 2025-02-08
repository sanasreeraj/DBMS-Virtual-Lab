import { Subtopic } from './dbms';

function createKnowledgeCheckConcurrencySubtopicKeys(): Subtopic {
    return {
        id: 'knowledge-check-concurrency',
        title: 'Knowledge Check',
        content: `<div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of concurrency control with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: "What is the primary goal of concurrency control in databases?",
                options: [
                    "To ensure data consistency and isolation",
                    "To improve transaction speed",
                    "To allow multiple users to read the same data",
                    "To prevent transactions from accessing the database"
                ],
                correctAnswer: 0,
                explanation: "Concurrency control ensures data consistency and isolation when multiple transactions execute simultaneously."
            },
            {
                id: '2',
                question: "Which of the following is a common concurrency control technique?",
                options: [
                    "Two-phase locking",
                    "Deadlock prevention",
                    "Transaction logging",
                    "Data replication"
                ],
                correctAnswer: 0,
                explanation: "Two-phase locking (2PL) is a widely used concurrency control mechanism."
            },
            {
                id: '3',
                question: "What is a lost update problem?",
                options: [
                    "When two transactions update the same data and one update is lost",
                    "When a transaction is rolled back",
                    "When transactions are serialized",
                    "When transactions wait indefinitely"
                ],
                correctAnswer: 0,
                explanation: "The lost update problem occurs when two transactions update the same data, but one update is overwritten."
            },
            {
                id: '4',
                question: "Which type of lock allows multiple transactions to read a resource but prevents writing?",
                options: [
                    "Shared lock",
                    "Exclusive lock",
                    "Deadlock lock",
                    "Phantom lock"
                ],
                correctAnswer: 0,
                explanation: "A shared lock allows multiple transactions to read but prevents write operations."
            },
            {
                id: '5',
                question: "What is a deadlock in concurrency control?",
                options: [
                    "A situation where two or more transactions wait indefinitely for each other",
                    "A technique to improve database speed",
                    "A type of transaction scheduling",
                    "A method to recover lost transactions"
                ],
                correctAnswer: 0,
                explanation: "Deadlock occurs when two or more transactions are waiting for resources held by each other, causing an indefinite wait."
            },
            {
                id: '6',
                question: "Which of the following can help prevent deadlocks?",
                options: [
                    "Using timeout mechanisms",
                    "Ignoring lock conflicts",
                    "Allowing transactions to wait forever",
                    "Using read-only transactions"
                ],
                correctAnswer: 0,
                explanation: "Timeout mechanisms can help detect and resolve deadlocks by terminating transactions that have waited too long."
            },
            {
                id: '7',
                question: "What is a phantom read?",
                options: [
                    "When a transaction reads inconsistent data due to concurrent modifications",
                    "When a transaction reads uncommitted data",
                    "When a transaction finds a new row that was inserted by another transaction after its initial read",
                    "When a transaction cannot read a locked row"
                ],
                correctAnswer: 2,
                explanation: "A phantom read occurs when a transaction sees new rows added by another transaction after its initial read."
            },
            {
                id: '8',
                question: "Which of the following ensures strict serializability?",
                options: [
                    "Two-phase locking",
                    "Timestamp ordering",
                    "Optimistic concurrency control",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "All of these techniques aim to ensure strict serializability in transactions."
            },
            {
                id: '9',
                question: "Which isolation level prevents dirty reads but allows non-repeatable reads?",
                options: [
                    "Read Committed",
                    "Read Uncommitted",
                    "Serializable",
                    "Repeatable Read"
                ],
                correctAnswer: 0,
                explanation: "Read Committed prevents dirty reads but allows non-repeatable reads."
            },
            {
                id: '10',
                question: "Which of the following is NOT an isolation level?",
                options: [
                    "Read Committed",
                    "Read Uncommitted",
                    "Transaction Safe",
                    "Serializable"
                ],
                correctAnswer: 2,
                explanation: "Transaction Safe is not a valid isolation level."
            }
        ]
    };
}

export default createKnowledgeCheckConcurrencySubtopicKeys;
