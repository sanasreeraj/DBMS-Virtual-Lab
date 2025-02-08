import { Subtopic } from './dbms';

function createTimestampOrderingProtocolSubtopic(): Subtopic {
  return {
    id: "timestamp-ordering-protocol",
    title: "Basic Timestamp Ordering Protocol in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Basic Timestamp Ordering Protocol in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the Timestamp Ordering Protocol?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Timestamp Ordering Protocol</strong> is a concurrency control mechanism that orders transactions based on their timestamps instead of using locks. It ensures that transactions execute in a serializable order by allowing older transactions to proceed first and aborting newer transactions that cause conflicts.
            </p>
          </div>
        </div>

        <!-- How it Works Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">How it Works</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Each transaction is assigned a unique <strong>timestamp (TS)</strong> when it starts.</li>
              <li>Older transactions (with smaller timestamps) are given priority and execute first.</li>
              <li>If a newer transaction tries to overwrite a value written by an older transaction, it is <strong>aborted and restarted</strong>.</li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <pre class="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-4 rounded">
T1 (TS=10) starts first.
T2 (TS=20) comes later and wants to update the same data.
If T2 tries to write before T1 finishes, it gets aborted and restarted.
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              In this example:
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>T1 has a smaller timestamp (TS=10) and is considered older than T2 (TS=20).</li>
                <li>If T2 tries to write to a data item that T1 is still working on, T2 is aborted and restarted to ensure T1 completes first.</li>
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
              <li>The Timestamp Ordering Protocol avoids locks by using timestamps to order transactions.</li>
              <li>Older transactions (with smaller timestamps) are prioritized over newer ones.</li>
              <li>Conflicts are resolved by aborting and restarting newer transactions that interfere with older ones.</li>
              <li>This protocol ensures serializability and prevents anomalies like dirty reads and lost updates.</li>
              <li>It is a non-blocking protocol, as transactions do not wait for locks to be released.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createTimestampOrderingProtocolSubtopic;