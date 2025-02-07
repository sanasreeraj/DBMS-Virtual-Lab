import { Subtopic } from './dbms';

function createSQLAggregateFunctionsSubtopic(): Subtopic {
  return {
    id: "sql-aggregate-functions",
    title: "Aggregate Functions",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Aggregate Functions in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Common Aggregate Functions</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong class="text-blue-600">COUNT()</strong>: Counts the number of rows</li>
              <li><strong class="text-blue-600">SUM()</strong>: Adds up values in a column</li>
              <li><strong class="text-blue-600">AVG()</strong>: Calculates the average value</li>
              <li><strong class="text-blue-600">MAX()</strong>: Finds the highest value</li>
              <li><strong class="text-blue-600">MIN()</strong>: Finds the lowest value</li>
            </ul>
          </div>
        </div>

        <!-- COUNT Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">COUNT Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Count total number of students:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT COUNT(*) FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This returns the total number of students in the table.
            </p>
          </div>
        </div>

        <!-- SUM Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">SUM Example</h3>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT SUM(age) FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This calculates the sum of all students' ages.
            </p>
          </div>
        </div>

        <!-- Other Functions Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Other Aggregate Examples</h3>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
-- Calculate average age
SELECT AVG(age) FROM Students;

-- Find highest grade
SELECT MAX(grade) FROM Students;

-- Find lowest score
SELECT MIN(score) FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              These functions help analyze data across entire columns.
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
              <li>Aggregate functions operate on sets of rows</li>
              <li>They can be used with GROUP BY for detailed analysis</li>
              <li>NULL values are typically ignored in calculations</li>
              <li>They can be combined with WHERE clauses for filtered results</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLAggregateFunctionsSubtopic;