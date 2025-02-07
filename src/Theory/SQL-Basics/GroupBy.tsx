import { Subtopic } from './dbms';

function createSQLGroupBySubtopic(): Subtopic {
  return {
    id: "sql-group-by",
    title: "GROUP BY Clause in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">GROUP BY Clause in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is GROUP BY?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">GROUP BY</strong> clause is used to group rows that have the same values in specified columns into aggregated data. It is often used with aggregate functions like <strong>COUNT</strong>, <strong>SUM</strong>, <strong>AVG</strong>, etc.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Count Students by Age</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following query groups students by their age and counts the number of students in each age group:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT age, COUNT(*) FROM Students GROUP BY age;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This query will return a list of ages along with the number of students who are of that age.
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
              <li>The <strong>GROUP BY</strong> clause is used to group rows based on one or more columns.</li>
              <li>It is often paired with aggregate functions to perform calculations on each group.</li>
              <li>Columns in the <strong>SELECT</strong> statement must either be part of the <strong>GROUP BY</strong> clause or used with an aggregate function.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLGroupBySubtopic;