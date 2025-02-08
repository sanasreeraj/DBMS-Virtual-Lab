import { Subtopic } from './dbms';

function createKnowledgeCheckmodeloneSubtopicDBMS(): Subtopic {
    return {

        id: 'knowledge-check12-dbms',
        title: 'Knowledge Check',
        content: `<div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 50 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: "What is a DBMS?",
                options: [
                    "A software that manages databases",
                    "A hardware component for storage",
                    "A programming language",
                    "A type of network protocol"
                ],
                correctAnswer: 0,
                explanation: "A DBMS (Database Management System) is software that manages databases."
            },
            {
                id: '2',
                question: "What is the primary purpose of a DBMS?",
                options: [
                    "To store, retrieve, and manage data efficiently",
                    "To create graphical user interfaces",
                    "To manage computer hardware",
                    "To develop software applications"
                ],
                correctAnswer: 0,
                explanation: "The primary purpose of a DBMS is to store, retrieve, and manage data efficiently."
            },
            {
                id: '3',
                question: "Which of the following is NOT a type of DBMS?",
                options: [
                    "Relational DBMS",
                    "Hierarchical DBMS",
                    "Network DBMS",
                    "Linear DBMS"
                ],
                correctAnswer: 3,
                explanation: "Linear DBMS is not a type of DBMS."
            },
            {
                id: '4',
                question: "What is a relational database?",
                options: [
                    "A database that organizes data into tables",
                    "A database that uses a hierarchical model",
                    "A database that stores data in a single file",
                    "A database that uses a network model"
                ],
                correctAnswer: 0,
                explanation: "A relational database organizes data into tables."
            },
            {
                id: '5',
                question: "What is SQL?",
                options: [
                    "Structured Query Language",
                    "Simple Query Language",
                    "Sequential Query Language",
                    "Standard Query Language"
                ],
                correctAnswer: 0,
                explanation: "SQL stands for Structured Query Language."
            },
            {
                id: '6',
                question: "Which SQL command is used to retrieve data from a database?",
                options: [
                    "SELECT",
                    "INSERT",
                    "UPDATE",
                    "DELETE"
                ],
                correctAnswer: 0,
                explanation: "The SELECT command is used to retrieve data from a database."
            },
            {
                id: '7',
                question: "What is a primary key?",
                options: [
                    "A unique identifier for a record in a table",
                    "A key used for indexing",
                    "A key that can contain NULL values",
                    "A key used for sorting data"
                ],
                correctAnswer: 0,
                explanation: "A primary key is a unique identifier for a record in a table."
            },
            {
                id: '8',
                question: "What is a foreign key?",
                options: [
                    "A key that links to the primary key of another table",
                    "A key that uniquely identifies a record",
                    "A key used for indexing",
                    "A key that can contain NULL values"
                ],
                correctAnswer: 0,
                explanation: "A foreign key is a field in one table that links to the primary key of another table."
            },
            {
                id: '9',
                question: "What is normalization in DBMS?",
                options: [
                    "The process of organizing data to reduce redundancy",
                    "The process of encrypting data",
                    "The process of backing up data",
                    "The process of compressing data"
                ],
                correctAnswer: 0,
                explanation: "Normalization is the process of organizing data to reduce redundancy."
            },
            {
                id: '10',
                question: "Which normal form is achieved when a table has no repeating groups?",
                options: [
                    "First Normal Form (1NF)",
                    "Second Normal Form (2NF)",
                    "Third Normal Form (3NF)",
                    "Boyce-Codd Normal Form (BCNF)"
                ],
                correctAnswer: 0,
                explanation: "First Normal Form (1NF) is achieved when a table has no repeating groups."
            },
            {
                id: '11',
                question: "What is a transaction in DBMS?",
                options: [
                    "A sequence of operations performed as a single logical unit",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A transaction is a sequence of operations performed as a single logical unit."
            },
            {
                id: '12',
                question: "What is ACID in DBMS?",
                options: [
                    "Atomicity, Consistency, Isolation, Durability",
                    "A type of database model",
                    "A type of query language",
                    "A type of index"
                ],
                correctAnswer: 0,
                explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability."
            },
            {
                id: '13',
                question: "What is a view in DBMS?",
                options: [
                    "A virtual table based on the result of a query",
                    "A physical table in the database",
                    "A type of index",
                    "A type of transaction"
                ],
                correctAnswer: 0,
                explanation: "A view is a virtual table based on the result of a query."
            },
            {
                id: '14',
                question: "What is a stored procedure?",
                options: [
                    "A precompiled collection of SQL statements",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A stored procedure is a precompiled collection of SQL statements."
            },
            {
                id: '15',
                question: "What is a trigger in DBMS?",
                options: [
                    "A procedure that is automatically executed in response to an event",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A trigger is a procedure that is automatically executed in response to an event."
            },
            {
                id: '16',
                question: "What is indexing in DBMS?",
                options: [
                    "A technique to speed up data retrieval",
                    "A type of database model",
                    "A type of query language",
                    "A type of transaction"
                ],
                correctAnswer: 0,
                explanation: "Indexing is a technique to speed up data retrieval."
            },
            {
                id: '17',
                question: "What is a clustered index?",
                options: [
                    "An index that determines the physical order of data in a table",
                    "An index that is used for sorting data",
                    "An index that can contain NULL values",
                    "An index that is used for indexing"
                ],
                correctAnswer: 0,
                explanation: "A clustered index determines the physical order of data in a table."
            },
            {
                id: '18',
                question: "What is a non-clustered index?",
                options: [
                    "An index that does not alter the physical order of data",
                    "An index that is used for sorting data",
                    "An index that can contain NULL values",
                    "An index that is used for indexing"
                ],
                correctAnswer: 0,
                explanation: "A non-clustered index does not alter the physical order of data."
            },
            {
                id: '19',
                question: "What is a deadlock in DBMS?",
                options: [
                    "A situation where two or more transactions are waiting indefinitely for one another",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A deadlock is a situation where two or more transactions are waiting indefinitely for one another."
            },
            {
                id: '20',
                question: "What is concurrency control in DBMS?",
                options: [
                    "A mechanism to ensure correct results for concurrent operations",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "Concurrency control ensures correct results for concurrent operations."
            },
            {
                id: '21',
                question: "What is a schema in DBMS?",
                options: [
                    "The structure of the database",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A schema defines the structure of the database."
            },
            {
                id: '22',
                question: "What is a tuple in DBMS?",
                options: [
                    "A row in a table",
                    "A column in a table",
                    "A type of database index",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A tuple is a row in a table."
            },
            {
                id: '23',
                question: "What is an attribute in DBMS?",
                options: [
                    "A column in a table",
                    "A row in a table",
                    "A type of database index",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "An attribute is a column in a table."
            },
            {
                id: '24',
                question: "What is a join in DBMS?",
                options: [
                    "A method to combine rows from two or more tables",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A join combines rows from two or more tables."
            },
            {
                id: '25',
                question: "What is a subquery in DBMS?",
                options: [
                    "A query nested inside another query",
                    "A type of database index",
                    "A backup of the database",
                    "A type of transaction"
                ],
                correctAnswer: 0,
                explanation: "A subquery is a query nested inside another query."
            },
            {
                id: '26',
                question: "What is a cursor in DBMS?",
                options: [
                    "A database object used to retrieve and manipulate data row by row",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A cursor is used to retrieve and manipulate data row by row."
            },
            {
                id: '27',
                question: "What is a database constraint?",
                options: [
                    "A rule enforced on data columns",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A constraint is a rule enforced on data columns."
            },
            {
                id: '28',
                question: "What is a unique constraint?",
                options: [
                    "A constraint that ensures all values in a column are unique",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A unique constraint ensures all values in a column are unique."
            },
            {
                id: '29',
                question: "What is a check constraint?",
                options: [
                    "A constraint that ensures all values in a column satisfy a condition",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A check constraint ensures all values in a column satisfy a condition."
            },
            {
                id: '30',
                question: "What is a default constraint?",
                options: [
                    "A constraint that provides a default value for a column",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A default constraint provides a default value for a column."
            },
            {
                id: '31',
                question: "What is a database trigger?",
                options: [
                    "A procedure that is automatically executed in response to an event",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A trigger is a procedure that is automatically executed in response to an event."
            },
            {
                id: '32',
                question: "What is a database transaction?",
                options: [
                    "A sequence of operations performed as a single logical unit",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A transaction is a sequence of operations performed as a single logical unit."
            },
            {
                id: '33',
                question: "What is a database lock?",
                options: [
                    "A mechanism to control access to data",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A lock is a mechanism to control access to data."
            },
            {
                id: '34',
                question: "What is a database view?",
                options: [
                    "A virtual table based on the result of a query",
                    "A physical table in the database",
                    "A type of index",
                    "A type of transaction"
                ],
                correctAnswer: 0,
                explanation: "A view is a virtual table based on the result of a query."
            },
            {
                id: '35',
                question: "What is a database schema?",
                options: [
                    "The structure of the database",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A schema defines the structure of the database."
            },
            {
                id: '36',
                question: "What is a database index?",
                options: [
                    "A data structure to improve the speed of data retrieval",
                    "A type of database model",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "An index is a data structure to improve the speed of data retrieval."
            },
            {
                id: '37',
                question: "What is a database cursor?",
                options: [
                    "A database object used to retrieve and manipulate data row by row",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A cursor is used to retrieve and manipulate data row by row."
            },
            {
                id: '38',
                question: "What is a database constraint?",
                options: [
                    "A rule enforced on data columns",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A constraint is a rule enforced on data columns."
            },
            {
                id: '39',
                question: "What is a unique constraint?",
                options: [
                    "A constraint that ensures all values in a column are unique",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A unique constraint ensures all values in a column are unique."
            },
            {
                id: '40',
                question: "What is a check constraint?",
                options: [
                    "A constraint that ensures all values in a column satisfy a condition",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A check constraint ensures all values in a column satisfy a condition."
            },
            {
                id: '41',
                question: "What is a default constraint?",
                options: [
                    "A constraint that provides a default value for a column",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A default constraint provides a default value for a column."
            },
            {
                id: '42',
                question: "What is a database trigger?",
                options: [
                    "A procedure that is automatically executed in response to an event",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A trigger is a procedure that is automatically executed in response to an event."
            },
            {
                id: '43',
                question: "What is a database transaction?",
                options: [
                    "A sequence of operations performed as a single logical unit",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A transaction is a sequence of operations performed as a single logical unit."
            },
            {
                id: '44',
                question: "What is a database lock?",
                options: [
                    "A mechanism to control access to data",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A lock is a mechanism to control access to data."
            },
            {
                id: '45',
                question: "What is a database view?",
                options: [
                    "A virtual table based on the result of a query",
                    "A physical table in the database",
                    "A type of index",
                    "A type of transaction"
                ],
                correctAnswer: 0,
                explanation: "A view is a virtual table based on the result of a query."
            },
            {
                id: '46',
                question: "What is a database schema?",
                options: [
                    "The structure of the database",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A schema defines the structure of the database."
            },
            {
                id: '47',
                question: "What is a database index?",
                options: [
                    "A data structure to improve the speed of data retrieval",
                    "A type of database model",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "An index is a data structure to improve the speed of data retrieval."
            },
            {
                id: '48',
                question: "What is a database cursor?",
                options: [
                    "A database object used to retrieve and manipulate data row by row",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A cursor is used to retrieve and manipulate data row by row."
            },
            {
                id: '49',
                question: "What is a database constraint?",
                options: [
                    "A rule enforced on data columns",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A constraint is a rule enforced on data columns."
            },
            {
                id: '50',
                question: "What is a unique constraint?",
                options: [
                    "A constraint that ensures all values in a column are unique",
                    "A type of database index",
                    "A backup of the database",
                    "A type of query"
                ],
                correctAnswer: 0,
                explanation: "A unique constraint ensures all values in a column are unique."
            }
        ]
    };
}

export default createKnowledgeCheckmodeloneSubtopicDBMS;


