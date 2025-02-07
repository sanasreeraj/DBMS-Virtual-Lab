import { Subtopic } from './dbms';

function createCartesianProductSubtopic(): Subtopic {
  return {
    id: "cartesian-product",
    title: "Cartesian Product in Relational Algebra",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Cartesian Product in Relational Algebra</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Cartesian Product?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Cartesian Product</strong> is a cross-join operation that combines every tuple of one relation with every tuple of another relation.
            </p>
          </div>
        </div>

        <!-- Notation Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Notation</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The Cartesian Product is denoted as <strong>R × S</strong>, where <strong>R</strong> and <strong>S</strong> are relations.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider two relations:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Relation R</th>
                    <th class="px-4 py-2">A</th>
                    <th class="px-4 py-2">B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Tuple 1</td>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">X</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Tuple 2</td>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Y</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Relation S</th>
                    <th class="px-4 py-2">C</th>
                    <th class="px-4 py-2">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Tuple 1</td>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Z</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Tuple 2</td>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">W</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              The Cartesian Product <strong>R × S</strong> will result in:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">A</th>
                    <th class="px-4 py-2">B</th>
                    <th class="px-4 py-2">C</th>
                    <th class="px-4 py-2">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">X</td>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Z</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">X</td>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">W</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Y</td>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Z</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Y</td>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">W</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              If <strong>R</strong> has 2 tuples and <strong>S</strong> has 2 tuples, the result of <strong>R × S</strong> will have 2 × 2 = 4 tuples.
            </p>
          </div>
        </div>

        <!-- Use Case Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Use Case</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The Cartesian Product is typically followed by a <strong>Selection</strong> operation to form meaningful joins.
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
              <li>The Cartesian Product combines all tuples from two relations.</li>
              <li>It is often used in conjunction with other operations to create meaningful results.</li>
              <li>Understanding the Cartesian Product is essential for mastering relational algebra and SQL joins.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createCartesianProductSubtopic;