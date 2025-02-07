import { Subtopic } from './dbms';

function createKnowledgeCheckBBPlusTreesSubtopic(): Subtopic {
    return {
        id: 'knowledge-check-bbplus-trees',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What is the primary purpose of a B-Tree in a DBMS?',
                options: [
                    'Sorting data',
                    'Storing entire database records',
                    'Indexing and searching efficiently',
                    'Compressing data'
                ],
                correctAnswer: 2,
                explanation: 'B-Trees are used for indexing and efficient searching in databases.'
            },
            {
                id: '2',
                question: 'How many child nodes can a B-Tree node have if the order is 5?',
                options: [
                    '4',
                    '5',
                    '6',
                    'None of the above'
                ],
                correctAnswer: 1,
                explanation: 'A B-Tree of order "m" can have at most "m" children.'
            },
            {
                id: '3',
                question: 'What is the minimum number of children a non-root node can have in a B-Tree of order 4?',
                options: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                correctAnswer: 1,
                explanation: 'A non-root node in a B-Tree must have at least ⌈m/2⌉ children.'
            },
            {
                id: '4',
                question: 'What is a key characteristic of a B+ Tree compared to a B-Tree?',
                options: [
                    'All keys are stored only in leaf nodes',
                    'It supports direct access to data records',
                    'All leaf nodes are linked sequentially',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'B+ Trees store all keys in leaf nodes and link leaf nodes sequentially.'
            },
            {
                id: '5',
                question: 'Which of the following is true for B-Trees but NOT for B+ Trees?',
                options: [
                    'Keys can be found in internal nodes',
                    'All searches must go to the leaf level',
                    'Sequential access is more efficient',
                    'Leaf nodes are linked sequentially'
                ],
                correctAnswer: 0,
                explanation: 'In B-Trees, keys can exist in internal nodes, unlike B+ Trees.'
            },
            {
                id: '6',
                question: 'What is the worst-case time complexity of search in a B-Tree of order m with n keys?',
                options: [
                    'O(n)',
                    'O(m log n)',
                    'O(log n)',
                    'O(log_m n)'
                ],
                correctAnswer: 3,
                explanation: 'B-Trees provide logarithmic search time complexity in base m.'
            },
            {
                id: '7',
                question: 'What happens when a B-Tree node becomes full?',
                options: [
                    'The tree is restructured',
                    'A new node is created',
                    'The node splits into two and the middle key is moved up',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'When a node is full, it splits, and the middle key moves up.'
            },
            {
                id: '8',
                question: 'What is the main advantage of using a B+ Tree for indexing?',
                options: [
                    'Better support for range queries',
                    'Smaller tree height',
                    'More efficient disk access',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'B+ Trees have better range query performance, smaller height, and efficient disk access.'
            },
            {
                id: '9',
                question: 'Which property holds true for both B-Trees and B+ Trees?',
                options: [
                    'Each node can have at most m children',
                    'Leaf nodes store all keys',
                    'Internal nodes do not store data',
                    'Only leaf nodes store pointers to records'
                ],
                correctAnswer: 0,
                explanation: 'Both B-Trees and B+ Trees allow a node to have at most m children.'
            },
            {
                id: '10',
                question: 'What is the maximum number of keys a B+ Tree node can have if the order is m?',
                options: [
                    'm - 1',
                    'm',
                    'm + 1',
                    'None of the above'
                ],
                correctAnswer: 0,
                explanation: 'Each node in a B+ Tree can have at most m - 1 keys.'
            },
            {
                id: '11',
                question: 'Which operation is performed in bulk loading of a B+ Tree?',
                options: [
                    'All keys are inserted one by one',
                    'Keys are sorted first and then inserted efficiently',
                    'All nodes are created at once',
                    'Only root is created initially'
                ],
                correctAnswer: 1,
                explanation: 'Bulk loading sorts keys first and then inserts them efficiently.'
            },
            {
                id: '12',
                question: 'Which join algorithm works best when indexed structures like B+ Trees are used?',
                options: [
                    'Nested Loop Join',
                    'Sort-Merge Join',
                    'Index Nested Loop Join',
                    'Hash Join'
                ],
                correctAnswer: 2,
                explanation: 'Index Nested Loop Join benefits from indexed structures like B+ Trees.'
            },
            {
                id: '13',
                question: 'How is data accessed in a B+ Tree?',
                options: [
                    'From root to leaf',
                    'Randomly from any node',
                    'Using linear search',
                    'Using binary search at each level'
                ],
                correctAnswer: 3,
                explanation: 'Binary search is used at each level of the B+ Tree.'
            },
            {
                id: '14',
                question: 'Why is B+ Tree preferred over B-Tree in databases?',
                options: [
                    'Faster searches',
                    'Better range queries',
                    'Less disk I/O',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'B+ Trees provide faster searches, better range queries, and fewer disk accesses.'
            },
            {
                id: '15',
                question: 'Which of the following is NOT true for a B+ Tree?',
                options: [
                    'Internal nodes contain data records',
                    'Leaf nodes contain all keys',
                    'All leaf nodes are linked',
                    'Supports range queries efficiently'
                ],
                correctAnswer: 0,
                explanation: 'In a B+ Tree, only leaf nodes contain data records.'
            },
        ]
    };
}

export default createKnowledgeCheckBBPlusTreesSubtopic;
