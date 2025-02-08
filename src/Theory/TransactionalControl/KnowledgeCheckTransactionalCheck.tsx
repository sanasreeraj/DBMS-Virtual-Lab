import { Subtopic } from './dbms';

function createKnowledgeCheckTransactionalControl(): Subtopic {
    return {
        id: 'knowledge-check-transactional-control',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'Which of the following is a key feature of a database transaction?',
                options: [
                    'It consists of a single SQL query',
                    'It ensures atomicity, consistency, isolation, and durability',
                    'It only reads data and does not modify it',
                    'It is always executed in parallel with other transactions'
                ],
                correctAnswer: 1,
                explanation: 'A transaction follows ACID properties to ensure reliability in a database system.'
            },
            {
                id: '2',
                question: 'What does the "Atomicity" property of a transaction ensure?',
                options: [
                    'All operations of a transaction are completed, or none are executed',
                    'Data remains consistent before and after a transaction',
                    'Transactions are isolated from each other',
                    'Data is permanently stored after a successful transaction'
                ],
                correctAnswer: 0,
                explanation: 'Atomicity ensures that a transaction is all-or-nothing: either fully executed or completely rolled back.'
            },
            {
                id: '3',
                question: 'Which ACID property ensures that concurrent transactions do not interfere with each other?',
                options: [
                    'Atomicity',
                    'Consistency',
                    'Isolation',
                    'Durability'
                ],
                correctAnswer: 2,
                explanation: 'Isolation ensures that transactions execute independently without affecting each other.'
            },
            {
                id: '4',
                question: 'What does the "Durability" property of a transaction guarantee?',
                options: [
                    'Transactions are stored permanently in the database once committed',
                    'Transactions are executed one at a time',
                    'Transactions always execute in a specific order',
                    'Transactions can be reversed anytime'
                ],
                correctAnswer: 0,
                explanation: 'Durability ensures that once a transaction is committed, it remains permanently stored even in case of a system failure.'
            },
            {
                id: '5',
                question: 'Which type of schedule is considered conflict serializable?',
                options: [
                    'A schedule where transactions are executed sequentially',
                    'A schedule that can be transformed into a serial schedule by swapping non-conflicting operations',
                    'A schedule where transactions are executed in any order',
                    'A schedule that always leads to deadlock'
                ],
                correctAnswer: 1,
                explanation: 'A conflict-serializable schedule can be rearranged into a serial schedule by swapping non-conflicting operations.'
            },
            {
                id: '6',
                question: 'Which of the following is true about a conflict in a transaction schedule?',
                options: [
                    'A conflict occurs when two transactions access the same data item and at least one of them writes',
                    'A conflict occurs when two transactions perform read operations on the same data',
                    'A conflict occurs only when transactions are executed sequentially',
                    'A conflict is only possible in single-user databases'
                ],
                correctAnswer: 0,
                explanation: 'A conflict occurs when one transaction modifies data while another is accessing the same data.'
            },
            {
                id: '7',
                question: 'Which of the following schedules is always conflict serializable?',
                options: [
                    'A schedule with only read operations',
                    'A schedule with no concurrent transactions',
                    'A schedule where conflicting operations occur in different transactions',
                    'A schedule where transactions execute in a specific order but can be reordered without affecting consistency'
                ],
                correctAnswer: 3,
                explanation: 'A schedule is conflict serializable if it can be rearranged into a serial order by swapping non-conflicting operations.'
            },
            {
                id: '8',
                question: 'Which type of schedule preserves the final outcome of transactions but may not be conflict serializable?',
                options: [
                    'Serializable schedule',
                    'View serializable schedule',
                    'Conflict serializable schedule',
                    'Strict schedule'
                ],
                correctAnswer: 1,
                explanation: 'A view serializable schedule ensures the same final state as a serial schedule but may not be conflict serializable.'
            },
            {
                id: '9',
                question: 'Which scheduling technique ensures that transactions are executed in a serializable order?',
                options: [
                    'Two-phase locking (2PL)',
                    'Read uncommitted',
                    'Snapshot isolation',
                    'First come, first served'
                ],
                correctAnswer: 0,
                explanation: 'The two-phase locking protocol ensures serializability by controlling when transactions acquire and release locks.'
            },
            {
                id: '10',
                question: 'What happens when a transaction is rolled back?',
                options: [
                    'All changes made by the transaction are undone',
                    'All changes made by the transaction are permanently saved',
                    'Only the last statement in the transaction is undone',
                    'The transaction continues execution from the last commit point'
                ],
                correctAnswer: 0,
                explanation: 'Rollback undoes all changes made by a transaction and restores the database to its previous state.'
            },
            {
                id: '11',
                question: 'Which of the following is an example of a conflict in a transaction schedule?',
                options: [
                    'Two transactions reading the same data item',
                    'One transaction reading and another writing the same data item',
                    'Two transactions writing different data items',
                    'One transaction reading the database logs'
                ],
                correctAnswer: 1,
                explanation: 'A conflict occurs when two transactions access the same data and at least one of them is a write operation.'
            },
            {
                id: '12',
                question: 'Which property ensures that a transaction moves the database from one consistent state to another?',
                options: [
                    'Atomicity',
                    'Consistency',
                    'Isolation',
                    'Durability'
                ],
                correctAnswer: 1,
                explanation: 'Consistency ensures that database constraints are preserved before and after a transaction.'
            },
            {
                id: '13',
                question: 'Which of the following is NOT an ACID property?',
                options: [
                    'Atomicity',
                    'Consistency',
                    'Integrity',
                    'Durability'
                ],
                correctAnswer: 2,
                explanation: 'Integrity is not an ACID property; it refers to database constraints and rules.'
            },
            {
                id: '14',
                question: 'A transaction schedule where operations are executed in the exact same order as a serial schedule is called:',
                options: [
                    'View serializable schedule',
                    'Conflict serializable schedule',
                    'Strict schedule',
                    'Serializable schedule'
                ],
                correctAnswer: 3,
                explanation: 'A serializable schedule ensures the same results as a serial execution of transactions.'
            },
            {
                id: '15',
                question: 'What is a non-serial schedule?',
                options: [
                    'A schedule where transactions execute one after another',
                    'A schedule where transactions are executed concurrently',
                    'A schedule where transactions are aborted immediately',
                    'A schedule where only one transaction is executed at a time'
                ],
                correctAnswer: 1,
                explanation: 'A non-serial schedule allows multiple transactions to execute concurrently.'
            },
        ]
    };
}

export default createKnowledgeCheckTransactionalControl;
