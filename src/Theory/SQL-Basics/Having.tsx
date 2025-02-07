import { Subtopic } from './dbms';

function createSQLHavingSubtopic(): Subtopic {
  return {
    id: "sql-having",
    title: "HAVING Clause in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">HAVING Clause in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the HAVING Clause?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">HAVING</strong> clause is used to filter groups of rows after the <strong>GROUP BY</strong> clause has been applied. It is similar to the <strong>WHERE</strong> clause but operates on groups rather than individual rows.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Filter Age Groups with More Than 2 Students</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query filters age groups that have more than 2 students:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT age, COUNT(*) FROM Students 
GROUP BY age 
HAVING COUNT(*) > 2;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This query only shows age groups where more than 2 students exist.
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
              <li>The <strong>HAVING</strong> clause is used to filter groups created by the <strong>GROUP BY</strong> clause.</li>
              <li>It is often used with aggregate functions like <strong>COUNT</strong>, <strong>SUM</strong>, <strong>AVG</strong>, etc.</li>
              <li>Unlike the <strong>WHERE</strong> clause, which filters rows, the <strong>HAVING</strong> clause filters groups.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLHavingSubtopic;