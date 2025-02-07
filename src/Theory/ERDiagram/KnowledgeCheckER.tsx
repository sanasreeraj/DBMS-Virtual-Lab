import { Subtopic} from './dbms';

function createERModelKnowledgeCheck(): Subtopic {
    return {
        id: 'er-model-knowledge-check',
        title: 'Knowledge Check',
        content: `
        <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: "What does an ER model primarily represent?",
                options: [
                    "Logical structure of a database",
                    "Programming logic of an application",
                    "Physical storage details of data",
                    "The user interface of a database"
                ],
                correctAnswer: 0,
                explanation: "An ER model is used to represent the logical structure of a database, defining entities, attributes, and relationships."
            },
            {
                id: '2',
                question: "Which of the following is an example of a strong entity?",
                options: [
                    "Employee",
                    "Order Details",
                    "Dependent",
                    "Invoice Line Items"
                ],
                correctAnswer: 0,
                explanation: "A strong entity can exist independently in a database, such as Employee."
            },
            {
                id: '3',
                question: "What is a weak entity?",
                options: [
                    "An entity that cannot exist without an associated strong entity",
                    "An entity with a primary key",
                    "An entity that has no attributes",
                    "An entity that represents a relationship"
                ],
                correctAnswer: 0,
                explanation: "A weak entity depends on a strong entity for its existence and has a partial key."
            },
            {
                id: '4',
                question: "What is the purpose of a primary key in an entity?",
                options: [
                    "To uniquely identify each instance of an entity",
                    "To store redundant data",
                    "To create a relationship with another entity",
                    "To represent a weak entity"
                ],
                correctAnswer: 0,
                explanation: "A primary key uniquely identifies each record in an entity set."
            },
            {
                id: '5',
                question: "Which of the following is NOT a type of attribute in an ER model?",
                options: [
                    "Derived attribute",
                    "Multivalued attribute",
                    "Composite attribute",
                    "Foreign attribute"
                ],
                correctAnswer: 3,
                explanation: "The term 'Foreign attribute' does not exist in the ER model. The correct term is 'Foreign Key' in relational databases."
            },
            {
                id: '6',
                question: "Which type of attribute can be derived from other attributes?",
                options: [
                    "Simple attribute",
                    "Derived attribute",
                    "Multivalued attribute",
                    "Composite attribute"
                ],
                correctAnswer: 1,
                explanation: "A derived attribute is computed from other attributes, such as Age derived from Date of Birth."
            },
            {
                id: '7',
                question: "In an ER diagram, how is a relationship represented?",
                options: [
                    "By a rectangle",
                    "By a diamond",
                    "By an oval",
                    "By a triangle"
                ],
                correctAnswer: 1,
                explanation: "Relationships in an ER diagram are represented using a diamond shape."
            },
            {
                id: '8',
                question: "Which of the following is an example of a many-to-one relationship?",
                options: [
                    "A student enrolls in multiple courses",
                    "Multiple employees working in one department",
                    "A book having multiple authors",
                    "Multiple suppliers supplying to multiple stores"
                ],
                correctAnswer: 1,
                explanation: "Many employees belong to one department, which is a many-to-one relationship."
            },
            {
                id: '9',
                question: "Which type of relationship is depicted when an entity is related to itself?",
                options: [
                    "Binary relationship",
                    "Recursive relationship",
                    "Ternary relationship",
                    "Weak relationship"
                ],
                correctAnswer: 1,
                explanation: "A recursive relationship occurs when an entity has a relationship with itself."
            },
            {
                id: '10',
                question: "What is cardinality in an ER model?",
                options: [
                    "The number of attributes in an entity",
                    "The number of relationships an entity can participate in",
                    "The number of tuples in a relation",
                    "The number of instances of an entity related to another entity"
                ],
                correctAnswer: 3,
                explanation: "Cardinality defines the number of instances of one entity that can be associated with instances of another entity."
            }
        ]
    };
}

export default createERModelKnowledgeCheck;
