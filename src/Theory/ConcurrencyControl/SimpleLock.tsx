import { Subtopic } from './dbms';

function createLockBasedProtocolSubtopic(): Subtopic {
  return {
    id: "lock-based-protocol",
    title: "Simple Lock-Based Protocol in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Simple Lock-Based Protocol in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Lock-Based Protocol?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">lock-based protocol</strong> ensures that multiple transactions can safely access data without conflicts by using locks to control access to shared data items. Locks prevent transactions from interfering with each other, ensuring data consistency.
            </p>
          </div>
        </div>

        <!-- Types of Locks Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of Locks</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Shared Lock (S-lock):</strong> Allows multiple transactions to read a data item but not modify it.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Exclusive Lock (X-lock):</strong> Only one transaction can read and write a data item. No other transaction can access the data item until the lock is released.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <pre class="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-4 rounded">
T1 places a shared lock on X to read it.
T2 also places a shared lock on X to read it.
If T1 wants to update X, it needs an exclusive lock, and T2 must wait.
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              In this example:
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>T1 and T2 can both read X simultaneously using shared locks.</li>
                <li>If T1 wants to update X, it must upgrade its lock to an exclusive lock, forcing T2 to wait until T1 releases the lock.</li>
              </ul>
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
              <li>Lock-based protocols ensure data consistency by controlling access to shared data items.</li>
              <li><strong>Shared Locks (S-locks)</strong> allow multiple transactions to read a data item simultaneously.</li>
              <li><strong>Exclusive Locks (X-locks)</strong> allow only one transaction to read or write a data item at a time.</li>
              <li>Transactions must wait for locks to be released before accessing locked data items.</li>
              <li>Proper use of locks prevents conflicts and ensures transaction isolation.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createLockBasedProtocolSubtopic;