import { Subtopic } from './dbms';

function createSQLKthMaxMinSubtopic(): Subtopic {
  return {
    id: "sql-kth-max-min",
    title: "Kth MAX and MIN in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Kth MAX and MIN in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Kth MAX and MIN?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Kth MAX</strong> and <strong class="text-blue-600">Kth MIN</strong> are SQL techniques used to find the Kth highest or lowest value in a column. These are commonly used in scenarios where you need to retrieve specific ranked values, such as the 3rd highest salary or the 2nd lowest salary.
            </p>
          </div>
        </div>

        <!-- Kth MAX Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Kth MAX (Kth Highest Value)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To find the Kth highest value, you can use the <strong>ORDER BY</strong> clause with <strong>DESC</strong> and the <strong>LIMIT</strong> and <strong>OFFSET</strong> clauses. Here's an example to find the 3rd highest salary:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT salary  
FROM employees  
ORDER BY salary DESC  
LIMIT 1 OFFSET 2;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The <strong>ORDER BY salary DESC</strong> sorts the salaries in descending order.</li>
                <li>The <strong>LIMIT 1 OFFSET 2</strong> skips the first 2 rows and returns the 3rd row, which is the 3rd highest salary.</li>
              </ul>
            </p>
          </div>
        </div>

        <!-- Kth MIN Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Kth MIN (Kth Lowest Value)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To find the Kth lowest value, you can use the <strong>ORDER BY</strong> clause with <strong>ASC</strong> and the <strong>LIMIT</strong> and <strong>OFFSET</strong> clauses. Here's an example to find the 2nd lowest salary:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT salary  
FROM employees  
ORDER BY salary ASC  
LIMIT 1 OFFSET 1;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The <strong>ORDER BY salary ASC</strong> sorts the salaries in ascending order.</li>
                <li>The <strong>LIMIT 1 OFFSET 1</strong> skips the first row and returns the 2nd row, which is the 2nd lowest salary.</li>
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
              <li>Use <strong>ORDER BY</strong> with <strong>DESC</strong> for finding the Kth highest value.</li>
              <li>Use <strong>ORDER BY</strong> with <strong>ASC</strong> for finding the Kth lowest value.</li>
              <li><strong>LIMIT</strong> and <strong>OFFSET</strong> are used to skip rows and retrieve the desired Kth value.</li>
              <li>These techniques are useful for ranking and filtering specific values in a dataset.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLKthMaxMinSubtopic;