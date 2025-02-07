import { Subtopic } from './dbms';

function createSetOperations11Subtopic(): Subtopic {
  return {
    id: "set-operations",
    title: "Set Operations in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Set Operations in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Set Operations?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Set Operations</strong> in SQL are used to combine or compare the results of two or more queries. The primary set operations are <strong>UNION</strong>, <strong>INTERSECT</strong>, and <strong>EXCEPT</strong>.
            </p>
          </div>
        </div>

        <!-- UNION Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">UNION</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>UNION</strong> operation combines the results of two queries and removes duplicates.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name FROM employees WHERE department = 'HR'  
UNION  
SELECT name FROM employees WHERE department = 'IT';
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- INTERSECT Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">INTERSECT</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>INTERSECT</strong> operation finds common records between two queries.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name FROM employees WHERE department = 'HR'  
INTERSECT  
SELECT name FROM employees WHERE department = 'IT';
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- EXCEPT Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">EXCEPT</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong>EXCEPT</strong> operation returns records from the first query that are not present in the second query.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name FROM employees WHERE department = 'HR'  
EXCEPT  
SELECT name FROM employees WHERE department = 'IT';
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
              <li>Set operations are useful for combining or comparing data from multiple queries.</li>
              <li><strong>UNION</strong> removes duplicates, while <strong>UNION ALL</strong> retains them.</li>
              <li><strong>INTERSECT</strong> is used to find common records between two queries.</li>
              <li><strong>EXCEPT</strong> is used to find records in the first query that are not in the second.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSetOperations11Subtopic;