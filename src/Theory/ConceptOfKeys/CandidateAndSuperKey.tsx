import { Subtopic } from './dbms';  

function createCandidateAndSuperKeySubtopic(): Subtopic {
  return {
    id: "candidate-super-keys",
    title: "Candidate Key vs Super Key",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Candidate Key vs Super Key</h2>
          </div>
        </div>

        <!-- Super Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-indigo-600">Super Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-indigo-600">super key</strong> is any set of one or more attributes that uniquely identifies a row in a table. It may have extra attributes that are not necessary for uniqueness. A table can have multiple super keys. The primary key is always a super key, but a super key is not always a primary key.
            </p>
            <div class="bg-indigo-50 rounded-lg p-4 mt-4">
              <h4 class="font-bold text-indigo-600 mb-2">Example:</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-table w-4 h-4 text-indigo-600"></i> <!-- Replace with your icon implementation -->
                  <span class="font-semibold">Table: Student</span>
                  <span class="text-gray-600">(RollNo, Name, Email, Phone)</span>
                </div>
                <div class="pl-6 text-gray-700">
                  <strong>Super Keys:</strong><br>
                  (RollNo) → Unique<br>
                  (RollNo, Name) → Unique but extra<br>
                  (Email) → Unique<br>
                  (Phone) → Unique<br>
                  (RollNo, Email, Phone) → Still unique but extra
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Candidate Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Candidate Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-purple-600">candidate key</strong> is the minimal super key (no extra attributes). There can be multiple candidate keys in a table, and a candidate key can become a primary key. No attribute in a candidate key can be removed without losing uniqueness.
            </p>
            <div class="bg-purple-50 rounded-lg p-4 mt-4">
              <h4 class="font-bold text-purple-600 mb-2">Example:</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-table w-4 h-4 text-purple-600"></i> <!-- Replace with your icon implementation -->
                  <span class="font-semibold">Table: Student</span>
                  <span class="text-gray-600">(RollNo, Name, Email, Phone)</span>
                </div>
                <div class="pl-6 text-gray-700">
                  <strong>Candidate Keys:</strong><br>
                  (RollNo)<br>
                  (Email)<br>
                  (Phone)<br>
                  These are candidate keys because they uniquely identify a student without extra attributes.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-0">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
              <h3 class="text-xl font-bold text-white">Key Differences</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-indigo-600">Super Key</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-purple-600">Candidate Key</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Definition</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Any key that uniquely identifies a row</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Minimal super key with no extra attributes</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Extra Attributes</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Can have extra</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Cannot have extra</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">Count</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Many possible</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Few minimal ones</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="bg-gray-50 rounded-lg p-6">
          <p class="text-gray-700 leading-relaxed">
            <strong>Note:</strong> Every candidate key is a super key, but not every super key is a candidate key.
          </p>
        </div>
      </div>
    `,
  };
}
  
export default createCandidateAndSuperKeySubtopic;