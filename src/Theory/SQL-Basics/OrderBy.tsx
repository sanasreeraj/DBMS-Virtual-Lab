import { Subtopic } from './dbms';

function createSQLOrderBySubtopic(): Subtopic {
  return {
    id: "sql-order-by",
    title: "ORDER BY Clause in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">ORDER BY Clause in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is ORDER BY?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">ORDER BY</strong> clause is used to sort the result set of a query in ascending (ASC) or descending (DESC) order based on one or more columns.
            </p>
          </div>
        </div>

        <!-- Example: Sort by Age (Ascending) -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Sort by Age (Ascending)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query sorts students by their age in ascending order (smallest to largest):
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT * FROM Students ORDER BY age ASC;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This query will display the students starting from the youngest to the oldest.
            </p>
          </div>
        </div>

        <!-- Example: Sort by Name (Descending) -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Sort by Name (Descending)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query sorts students by their name in descending order (Z to A):
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT * FROM Students ORDER BY name DESC;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This query will display the students starting from the last name alphabetically to the first.
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
              <li>The <strong>ORDER BY</strong> clause is used to sort query results.</li>
              <li>Results can be sorted in ascending (<strong>ASC</strong>) or descending (<strong>DESC</strong>) order.</li>
              <li>Multiple columns can be used for sorting by separating them with commas.</li>
              <li>If no order is specified, the default is ascending (<strong>ASC</strong>).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLOrderBySubtopic;