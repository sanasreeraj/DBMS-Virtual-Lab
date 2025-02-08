import { Subtopic } from './dbms';

function createViewSerializableScheduleSubtopic(): Subtopic {
  return {
    id: "view-serializable-schedule",
    title: "View Serializable Schedule in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">View Serializable Schedule in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a View Serializable Schedule?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A schedule is <strong class="text-blue-600">view-serializable</strong> if it produces the same final output as a serial schedule. This means that the results of the transactions in the schedule are equivalent to executing the transactions one after another in some serial order.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider the following schedules:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
S1:
T1: Read(A)
T2: Read(A)
T1: Write(A)
T2: Write(A)

S2 (Serial Order):
T1: Read(A)
T1: Write(A)
T2: Read(A)
T2: Write(A)
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              If <strong>S1</strong> produces the same output as <strong>S2</strong>, then <strong>S1</strong> is view-serializable, even if it is not conflict-serializable.
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
              <li>A schedule is <strong>view-serializable</strong> if its final output matches that of a serial schedule.</li>
              <li>View-serializability focuses on the final state of the data, not the order of operations.</li>
              <li>A schedule can be view-serializable even if it is not conflict-serializable.</li>
              <li>View-serializability is a weaker condition than conflict-serializability but still ensures correctness in database transactions.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createViewSerializableScheduleSubtopic;