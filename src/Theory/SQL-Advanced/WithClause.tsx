import { Subtopic } from './dbms';

function createSQLWithClauseSubtopic(): Subtopic {
  return {
    id: "sql-with-clause",
    title: "WITH Clause in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">WITH Clause in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the WITH Clause?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">WITH clause</strong>, also known as a <strong>Common Table Expression (CTE)</strong>, is used to define a temporary result set that can be referenced within a <strong>SELECT</strong>, <strong>INSERT</strong>, <strong>UPDATE</strong>, or <strong>DELETE</strong> statement. It improves readability and simplifies complex queries.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Find Employees Earning More Than the Average Salary</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query uses a CTE to calculate the average salary and then selects employees who earn more than this average:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
WITH avg_salary AS (
  SELECT AVG(salary) AS avg_sal FROM employees
)
SELECT name, salary
FROM employees, avg_salary
WHERE employees.salary > avg_salary.avg_sal;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                <li>The <strong>WITH clause</strong> creates a temporary table named <strong>avg_salary</strong> that stores the average salary of all employees.</li>
                <li>The main query then compares each employee's salary with the computed average salary from the CTE.</li>
                <li>Only employees whose salary is greater than the average are selected.</li>
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
              <li>The <strong>WITH clause</strong> defines a temporary result set (CTE) that can be referenced in the main query.</li>
              <li>CTEs improve query readability and simplify complex queries by breaking them into smaller, reusable parts.</li>
              <li>CTEs are particularly useful for recursive queries or when intermediate results are needed multiple times in a query.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLWithClauseSubtopic;