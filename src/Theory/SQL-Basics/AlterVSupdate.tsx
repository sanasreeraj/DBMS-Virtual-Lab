import { Subtopic } from './dbms';

function createSQLAlterUpdateSubtopic(): Subtopic {
    return {
      id: "sql-alter-update",
      title: "ALTER vs UPDATE",
      content: `
        <div class="space-y-6 max-w-4xl mx-auto p-6">
          <!-- Header Section -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <div class="flex items-center space-x-3">
              <h2 class="text-2xl font-bold">ALTER vs UPDATE in SQL</h2>
            </div>
          </div>
  
          <!-- Definition Section -->
          <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
            <div class="p-6">
              <div class="flex items-center space-x-3 mb-4">
                <h3 class="text-xl font-bold text-blue-600">Key Differences</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Understanding the difference between ALTER and UPDATE is crucial for database management:
              </p>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong class="text-blue-600">ALTER</strong> is used to modify the table structure (schema)</li>
                <li><strong class="text-blue-600">UPDATE</strong> is used to modify the data within the table</li>
              </ul>
            </div>
          </div>
  
          <!-- ALTER Example Section -->
          <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
            <div class="p-6">
              <div class="flex items-center space-x-3 mb-4">
                <h3 class="text-xl font-bold text-blue-600">ALTER TABLE Examples</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Here are common ways to use the ALTER TABLE command:
              </p>
              <div class="bg-blue-50 rounded-lg p-4">
                <pre class="text-gray-700">
                  <code>
  -- Adding a new column
  ALTER TABLE Students ADD COLUMN grade VARCHAR(5);
  
  -- Modifying a column
  ALTER TABLE Students MODIFY COLUMN name VARCHAR(100);
  
  -- Dropping a column
  ALTER TABLE Students DROP COLUMN grade;
                  </code>
                </pre>
              </div>
              <p class="text-gray-700 leading-relaxed mt-4">
                These commands modify the table structure without affecting the existing data.
              </p>
            </div>
          </div>
  
          <!-- UPDATE Example Section -->
          <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
            <div class="p-6">
              <div class="flex items-center space-x-3 mb-4">
                <h3 class="text-xl font-bold text-blue-600">UPDATE Examples</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Here are common ways to use the UPDATE command:
              </p>
              <div class="bg-blue-50 rounded-lg p-4">
                <pre class="text-gray-700">
                  <code>
  -- Update a single record
  UPDATE Students SET age = 21 WHERE id = 1;
  
  -- Update multiple columns
  UPDATE Students SET age = 22, grade = 'A' WHERE name = 'John';
  
  -- Update all records
  UPDATE Students SET status = 'Active';
                  </code>
                </pre>
              </div>
              <p class="text-gray-700 leading-relaxed mt-4">
                These commands modify the data within the table without changing its structure.
              </p>
            </div>
          </div>
  
          <!-- Best Practices Section -->
          <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
            <div class="p-6">
              <div class="flex items-center space-x-3 mb-4">
                <h3 class="text-xl font-bold text-purple-600">Best Practices</h3>
              </div>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Always backup your database before using ALTER TABLE</li>
                <li>Use WHERE clause with UPDATE to avoid unintended changes</li>
                <li>Test ALTER and UPDATE commands on a development database first</li>
                <li>Consider the impact on existing data and applications</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    };
  }
  
  export default createSQLAlterUpdateSubtopic;