import { Subtopic } from './dbms';

function createConflictSubtopic(): Subtopic {
  return {
    id: "conflict-in-dbms",
    title: "Conflict in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Conflict in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Conflict?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">conflict</strong> occurs when two transactions access the same data item, and at least one of them is a write operation. Conflicts can lead to inconsistencies in the database if not handled properly.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example of Conflict</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider two transactions, <strong>T1</strong> and <strong>T2</strong>, accessing the same data item <strong>A</strong>:
            </p>
            <pre class="bg-gray-100 p-4 rounded-lg text-gray-700">
T1: Read(A) → A = A - 100 → Write(A)
T2: Read(A) → A = A + 200 → Write(A)
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              If <strong>T2</strong> reads <strong>A</strong> before <strong>T1</strong> writes <strong>A</strong>, the final balance may be incorrect due to the conflict.
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
              <li>Conflicts arise when multiple transactions access the same data item, and at least one of them performs a write operation.</li>
              <li>Conflicts can lead to data inconsistencies if transactions are not properly synchronized.</li>
              <li>Proper concurrency control mechanisms (e.g., locking, timestamps) are required to handle conflicts.</li>
              <li>Understanding conflicts is crucial for designing efficient and reliable database systems.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createConflictSubtopic;