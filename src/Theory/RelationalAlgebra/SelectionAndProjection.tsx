import { Subtopic } from './dbms';

function createSelectionProjectionSubtopic(): Subtopic {
  return {
    id: "selection-projection",
    title: "Selection and Projection Operations",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Selection and Projection Operations</h2>
          </div>
        </div>

        <!-- Selection Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Selection Operation (σ)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Selection</strong> operation filters rows from a relation based on a specified condition. It retrieves tuples (rows) that satisfy the given condition.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Notation:</strong> σ_condition(R)
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> σ_Age > 25(Students) → Retrieves students older than 25.
            </p>
          </div>
        </div>

        <!-- Projection Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Projection Operation (π)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Projection</strong> operation selects specific columns (attributes) from a relation. It retrieves only the specified columns, eliminating the rest.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Notation:</strong> π_Column1, Column2(R)
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> π_Name, Age(Students) → Retrieves only the Name and Age columns.
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
              Consider a table named <strong>Students</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">22</td>
                    <td class="border px-4 py-2">A</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">26</td>
                    <td class="border px-4 py-2">B</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Charlie</td>
                    <td class="border px-4 py-2">24</td>
                    <td class="border px-4 py-2">C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Selection Example:</strong> σ_Age > 25(Students) → Retrieves students older than 25:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">26</td>
                    <td class="border px-4 py-2">B</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Projection Example:</strong> π_Name, Age(Students) → Retrieves only the Name and Age columns:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">22</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">26</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Charlie</td>
                    <td class="border px-4 py-2">24</td>
                  </tr>
                </tbody>
              </table>
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
              <li>Selection filters rows based on a condition, while projection selects specific columns.</li>
              <li>Both operations are fundamental in relational algebra and are used extensively in querying databases.</li>
              <li>Understanding these operations is crucial for efficient data retrieval and manipulation.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSelectionProjectionSubtopic;