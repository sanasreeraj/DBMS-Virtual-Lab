import { Subtopic } from './dbms';

function createInNotInSubtopic(): Subtopic {
  return {
    id: "in-not-in-operators",
    title: "IN & NOT IN Operators",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">IN & NOT IN Operators</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are IN & NOT IN Operators?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">IN</strong> operator is used to check if a value exists in a list or subquery result. The <strong class="text-blue-600">NOT IN</strong> operator excludes values from the list.
            </p>
          </div>
        </div>

        <!-- IN Operator Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">IN Operator Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Find employees who work in the <strong>HR</strong> or <strong>IT</strong> departments:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name, department  
FROM employees  
WHERE department IN ('HR', 'IT');
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- NOT IN Operator Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">NOT IN Operator Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Find employees who do <strong>not</strong> work in the <strong>HR</strong> or <strong>IT</strong> departments:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name, department  
FROM employees  
WHERE department NOT IN ('HR', 'IT');
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- NOT IN with Subquery Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">NOT IN with Subquery Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Find employees who do <strong>not</strong> work in the <strong>HR</strong> department using a subquery:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name  
FROM employees  
WHERE department NOT IN (SELECT department FROM employees WHERE department = 'HR');
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
              <li>The <strong>IN</strong> operator is useful for filtering results based on a list of values.</li>
              <li>The <strong>NOT IN</strong> operator is used to exclude specific values from the results.</li>
              <li>Subqueries can be used with <strong>IN</strong> and <strong>NOT IN</strong> for more dynamic filtering.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createInNotInSubtopic;