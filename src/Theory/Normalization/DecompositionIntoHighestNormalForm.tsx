import { Subtopic } from './dbms';

function createHighestNormalFormSubtopic(): Subtopic {
  return {
    id: "highest-normal-form",
    title: "Decomposition into Highest Normal Form (HNF)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Decomposition into Highest Normal Form (HNF)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Highest Normal Form (HNF)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Highest Normal Form (HNF)</strong> is the most optimized level of database normalization achievable for a given table. It ensures that the database structure is free from redundancy and anomalies by applying normalization rules step by step.
            </p>
          </div>
        </div>

        <!-- Process Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Process of Achieving HNF</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The process of decomposing a table into its highest normal form involves:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Identifying Keys and Dependencies:</strong> Determine the primary keys and functional dependencies in the table.</li>
              <li><strong>Applying Normalization Rules:</strong> Step-by-step normalization from 1NF → 2NF → 3NF → BCNF.</li>
              <li><strong>Checking for Further Decomposition:</strong> Ensure that all determinants are super keys and no further decomposition is needed.</li>
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
              Consider a table that is in <strong>3NF</strong> but not in <strong>BCNF</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Dr. Smith</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Science</td>
                    <td class="border px-4 py-2">Dr. Brown</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Issue:</strong> The table is in 3NF, but the <strong>Instructor</strong> attribute is dependent on <strong>Course</strong>, which is not a super key. This violates BCNF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>After Decomposition:</strong> The table is decomposed into two tables to ensure all determinants are super keys:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Dr. Smith</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Science</td>
                    <td class="border px-4 py-2">Dr. Brown</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, both tables are in <strong>BCNF</strong>, ensuring the highest normal form is achieved.
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
              <li>HNF ensures the database is fully optimized, reducing redundancy and improving data integrity.</li>
              <li>Decomposition into HNF involves identifying dependencies and applying normalization rules step by step.</li>
              <li>BCNF is often the highest normal form achievable in practice, ensuring all determinants are super keys.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createHighestNormalFormSubtopic;