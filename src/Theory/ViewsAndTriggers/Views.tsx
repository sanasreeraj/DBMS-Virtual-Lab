import { Subtopic } from './dbms';

function createSQLViewsSubtopic(): Subtopic {
  return {
    id: "sql-views",
    title: "Views in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Views in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Views?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">View</strong> is like a virtual table in SQL. It does not store data itself but provides a way to look at data from one or more tables in a specific way. Think of it as a saved SQL query that you can use like a table.
            </p>
          </div>
        </div>

        <!-- Why Use Views Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Why Use Views?</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Simplify complex queries</strong> – Instead of writing long queries again and again, create a view and use it like a table.</li>
              <li><strong>Security</strong> – You can hide sensitive columns by only showing necessary ones.</li>
              <li><strong>Data abstraction</strong> – Users can see the required data without knowing table structures.</li>
            </ul>
          </div>
        </div>

        <!-- Example: Creating a View Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Creating a View</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Suppose we have a <strong>Students</strong> table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(5)
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, we want a view that only shows student names and grades:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE VIEW StudentGrades AS
SELECT name, grade FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, we can query the view just like a table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT * FROM StudentGrades;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              It will show:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
name    grade
John    A
Alice   B
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- Updating Data Using Views Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Updating Data Using Views</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If a view is based on a single table and does not have aggregations, you can update data using it:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
UPDATE StudentGrades SET grade = 'A+' WHERE name = 'Alice';
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This will also update the <strong>Students</strong> table.
            </p>
          </div>
        </div>

        <!-- Dropping a View Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Dropping a View</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you don’t need a view anymore:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
DROP VIEW StudentGrades;
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
              <li>Views are virtual tables that do not store data but provide a way to look at data from one or more tables.</li>
              <li>They simplify complex queries, enhance security, and provide data abstraction.</li>
              <li>Views can be updated if they are based on a single table and do not contain aggregations.</li>
              <li>Use <strong>DROP VIEW</strong> to remove a view when it is no longer needed.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLViewsSubtopic;