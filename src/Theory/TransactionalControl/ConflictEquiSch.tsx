import { Subtopic } from './dbms';

function createConflictEquivalentSchedulesSubtopic(): Subtopic {
  return {
    id: "conflict-equivalent-schedules",
    title: "Conflict Equivalent Schedules",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Conflict Equivalent Schedules</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Conflict Equivalent Schedules?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Two schedules are <strong class="text-blue-600">conflict-equivalent</strong> if they produce the same final results while maintaining the same order of conflicting operations.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <pre class="bg-gray-100 p-4 rounded-md text-gray-700 mb-4">
S1:
T1: Read(A)
T1: Write(A)
T2: Read(A)
T2: Write(A)

S2:
T2: Read(A)
T2: Write(A)
T1: Read(A)
T1: Write(A)
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              If <strong>S1</strong> and <strong>S2</strong> maintain the same conflicting operation order, they are conflict-equivalent.
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
              <li>Conflict equivalence ensures that two schedules produce the same final result.</li>
              <li>Conflicting operations are those that involve the same data item and at least one of them is a <strong>write</strong> operation.</li>
              <li>The order of conflicting operations must be the same in both schedules for them to be conflict-equivalent.</li>
              <li>Conflict equivalence is a key concept in ensuring serializability in database systems.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createConflictEquivalentSchedulesSubtopic;