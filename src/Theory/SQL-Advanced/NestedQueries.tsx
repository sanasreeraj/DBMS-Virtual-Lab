import { Subtopic } from './dbms';

function createSQLNestedQueriesSubtopic(): Subtopic {
  return {
    id: "sql-nested-queries",
    title: "Nested and Correlated Nested Queries",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Nested and Correlated Nested Queries</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Nested Queries?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">nested query</strong> (or subquery) is a query inside another query. The inner query executes first, and the outer query uses its result.
            </p>
          </div>
        </div>

        <!-- Nested Query Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Find Employees Earning More Than the Average Salary</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query finds employees whose salary is greater than the average salary:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name, salary  
FROM employees  
WHERE salary > (SELECT AVG(salary) FROM employees);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The inner query calculates the average salary of all employees.</li>
                <li>The outer query retrieves employees whose salary is greater than this average.</li>
              </ul>
            </p>
          </div>
        </div>

        <!-- Correlated Nested Query Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Correlated Nested Queries?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">correlated nested query</strong> is a subquery that depends on the outer query. It is executed once for each row processed by the outer query.
            </p>
          </div>
        </div>

        <!-- Correlated Nested Query Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Find Employees Earning More Than Their Department's Average Salary</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query finds employees whose salary is higher than the average salary of their department:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT e1.name, e1.salary, e1.department  
FROM employees e1  
WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e1.department = e2.department);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The inner query recalculates the average salary for each department using the outer query’s value.</li>
                <li>The outer query retrieves employees whose salary is greater than their department's average salary.</li>
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
              <li>Nested queries are executed first, and their results are used by the outer query.</li>
              <li>Correlated nested queries depend on the outer query and are executed once per row.</li>
              <li>Nested queries are useful for filtering, calculations, and comparisons within a single query.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLNestedQueriesSubtopic;