import { Subtopic } from './dbms';

function createTwoPhaseLockingSubtopic(): Subtopic {
  return {
    id: "two-phase-locking",
    title: "Basic Two-Phase Locking (2PL) Protocol",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Basic Two-Phase Locking (2PL) Protocol</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the Two-Phase Locking Protocol?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Two-Phase Locking (2PL) Protocol</strong> is a concurrency control mechanism that ensures transactions acquire and release locks in a structured way to prevent conflicts.
            </p>
          </div>
        </div>

        <!-- Two Phases Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Two Phases of 2PL</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Growing Phase</strong> – The transaction acquires locks but cannot release any.<br>
                <span class="text-sm text-gray-500">Example: A transaction locks data items X and Y.</span>
              </li>
              <li>
                <strong>Shrinking Phase</strong> – The transaction releases locks but cannot acquire new ones.<br>
                <span class="text-sm text-gray-500">Example: The transaction releases locks on X and Y after completing its operations.</span>
              </li>
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
              Consider a transaction T1:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>T1 locks X and then Y (Growing Phase).</li>
                <li>T1 performs updates on X and Y.</li>
                <li>T1 releases locks on X and Y (Shrinking Phase).</li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This ensures that no other transaction can conflict with T1 during its execution.
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
              <li>2PL ensures serializability by enforcing a strict order of lock acquisition and release.</li>
              <li>It prevents conflicts between transactions by dividing the locking process into two distinct phases.</li>
              <li>Proper implementation of 2PL is crucial for maintaining database consistency and avoiding deadlocks.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createTwoPhaseLockingSubtopic;