import { Subtopic } from './dbms';

function createJoinTuplesMinMaxSubtopic(): Subtopic {
  return {
    id: "join-tuples-min-max",
    title: "Max and Min Number of Tuples on Join",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Max and Min Number of Tuples on Join</h2>
          </div>
        </div>

        <!-- Maximum Number of Tuples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Maximum Number of Tuples in a Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If relation <strong>R</strong> has <strong>m</strong> tuples and relation <strong>S</strong> has <strong>n</strong> tuples, then the maximum number of tuples in the join is <strong>m × n</strong> (Cartesian Product).
            </p>
          </div>
        </div>

        <!-- Minimum Number of Tuples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Minimum Number of Tuples in a Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The minimum number of tuples in a join depends on the type of join:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Inner Join:</strong> The minimum number of tuples depends on the matching keys between the two relations.</li>
              <li><strong>Outer Join:</strong> The minimum number of tuples is at least as many as the larger relation.</li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider two tables <strong>R</strong> and <strong>S</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Table R</th>
                    <th class="px-4 py-2">Table S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">A | B</td>
                    <td class="border px-4 py-2">B | C</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">1 | 2</td>
                    <td class="border px-4 py-2">2 | 3</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">3 | 4</td>
                    <td class="border px-4 py-2">4 | 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Inner Join:</strong> The result will have tuples where the join condition is satisfied.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">A | B | C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1 | 2 | 3</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">3 | 4 | 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Outer Join:</strong> The result will include all tuples from the larger relation, with nulls where there are no matches.
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
              <li>The maximum number of tuples in a join is the Cartesian product of the two relations.</li>
              <li>The minimum number of tuples depends on the join type and the matching keys.</li>
              <li>Understanding the number of tuples in a join is crucial for database performance and optimization.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createJoinTuplesMinMaxSubtopic;