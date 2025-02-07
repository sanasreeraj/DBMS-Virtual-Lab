import { Subtopic } from './dbms';

function createFirstNormalFormSubtopic(): Subtopic {
  return {
    id: "first-normal-form",
    title: "First Normal Form (1NF)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">First Normal Form (1NF)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is First Normal Form (1NF)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">First Normal Form (1NF)</strong> is the most basic level of database normalization. A table is in 1NF if:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>All columns contain atomic (indivisible) values.</li>
              <li>There are no repeating groups or arrays.</li>
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
              Consider the following table <strong>before 1NF</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">Math, Sci</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">Eng, Hist</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Issue:</strong> The <strong>Subjects</strong> column contains multiple values, which violates the 1NF rule of atomicity.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>After applying 1NF:</strong> The table is decomposed to ensure each cell contains a single value:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">Sci</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">Eng</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">Hist</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, each cell contains a single value, and there are no repeating groups, ensuring the table is in 1NF.
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
              <li>1NF ensures that each column contains atomic values, making the data easier to query and manage.</li>
              <li>It eliminates repeating groups, reducing redundancy and improving data integrity.</li>
              <li>Proper decomposition into 1NF is the foundation for further normalization (2NF, 3NF, etc.).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createFirstNormalFormSubtopic;