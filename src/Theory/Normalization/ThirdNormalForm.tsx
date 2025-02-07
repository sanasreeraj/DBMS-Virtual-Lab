import { Subtopic } from './dbms';

function createThirdNormalFormSubtopic(): Subtopic {
  return {
    id: "third-normal-form",
    title: "Third Normal Form (3NF)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Third Normal Form (3NF)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Third Normal Form (3NF)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Third Normal Form (3NF)</strong> is a level of database normalization where a table is in <strong>2NF</strong> and has no <strong>transitive dependencies</strong>. This means that non-key attributes must depend directly on the primary key, not on other non-key attributes.
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
                <strong>2NF Compliance</strong> – The table must already be in Second Normal Form (2NF).<br>
                <span class="text-sm text-gray-500">Example: All non-key attributes must depend on the entire primary key.</span>
              </li>
              <li>
                <strong>No Transitive Dependencies</strong> – Non-key attributes should depend directly on the primary key, not on other non-key attributes.<br>
                <span class="text-sm text-gray-500">Example: In a table with <strong>EmpID</strong>, <strong>DeptID</strong>, and <strong>DeptName</strong>, <strong>DeptName</strong> should not depend on <strong>DeptID</strong> but directly on <strong>EmpID</strong>.</span>
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
              Consider the following table <strong>before 3NF</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">EmpName</th>
                    <th class="px-4 py-2">DeptID</th>
                    <th class="px-4 py-2">DeptName</th>
                    <th class="px-4 py-2">Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">D1</td>
                    <td class="border px-4 py-2">HR</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Issue:</strong> <strong>DeptName</strong> and <strong>Manager</strong> depend on <strong>DeptID</strong>, not directly on <strong>EmpID</strong> (the primary key). This creates a transitive dependency.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>After applying 3NF:</strong> The table is decomposed into two tables to eliminate transitive dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700 leading-relaxed"><strong>Employee Table:</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">EmpName</th>
                    <th class="px-4 py-2">DeptID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John</td>
                    <td class="border px-4 py-2">D1</td>
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
                    <th class="px-4 py-2">Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">D1</td>
                    <td class="border px-4 py-2">HR</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, <strong>DeptName</strong> and <strong>Manager</strong> depend directly on <strong>DeptID</strong>, and <strong>DeptID</strong> is linked to <strong>EmpID</strong> in the <strong>Employee</strong> table. This ensures no transitive dependencies exist.
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
              <li>3NF ensures that non-key attributes depend <strong>directly</strong> on the primary key.</li>
              <li>It eliminates transitive dependencies, reducing data redundancy and improving data integrity.</li>
              <li>Proper decomposition into 3NF requires identifying and resolving indirect dependencies.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createThirdNormalFormSubtopic;