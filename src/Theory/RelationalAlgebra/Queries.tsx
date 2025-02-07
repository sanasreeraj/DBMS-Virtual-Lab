import { Subtopic } from './dbms';

function createQueryTypesSubtopic(): Subtopic {
  return {
    id: "query-types",
    title: "Types of Queries in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Types of Queries in SQL</h2>
          </div>
        </div>

        <!-- More/Less than Some Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">More/Less than Some</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              This type of query is used to find tuples that satisfy a condition for at least one value in another relation.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find students whose marks are greater than some students in Class B."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>SELECT * FROM Students WHERE Marks > SOME (SELECT Marks FROM ClassB);</code></pre>
            </div>
          </div>
        </div>

        <!-- More/Less than Every Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">More/Less than Every</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              This type of query is used to find tuples that satisfy a condition for all values in another relation.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find students whose marks are greater than every student in Class B."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>SELECT * FROM Students WHERE Marks > ALL (SELECT Marks FROM ClassB);</code></pre>
            </div>
          </div>
        </div>

        <!-- Maximum and Minimum Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Maximum and Minimum</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              These queries are used to find the highest or lowest value in a relation.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong>
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>SELECT MAX(Salary) FROM Employees;</code></pre>
              <pre class="text-gray-700"><code>SELECT MIN(Salary) FROM Employees;</code></pre>
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
              <li>Understanding these query types is essential for effective data retrieval in SQL.</li>
              <li>These queries can be combined with other SQL operations to form complex queries.</li>
              <li>Mastery of these query types enhances your ability to manipulate and analyze data efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createQueryTypesSubtopic;