import { Subtopic } from './dbms';

function createSQLIntroductionSubtopic(): Subtopic {
  return {
    id: "sql-introduction",
    title: "Introduction to SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Introduction to SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is SQL?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">SQL (Structured Query Language)</strong> is a standard language used to manage and manipulate relational databases. It allows you to store, retrieve, update, and delete data efficiently.
            </p>
          </div>
        </div>

        <!-- Creating a Table Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Creating a Table</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To create a table in SQL, you use the <strong>CREATE TABLE</strong> statement. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This creates a table called <strong>Students</strong> with three columns: <strong>id</strong>, <strong>name</strong>, and <strong>age</strong>.
            </p>
          </div>
        </div>

        <!-- Inserting Data Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Inserting Data</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To add data to a table, you use the <strong>INSERT INTO</strong> statement. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
INSERT INTO Students (id, name, age) VALUES (1, 'John', 20);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This adds a new student with <strong>id = 1</strong>, <strong>name = 'John'</strong>, and <strong>age = 20</strong> to the <strong>Students</strong> table.
            </p>
          </div>
        </div>

        <!-- Retrieving Data Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Retrieving Data</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To retrieve data from a table, you use the <strong>SELECT</strong> statement. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT * FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This fetches all records from the <strong>Students</strong> table.
            </p>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>SQL is the standard language for interacting with relational databases.</li>
              <li>It provides powerful commands for creating, modifying, and querying data.</li>
              <li>Understanding SQL is essential for database management and application development.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLIntroductionSubtopic;