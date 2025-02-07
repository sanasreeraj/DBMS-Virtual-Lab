import { Subtopic } from './dbms';

function createLosslessJoinDecompositionSubtopic(): Subtopic {
  return {
    id: "lossless-join-decomposition",
    title: "Lossless Join Decomposition",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Lossless Join Decomposition</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Lossless Join Decomposition?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Lossless Join Decomposition</strong> is a process in database normalization where a table is split into smaller tables without losing any data. When these smaller tables are joined back together, the original data is preserved.
            </p>
          </div>
        </div>

        <!-- Key Components Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Components</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Decomposition</strong> – Splitting a table into smaller tables.<br>
                <span class="text-sm text-gray-500">Example: Splitting an <strong>Employee</strong> table into <strong>Employee</strong> and <strong>Department</strong> tables.</span>
              </li>
              <li>
                <strong>Join</strong> – Combining the smaller tables back into the original table.<br>
                <span class="text-sm text-gray-500">Example: Joining <strong>Employee</strong> and <strong>Department</strong> tables using <strong>DeptID</strong>.</span>
              </li>
              <li>
                <strong>Lossless</strong> – Ensuring no data is lost during decomposition and join.
              </li>
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
              Consider the following table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">DeptID</th>
                    <th class="px-4 py-2">DeptName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">D1</td>
                    <td class="border px-4 py-2">HR</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">D2</td>
                    <td class="border px-4 py-2">IT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This table can be decomposed into two smaller tables:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700 leading-relaxed"><strong>Employee Table:</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">DeptID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">D1</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">D2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700 leading-relaxed"><strong>Department Table:</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">DeptID</th>
                    <th class="px-4 py-2">DeptName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">D1</td>
                    <td class="border px-4 py-2">HR</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">D2</td>
                    <td class="border px-4 py-2">IT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              When these two tables are joined back using <strong>DeptID</strong>, the original table is reconstructed without any loss of data.
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
              <li>Lossless Join Decomposition is essential for maintaining data integrity during normalization.</li>
              <li>It ensures that no information is lost when tables are split and rejoined.</li>
              <li>Proper decomposition depends on identifying the correct functional dependencies.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createLosslessJoinDecompositionSubtopic;