import { Subtopic } from './dbms';

function createBoyceCoddNormalFormSubtopic(): Subtopic {
  return {
    id: "boyce-codd-normal-form",
    title: "Boyce-Codd Normal Form (BCNF)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Boyce-Codd Normal Form (BCNF)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Boyce-Codd Normal Form (BCNF)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Boyce-Codd Normal Form (BCNF)</strong> is a higher level of database normalization where a table is in <strong>3NF</strong> and every determinant is a <strong>super key</strong>. This means there are no partial or transitive dependencies, and every determinant uniquely identifies a row.
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
                <strong>3NF Compliance</strong> – The table must already be in Third Normal Form (3NF).<br>
                <span class="text-sm text-gray-500">Example: No transitive dependencies should exist.</span>
              </li>
              <li>
                <strong>Every Determinant is a Super Key</strong> – Every determinant must uniquely identify a row.<br>
                <span class="text-sm text-gray-500">Example: In a table with <strong>EmpID</strong>, <strong>Project</strong>, and <strong>Manager</strong>, <strong>Manager</strong> should not determine <strong>Project</strong> unless <strong>Manager</strong> is a super key.</span>
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
              Consider the following table <strong>before BCNF</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">Project</th>
                    <th class="px-4 py-2">Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">AI</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">ML</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Issue:</strong> <strong>Manager</strong> determines <strong>Project</strong>, but <strong>Manager</strong> is not a super key. This violates BCNF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>After applying BCNF:</strong> The table is decomposed into two tables to ensure every determinant is a super key:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700 leading-relaxed"><strong>Project Table:</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Project</th>
                    <th class="px-4 py-2">Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">AI</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">ML</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700 leading-relaxed"><strong>Employee Table:</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">EmpID</th>
                    <th class="px-4 py-2">Project</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">AI</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">ML</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, <strong>Manager</strong> is a super key in the <strong>Project</strong> table, and <strong>EmpID</strong> is linked to <strong>Project</strong> in the <strong>Employee</strong> table. This ensures every determinant is a super key.
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
              <li>BCNF ensures that every determinant is a <strong>super key</strong>, eliminating partial and transitive dependencies.</li>
              <li>It is a stricter form of 3NF, providing stronger data integrity and reducing redundancy.</li>
              <li>Proper decomposition into BCNF requires identifying and resolving non-super key determinants.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBoyceCoddNormalFormSubtopic;