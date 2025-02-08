import { Subtopic } from './dbms';

function createScheduleSubtopic(): Subtopic {
  return {
    id: "schedule",
    title: "Schedule in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Schedule in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Schedule?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Schedule</strong> is the sequence in which multiple transactions are executed in a database. It determines the order of operations performed by transactions and ensures data consistency and integrity.
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
              Consider two transactions:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>T1</strong>: Withdraws $100 from Account A</li>
              <li><strong>T2</strong>: Deposits $200 to Account A</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              Two possible schedules:
            </p>
          </div>
        </div>

        <!-- Serial Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Serial Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In a <strong>Serial Schedule</strong>, transactions are executed one after another:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
T1: Withdraw $100 (Balance = $900)
T2: Deposit $200 (Balance = $1100)
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This ensures correctness but lacks concurrency.
            </p>
          </div>
        </div>

        <!-- Concurrent Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Concurrent Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In a <strong>Concurrent Schedule</strong>, transactions are interleaved to achieve concurrency:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
T1: Withdraw $100 (Balance = $900)
T2: Read Balance ($900)
T2: Deposit $200 (Balance = $1100)
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Here, interleaving happens, leading to concurrency but requiring careful management to avoid inconsistencies.
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
              <li>A schedule defines the order of transaction execution in a database.</li>
              <li><strong>Serial schedules</strong> execute transactions one after another, ensuring correctness but limiting concurrency.</li>
              <li><strong>Concurrent schedules</strong> interleave transactions to improve concurrency but require mechanisms to maintain data consistency.</li>
              <li>Proper scheduling is crucial for maintaining database integrity and performance.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createScheduleSubtopic;