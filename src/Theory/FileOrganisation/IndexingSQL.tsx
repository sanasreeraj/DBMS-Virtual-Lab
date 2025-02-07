import { Subtopic } from './dbms';

function createSQLIndexingSubtopic(): Subtopic {
  return {
    id: "sql-indexing",
    title: "Indexing in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Indexing in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Indexing?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Indexing</strong> is a database optimization technique used to speed up data retrieval operations. It works similarly to an index in a book, allowing the database to find rows quickly without scanning the entire table.
            </p>
          </div>
        </div>

        <!-- Why Use Indexing Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Why Use Indexing?</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Faster queries</strong> – Indexes allow the database to locate and retrieve data much faster.</li>
              <li><strong>Efficient searching</strong> – Reduces the need for full table scans, especially in large tables.</li>
              <li><strong>Improved performance</strong> – Speeds up <strong>SELECT</strong>, <strong>WHERE</strong>, <strong>JOIN</strong>, and <strong>ORDER BY</strong> operations.</li>
            </ul>
          </div>
        </div>

        <!-- Example: Creating an Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Creating an Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Suppose we have a <strong>Customers</strong> table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              To speed up searches based on the <strong>email</strong> column, we can create an index:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE INDEX idx_email ON Customers(email);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- How It Works Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">How It Works?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              When you create an index on a column, the database creates a separate data structure (like a <strong>B-tree</strong> or <strong>hash table</strong>) that stores the values of the indexed column along with pointers to the corresponding rows in the table.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>B-tree</strong> – Commonly used for range queries and equality searches.</li>
              <li><strong>Hash table</strong> – Ideal for exact match queries.</li>
            </ul>
          </div>
        </div>

        <!-- Testing the Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Testing the Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If we search for a customer by email:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT * FROM Customers WHERE email = 'john.doe@example.com';
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              The database will use the <strong>idx_email</strong> index to quickly locate the row, instead of scanning the entire table.
            </p>
          </div>
        </div>

        <!-- Dropping an Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Dropping an Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you want to remove an index:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
DROP INDEX idx_email ON Customers;
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Indexing improves query performance by creating a quick lookup mechanism for specific columns.</li>
              <li>Indexes are particularly useful for large tables and frequently queried columns.</li>
              <li>Use <strong>CREATE INDEX</strong> to add an index and <strong>DROP INDEX</strong> to remove it.</li>
              <li>Over-indexing can slow down <strong>INSERT</strong>, <strong>UPDATE</strong>, and <strong>DELETE</strong> operations, so use indexes judiciously.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLIndexingSubtopic;