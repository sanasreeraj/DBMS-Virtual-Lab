import { Subtopic } from './dbms';

function createSummaryTableSubtopic(): Subtopic {
  return {
    id: "summary-table",
    title: "Summary",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Summary</h2>
          </div>
        </div>

        <!-- Summary Table Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Concepts in DBMS</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-4 py-2 border border-gray-200 text-left text-blue-600">Concept</th>
                    <th class="px-4 py-2 border border-gray-200 text-left text-blue-600">Description</th>
                    <th class="px-4 py-2 border border-gray-200 text-left text-blue-600">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Transactions -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>Transactions</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Logical unit of work</td>
                    <td class="px-4 py-2 border border-gray-200">Bank fund transfer</td>
                  </tr>
                  <!-- ACID Properties -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>ACID Properties</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Ensures reliability</td>
                    <td class="px-4 py-2 border border-gray-200">Atomicity, Consistency, Isolation, Durability</td>
                  </tr>
                  <!-- Schedule -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>Schedule</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Order of executing transactions</td>
                    <td class="px-4 py-2 border border-gray-200">Serial vs. Concurrent Execution</td>
                  </tr>
                  <!-- Conflict -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>Conflict</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Occurs when two transactions access the same data</td>
                    <td class="px-4 py-2 border border-gray-200">Two transactions writing to the same account</td>
                  </tr>
                  <!-- Conflict Equivalent Schedules -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>Conflict Equivalent Schedules</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Two schedules maintain same conflicting order</td>
                    <td class="px-4 py-2 border border-gray-200">Reordering operations without affecting results</td>
                  </tr>
                  <!-- Conflict Serializable Schedule -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>Conflict Serializable Schedule</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Can be converted into a serial schedule</td>
                    <td class="px-4 py-2 border border-gray-200">Ensuring order of conflicting operations</td>
                  </tr>
                  <!-- View Serializable Schedule -->
                  <tr>
                    <td class="px-4 py-2 border border-gray-200"><strong>View Serializable Schedule</strong></td>
                    <td class="px-4 py-2 border border-gray-200">Produces same result as serial execution</td>
                    <td class="px-4 py-2 border border-gray-200">May not be conflict-serializable but ensures correctness</td>
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
              <li>Transactions are the basic logical units of work in a database.</li>
              <li>ACID properties ensure the reliability and integrity of transactions.</li>
              <li>Schedules determine the order of transaction execution, which can be serial or concurrent.</li>
              <li>Conflicts arise when multiple transactions access the same data, requiring proper concurrency control.</li>
              <li>Conflict and view serializability are key concepts for ensuring correct and efficient transaction execution.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSummaryTableSubtopic;