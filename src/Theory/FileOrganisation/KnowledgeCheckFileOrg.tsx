import { Subtopic } from './dbms';

function createKnowledgeCheckFileOrganizationSubtopic(): Subtopic {
    return {
        id: 'knowledge-check-file-organization',
        title: 'Knowledge Check',
        content: `<div class="space-y-4">
            <p class="text-gray-700  text-2xl font-bold">Test your understanding of File Organization with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'Which of the following file organizations stores records in the order they arrive, without any sorting?',
                options: [
                    'Sequential File Organization',
                    'Heap File Organization',
                    'Hash File Organization',
                    'Clustered File Organization'
                ],
                correctAnswer: 1,
                explanation: 'Heap File Organization stores records in an unordered manner, without sorting.'
            },
            {
                id: '2',
                question: 'Which file organization method is best suited for range-based queries?',
                options: [
                    'Hashing',
                    'Sequential',
                    'Heap',
                    'Clustered'
                ],
                correctAnswer: 1,
                explanation: 'Sequential File Organization is best for range queries because records are stored in sorted order.'
            },
            {
                id: '3',
                question: 'What is the main advantage of hashing file organization?',
                options: [
                    'Efficient range-based searches',
                    'Faster exact-match searches',
                    'Efficient sequential access',
                    'Better compression of data'
                ],
                correctAnswer: 1,
                explanation: 'Hashing allows quick retrieval of records based on key values, making exact-match searches fast.'
            },
            {
                id: '4',
                question: 'Which type of file organization requires a hash function to determine storage location?',
                options: [
                    'Heap',
                    'Sequential',
                    'Hash',
                    'Indexed'
                ],
                correctAnswer: 2,
                explanation: 'Hashing file organization uses a hash function to determine the location of records.'
            },
            {
                id: '5',
                question: 'Which file organization technique stores related records together based on a common attribute?',
                options: [
                    'Clustered',
                    'Heap',
                    'Sequential',
                    'Hash'
                ],
                correctAnswer: 0,
                explanation: 'Clustered File Organization stores related records together for efficient retrieval.'
            },
            {
                id: '6',
                question: 'Which file organization is the slowest for searching a specific record?',
                options: [
                    'Heap',
                    'Hash',
                    'Sequential',
                    'Clustered'
                ],
                correctAnswer: 0,
                explanation: 'Heap File Organization requires scanning the entire file, making searches slow.'
            },
            {
                id: '7',
                question: 'What is the main disadvantage of sequential file organization?',
                options: [
                    'High storage space requirement',
                    'Slow insertion and deletion',
                    'Difficult to implement',
                    'Inefficient for small databases'
                ],
                correctAnswer: 1,
                explanation: 'Sequential file organization is slow for insertions and deletions since records must remain sorted.'
            },
            {
                id: '8',
                question: 'Which type of file organization is most suitable for transaction-processing systems?',
                options: [
                    'Heap',
                    'Sequential',
                    'Hashing',
                    'Clustered'
                ],
                correctAnswer: 2,
                explanation: 'Hashing is used in transaction processing as it allows quick access to records.'
            },
            {
                id: '9',
                question: 'Which of the following file organizations is most efficient for reading large amounts of data sequentially?',
                options: [
                    'Heap',
                    'Hash',
                    'Sequential',
                    'Clustered'
                ],
                correctAnswer: 2,
                explanation: 'Sequential file organization is ideal for reading large datasets efficiently.'
            },
            {
                id: '10',
                question: 'In which file organization are records stored in blocks without any specific order?',
                options: [
                    'Sequential',
                    'Heap',
                    'Hash',
                    'Clustered'
                ],
                correctAnswer: 1,
                explanation: 'Heap file organization stores records in blocks without any order.'
            },
            {
                id: '11',
                question: 'Which file organization technique is best for applications requiring frequent insertions and deletions?',
                options: [
                    'Heap',
                    'Sequential',
                    'Hashing',
                    'Indexed'
                ],
                correctAnswer: 0,
                explanation: 'Heap organization allows quick insertions and deletions as it does not require maintaining any order.'
            },
            {
                id: '12',
                question: 'Which file organization uses a primary key for efficient retrieval of records?',
                options: [
                    'Heap',
                    'Sequential',
                    'Primary Indexing',
                    'Clustered'
                ],
                correctAnswer: 2,
                explanation: 'Primary Indexing is used for efficient retrieval of records based on primary keys.'
            },
            {
                id: '13',
                question: 'What is the main advantage of using a clustered file organization?',
                options: [
                    'Fast retrieval for related records',
                    'Easy implementation',
                    'Low memory requirement',
                    'Better security'
                ],
                correctAnswer: 0,
                explanation: 'Clustered file organization groups related records together, improving retrieval speed.'
            },
            {
                id: '14',
                question: 'Which of the following file organizations is most suitable for databases with frequent updates?',
                options: [
                    'Sequential',
                    'Heap',
                    'Clustered',
                    'Indexed'
                ],
                correctAnswer: 1,
                explanation: 'Heap file organization is suitable for frequent updates as it does not require sorting.'
            },
            {
                id: '15',
                question: 'Which indexing method stores an index entry for every record in the database?',
                options: [
                    'Sparse Index',
                    'Dense Index',
                    'Primary Index',
                    'Clustered Index'
                ],
                correctAnswer: 1,
                explanation: 'Dense Index stores an entry for each record, making lookups fast but requiring more space.'
            },
            {
                id: '16',
                question: 'Which file organization technique works best when records are frequently accessed together?',
                options: [
                    'Heap',
                    'Sequential',
                    'Clustered',
                    'Hashing'
                ],
                correctAnswer: 2,
                explanation: 'Clustered file organization is optimized for records that are frequently accessed together.'
            },
            {
                id: '17',
                question: 'Which file organization is commonly used for log files?',
                options: [
                    'Heap',
                    'Sequential',
                    'Hash',
                    'Clustered'
                ],
                correctAnswer: 1,
                explanation: 'Sequential file organization is used for log files because logs are written in a time-ordered manner.'
            },
            {
                id: '18',
                question: 'Which file organization technique requires less storage space for indexing?',
                options: [
                    'Sparse Indexing',
                    'Dense Indexing',
                    'Clustered Indexing',
                    'Primary Indexing'
                ],
                correctAnswer: 0,
                explanation: 'Sparse Indexing stores fewer entries, making it more space-efficient than Dense Indexing.'
            },
            {
                id: '19',
                question: 'What is the main limitation of hash-based file organization?',
                options: [
                    'Slow exact-match searches',
                    'Poor support for range queries',
                    'Consumes more storage space',
                    'Requires sorting of records'
                ],
                correctAnswer: 1,
                explanation: 'Hashing is not efficient for range queries since data is not stored in a sorted manner.'
            },
            {
                id: '20',
                question: 'Which file organization technique stores records in sorted order for efficient searching?',
                options: [
                    'Heap',
                    'Sequential',
                    'Hashing',
                    'Clustered'
                ],
                correctAnswer: 1,
                explanation: 'Sequential file organization stores records in sorted order, making searching efficient.'
            }
        ]
    };
}

export default createKnowledgeCheckFileOrganizationSubtopic;
