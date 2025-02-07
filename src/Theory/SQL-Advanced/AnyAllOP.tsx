import { Subtopic } from './dbms';

function createSQLAnyAllOperatorsSubtopic(): Subtopic {
  return {
    id: "sql-any-all-operators",
    title: "ANY & ALL Operators in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">ANY & ALL Operators in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are ANY & ALL Operators?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">ANY</strong> and <strong class="text-blue-600">ALL</strong> are SQL operators used to compare a value to a set of values returned by a subquery. They are often used in conjunction with comparison operators like <strong>></strong>, <strong><</strong>, <strong>=</strong>, etc.
            </p>
          </div>
        </div>

        <!-- ANY Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">ANY Operator</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>ANY</strong> operator returns <strong>true</strong> if the condition is satisfied for <strong>at least one</strong> value in the subquery result. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name, salary  
FROM employees  
WHERE salary > ANY (SELECT salary FROM employees WHERE department = 'HR');
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The inner query fetches the salaries of employees in the <strong>HR</strong> department.</li>
                <li>The outer query selects employees whose salary is greater than <strong>at least one</strong> of the salaries fetched by the inner query.</li>
              </ul>
            </p>
          </div>
        </div>

        <!-- ALL Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">ALL Operator</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>ALL</strong> operator returns <strong>true</strong> only if the condition is satisfied for <strong>all</strong> values in the subquery result. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name, salary  
FROM employees  
WHERE salary > ALL (SELECT salary FROM employees WHERE department = 'HR');
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The inner query fetches the salaries of employees in the <strong>HR</strong> department.</li>
                <li>The outer query selects employees whose salary is greater than <strong>all</strong> of the salaries fetched by the inner query.</li>
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
              <li><strong>ANY</strong> checks if the condition is true for <strong>at least one</strong> value in the subquery result.</li>
              <li><strong>ALL</strong> checks if the condition is true for <strong>all</strong> values in the subquery result.</li>
              <li>These operators are useful for comparing a value against a set of values returned by a subquery.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLAnyAllOperatorsSubtopic;