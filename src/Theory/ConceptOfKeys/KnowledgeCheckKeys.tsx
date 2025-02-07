import { Subtopic} from './dbms';

function createKnowledgeCheckSubtopicKeys(): Subtopic {
    return {
        id: 'knowledge-check-keys',
        title: 'Knowledge Check',
        content: `<div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: "What is a candidate key?",
                options: [
                    "A minimal set of attributes that uniquely identify a record",
                    "A set of attributes that may contain additional attributes",
                    "A key that can contain null values",
                    "A key used only for indexing"
                ],
                correctAnswer: 0,
                explanation: "A candidate key is a minimal set of attributes that uniquely identify a record."
            },
            {
                id: '2',
                question: "What is a foreign key?",
                options: [
                    "A key that links to the primary key of another table",
                    "A key that uniquely identifies a record",
                    "A key used for indexing",
                    "A key that can contain null values"
                ],
                correctAnswer: 0,
                explanation: "A foreign key is a field in one table that links to the primary key of another table."
            },
            {
                id: '3',
                question: "Which of the following can be a primary key?",
                options: [
                    "Any column that contains unique values",

                    "Any column that can contain NULL values",
                    "A column that links to another table",
                    "A column used only for indexing"
                ],
                correctAnswer: 0,
                explanation: "A primary key must contain unique values and cannot have NULL values."
            },
            {
                id: '4',
                question: "What is an alternate key?",
                options: [
                    "A candidate key that is not chosen as the primary key",

                    "A foreign key linking two tables",
                    "A key used for indexing purposes",
                    "A set of attributes that may contain NULL values"
                ],
                correctAnswer: 0,
                explanation: "An alternate key is a candidate key that is not selected as the primary key."
            },
            {
                id: '5',
                question: "Which statement about foreign keys is true?",
                options: [

                    "Foreign keys link tables based on primary keys",
                    "Foreign keys must contain unique values",
                    "Foreign keys can only contain non-null values",
                    "Foreign keys are used only for indexing"
                ],
                correctAnswer: 0,
                explanation: "Foreign keys establish relationships between tables by linking to primary keys."
            },
            {
                id: '6',
                question: "Which of the following is NOT a characteristic of a super key?",
                options: [

                    "It uniquely identifies a record",
                    "It may contain unnecessary attributes",
                    "It must contain only unique attributes",
                    "It can contain more attributes than necessary"
                ],
                correctAnswer: 2,
                explanation: "A super key may include unnecessary attributes but does not need to contain only unique attributes."
            },
            {
                id: '7',
                question: "What does a functional dependency signify?",
                options: [

                    "One attribute determines the value of another",
                    "A column is used to link two tables",
                    "A column must contain unique values",
                    "Two attributes are required for a primary key"
                ],
                correctAnswer: 0,
                explanation: "A functional dependency means that one attribute determines the value of another."
            },
            {
                id: '8',
                question: "What is an example of a foreign key?",
                options: [

                    "CustomerID in Orders table referencing CustomerID in Customers table",
                    "Email in a Users table",
                    "StudentID in Students table",
                    "BookID in Books table"
                ],
                correctAnswer: 0,
                explanation: "CustomerID in Orders table referencing CustomerID in Customers table is a foreign key relationship."
            },
            {
                id: '9',
                question: "Which of the following is true about a primary key?",
                options: [

                    "There can only be one primary key per table",
                    "A primary key can contain NULL values",
                    "A primary key is used for indexing only",
                    "A primary key must contain redundant attributes"
                ],
                correctAnswer: 0,
                explanation: "A table can only have one primary key, which uniquely identifies each record."
            },
            {
                id: '10',
                question: "What is the main purpose of a super key?",
                options: [
                    "To uniquely identify records in a table",

                    "To establish relationships between tables",
                    "To enforce referential integrity",
                    "To normalize a table"
                ],
                correctAnswer: 0,
                explanation: "A super key is used to uniquely identify records in a table."
            },
            {
                id: '11',
                question: "What is the attribute closure of a set of attributes X?",
                options: [
                    "The set of attributes functionally determined by X",

                    "The primary key of a table",
                    "The set of attributes that violate normalization rules",
                    "The set of redundant attributes in a table"
                ],
                correctAnswer: 0,
                explanation: "The attribute closure of X is the set of all attributes functionally determined by X."
            },
            {
                id: '12',
                question: "Which statement about candidate keys is true?",
                options: [
                    "A candidate key is the minimal set of attributes required to uniquely identify a record",

                    "A candidate key can contain redundant attributes",
                    "A candidate key can contain NULL values",
                    "A candidate key is always a foreign key"
                ],
                correctAnswer: 0,
                explanation: "A candidate key must be the minimal set of attributes needed to uniquely identify a record."
            },
            {
                id: '13',
                question: "Which of the following is true about functional dependencies?",
                options: [
                    "Functional dependencies are used to establish referential integrity",

                    "Functional dependencies help with database normalization",
                    "Functional dependencies link tables based on primary keys",
                    "Functional dependencies always involve a foreign key"
                ],
                correctAnswer: 1,
                explanation: "Functional dependencies are essential for database normalization."
            },
            {
                id: '14',
                question: "Which of the following can be a candidate key?",
                options: [
                    "Any set of attributes that uniquely identify a record",

                    "Any set of attributes that may contain NULL values",
                    "A set of attributes that must contain redundant values",
                    "A set of attributes used only for indexing"
                ],
                correctAnswer: 0,
                explanation: "A candidate key must be a minimal set of attributes that uniquely identify a record."
            },
            {
                id: '15',
                question: "What is a primary key used for in a table?",
                options: [

                    "To uniquely identify each record",
                    "To create relationships between tables",
                    "To index a table for faster searches",
                    "To store non-null values"
                ],
                correctAnswer: 0,
                explanation: "The primary key uniquely identifies each record in a table."
            },
            {
                id: '16',
                question: "Which of the following is NOT a type of key?",
                options: [

                    "Super key",
                    "Alternate key",
                    "Foreign key",
                    "Data key"
                ],
                correctAnswer: 3,
                explanation: "There is no such thing as a 'Data key' in relational database management systems."
            },
            {
                id: '17',
                question: "Which of the following best describes a foreign key?",
                options: [

                    "An attribute that references the primary key of another table",
                    "A column that contains unique values for each record",
                    "A column used for indexing a table",
                    "A key that can contain NULL values"
                ],
                correctAnswer: 0,
                explanation: "A foreign key is an attribute in one table that references the primary key of another table."
            },
            {
                id: "18",
                question: "Which of the following best describes a foreign key?",
                options: [
                  "An attribute that references the primary key of another table",
                  "A column that contains unique values for each record",
                  "A column used for indexing a table",
                  "A key that can contain NULL values"
                ],
                correctAnswer: 0,
                explanation: "A foreign key is an attribute in one table that references the primary key of another table."
              },
              {
                id: "19",
                question: "What is the role of a foreign key in referential integrity?",
                options: [
                  "It links records in one table to records in another",
                  "It uniquely identifies records in a table",
                  "It determines the set of attributes in a candidate key",
                  "It stores non-null values"
                ],
                correctAnswer: 0,
                explanation: "A foreign key ensures referential integrity by linking records in one table to records in another."
              },
              {
                id: "20",
                question: "Which of the following is true about a super key?",
                options: [
                  "A super key uniquely identifies records but can contain unnecessary attributes",
                  "A super key must only contain unique attributes",
                  "A super key is used for establishing relationships between tables",
                  "A super key can only be a primary key"
                ],
                correctAnswer: 0,
                explanation: "A super key uniquely identifies records but may contain unnecessary attributes."
            }
        ]
    };
}


export default createKnowledgeCheckSubtopicKeys;