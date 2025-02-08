import { Subtopic } from './dbms';

function createConflictSerializableSubtopic(): Subtopic {
  return {
    id: "conflict-serializable-schedule",
    title: "Conflict Serializable Schedule in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Conflict Serializable Schedule in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Conflict Serializable Schedule?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A schedule is <strong class="text-blue-600">conflict-serializable</strong> if it can be transformed into a serial schedule by swapping non-conflicting operations. This ensures that the schedule produces the same results as some serial execution of the transactions.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example of a Non-Conflict Serializable Schedule</h3>
            </div>
            <pre class="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-4 rounded">
T1: Read(A)
T2: Read(A)
T1: Write(A)
T2: Write(A)
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              This schedule is <strong>not conflict-serializable</strong> because T1 and T2 are writing to the same variable (A) without a clear order, leading to potential conflicts.
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
              <li>A <strong>conflict-serializable schedule</strong> ensures that the execution of transactions produces the same results as some serial execution.</li>
              <li>Conflicts arise when two operations (from different transactions) access the same data item, and at least one of them is a write operation.</li>
              <li>Swapping non-conflicting operations can help transform a schedule into a serial schedule.</li>
              <li>If a schedule cannot be transformed into a serial schedule without changing the results, it is <strong>not conflict-serializable</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createConflictSerializableSubtopic;