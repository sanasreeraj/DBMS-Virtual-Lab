import { Subtopic } from './dbms';

function createSQLExistsNotExistsSubtopic(): Subtopic {
  return {
    id: "sql-exists-not-exists",
    title: "EXISTS & NOT EXISTS Operators in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">EXISTS & NOT EXISTS Operators in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are EXISTS & NOT EXISTS?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">EXISTS</strong> and <strong class="text-blue-600">NOT EXISTS</strong> are SQL operators used to check whether a subquery returns any rows. They are often used in conditional queries to filter results based on the existence or absence of related data.
            </p>
          </div>
        </div>

        <!-- EXISTS Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">EXISTS Operator</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>EXISTS</strong> operator returns <strong>true</strong> if the subquery returns at least one row. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name  
FROM employees e  
WHERE EXISTS (SELECT 1 FROM employees m WHERE m.manager_id = e.id);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The subquery checks if there are any employees whose <strong>manager_id</strong> matches the <strong>id</strong> of the employee in the outer query.</li>
                <li>If the subquery returns at least one row, the employee is included in the result.</li>
              </ul>
            </p>
          </div>
        </div>

        <!-- NOT EXISTS Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">NOT EXISTS Operator</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>NOT EXISTS</strong> operator returns <strong>true</strong> if the subquery returns <strong>no rows</strong>. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name  
FROM employees e  
WHERE NOT EXISTS (SELECT 1 FROM employees m WHERE m.manager_id = e.id);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The subquery checks if there are any employees whose <strong>manager_id</strong> matches the <strong>id</strong> of the employee in the outer query.</li>
                <li>If the subquery returns no rows, the employee is included in the result.</li>
              </ul>
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
              <li><strong>EXISTS</strong> checks if the subquery returns at least one row.</li>
              <li><strong>NOT EXISTS</strong> checks if the subquery returns no rows.</li>
              <li>These operators are useful for filtering results based on the existence or absence of related data in a subquery.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLExistsNotExistsSubtopic;