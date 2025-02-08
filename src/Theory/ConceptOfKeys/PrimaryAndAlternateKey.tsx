import { Subtopic } from './dbms';

function createPrimaryAndAlternateKeySubtopic(): Subtopic {
  return {
    id: "primary-alternate-keys",
    title: "Primary Key vs Alternate Key",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Primary Key vs Alternate Key</h2>
          </div>
        </div>

        <!-- Primary Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Primary Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">primary key</strong> is a unique identifier for each row in a table. It cannot have <strong>NULL</strong> values and must be unique. There can be only one primary key in a table, and it helps in establishing relationships between tables.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <h4 class="font-bold text-blue-600 mb-2">Example:</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-table w-4 h-4 text-blue-600"></i> <!-- Replace with your icon implementation -->
                  <span class="font-semibold">Table: Employee</span>
                  <span class="text-gray-600">(EmpID, Name, Email, Phone)</span>
                </div>
                <div class="pl-6 text-gray-700">
                  <strong>Primary Key:</strong> (EmpID) → Unique and cannot be NULL
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alternate Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Alternate Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              An <strong class="text-blue-600">alternate key</strong> is a candidate key that is not chosen as the primary key. It can still uniquely identify rows but remains as a backup. There can be multiple alternate keys in a table, and they can be used as secondary unique identifiers.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <h4 class="font-bold text-blue-600 mb-2">Example:</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-table w-4 h-4 text-blue-600"></i> <!-- Replace with your icon implementation -->
                  <span class="font-semibold">Table: Employee</span>
                  <span class="text-gray-600">(EmpID, Name, Email, Phone)</span>
                </div>
                <div class="pl-6 text-gray-700">
                  <strong>Candidate Keys:</strong> (EmpID), (Email), (Phone)<br>
                  <strong>Primary Key Chosen:</strong> (EmpID)<br>
                  <strong>Alternate Keys:</strong> (Email), (Phone)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-0">
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <h3 class="text-xl font-bold text-white">Key Differences</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-blue-600">Primary Key</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-purple-600">Alternate Key</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Definition</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Uniquely identifies a row</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Candidate key not chosen as primary key</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">NULL Allowed</td>
                    <td class="px-6 py-4 text-sm text-gray-700">No</td>
                    <td class="px-6 py-4 text-sm text-gray-700">No</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Count</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Only one</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Can be multiple</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Purpose</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Main unique identifier</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Backup unique identifier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="bg-gray-50 rounded-lg p-6">
          <p class="text-gray-700 leading-relaxed">
            <strong>Note:</strong> Every primary key is a candidate key, but not every candidate key becomes a primary key.
          </p>
        </div>
      </div>
    `,
  };
}
  
export default createPrimaryAndAlternateKeySubtopic; 