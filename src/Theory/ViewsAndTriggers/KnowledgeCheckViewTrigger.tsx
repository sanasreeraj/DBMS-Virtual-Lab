import { Subtopic } from './dbms';

function createKnowledgeCheckViewsTriggers(): Subtopic {
    return {
        id: 'knowledge-check-views-triggers',
        title: 'Knowledge Check',
        content: `
            <div class="space-y-4">
            <p class="text-gray-800 text-2xl font-bold">Test your understanding of the topic with these 20 multiple-choice questions.</p>
        </div>`,
        quiz: [
            {
                id: '1',
                question: 'What is a view in SQL?',
                options: [
                    'A temporary table',
                    'A virtual table based on a query',
                    'A stored procedure',
                    'A physical table'
                ],
                correctAnswer: 1,
                explanation: 'A view is a virtual table that is created based on the result of a query.'
            },
            {
                id: '2',
                question: 'Which SQL statement is used to create a view?',
                options: [
                    'CREATE TABLE',
                    'CREATE VIEW',
                    'ALTER VIEW',
                    'SELECT VIEW'
                ],
                correctAnswer: 1,
                explanation: 'The CREATE VIEW statement is used to define a view.'
            },
            {
                id: '3',
                question: 'Can a view be updated in SQL?',
                options: [
                    'Yes, always',
                    'No, never',
                    'Yes, if certain conditions are met',
                    'Only in MySQL'
                ],
                correctAnswer: 2,
                explanation: 'A view can be updated if it follows certain rules, such as having no aggregate functions or joins.'
            },
            {
                id: '4',
                question: 'Which of the following is an advantage of using views?',
                options: [
                    'Increased security',
                    'Improved performance',
                    'Reduced storage space',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'Views enhance security, can improve performance in some cases, and do not consume additional storage space.'
            },
            {
                id: '5',
                question: 'What happens when you drop a view?',
                options: [
                    'The underlying table is also deleted',
                    'Only the view is removed',
                    'All associated triggers are removed',
                    'The database gets corrupted'
                ],
                correctAnswer: 1,
                explanation: 'Dropping a view removes only the view definition, not the underlying tables.'
            },
            {
                id: '6',
                question: 'What is a trigger in SQL?',
                options: [
                    'A scheduled task',
                    'A function executed before or after a database event',
                    'A type of view',
                    'A temporary table'
                ],
                correctAnswer: 1,
                explanation: 'A trigger is a special procedure that runs automatically in response to specific database events.'
            },
            {
                id: '7',
                question: 'Which SQL statement is used to create a trigger?',
                options: [
                    'CREATE PROCEDURE',
                    'CREATE FUNCTION',
                    'CREATE TRIGGER',
                    'CREATE EVENT'
                ],
                correctAnswer: 2,
                explanation: 'The CREATE TRIGGER statement is used to define a trigger.'
            },
            {
                id: '8',
                question: 'Which of the following is NOT a valid type of trigger?',
                options: [
                    'BEFORE INSERT',
                    'AFTER DELETE',
                    'ON UPDATE',
                    'BEFORE SELECT'
                ],
                correctAnswer: 3,
                explanation: 'Triggers cannot be set to execute before a SELECT operation.'
            },
            {
                id: '9',
                question: 'Triggers are most commonly used for?',
                options: [
                    'Enforcing business rules',
                    'Data security',
                    'Logging changes',
                    'All of the above'
                ],
                correctAnswer: 3,
                explanation: 'Triggers can be used for enforcing rules, security measures, and logging database changes.'
            },
            {
                id: '10',
                question: 'Which of the following statements about triggers is true?',
                options: [
                    'Triggers execute automatically',
                    'Triggers must be manually invoked',
                    'Triggers can be created only on views',
                    'Triggers are only available in MySQL'
                ],
                correctAnswer: 0,
                explanation: 'Triggers execute automatically in response to specific database events.'
            },
            {
                id: '11',
                question: 'Which clause is used to specify when a trigger should fire?',
                options: [
                    'ON',
                    'BEFORE or AFTER',
                    'WHEN',
                    'EXECUTE'
                ],
                correctAnswer: 1,
                explanation: 'Triggers can be defined to execute BEFORE or AFTER a specified event.'
            },
            {
                id: '12',
                question: 'What is the purpose of the OLD and NEW keywords in triggers?',
                options: [
                    'To store previous and updated row values',
                    'To rename tables',
                    'To define user roles',
                    'To create new triggers'
                ],
                correctAnswer: 0,
                explanation: 'OLD refers to the existing row values, while NEW represents the new values in a trigger operation.'
            },
            {
                id: '13',
                question: 'Which SQL command is used to delete a trigger?',
                options: [
                    'DROP TRIGGER',
                    'DELETE TRIGGER',
                    'REMOVE TRIGGER',
                    'ALTER TRIGGER'
                ],
                correctAnswer: 0,
                explanation: 'DROP TRIGGER is used to remove a trigger from the database.'
            },
            {
                id: '14',
                question: 'Can a trigger call another trigger?',
                options: [
                    'Yes, always',
                    'No, never',
                    'Yes, if cascading is enabled',
                    'Only in PostgreSQL'
                ],
                correctAnswer: 2,
                explanation: 'Triggers can call other triggers if cascading execution is allowed.'
            },
            {
                id: '15',
                question: 'What happens if a trigger contains an error?',
                options: [
                    'The transaction is rolled back',
                    'The error is ignored',
                    'The trigger continues executing',
                    'The database crashes'
                ],
                correctAnswer: 0,
                explanation: 'An error in a trigger usually results in rolling back the transaction to maintain data integrity.'
            }
        ]
    };
}

export default createKnowledgeCheckViewsTriggers;
