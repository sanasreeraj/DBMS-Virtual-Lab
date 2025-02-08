import { Subtopic } from './dbms';

function create2PLCategoriesSubtopic(): Subtopic {
  return {
    id: "2pl-categories",
    title: "2PL Categories",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">2PL Categories</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are 2PL Categories?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Two-Phase Locking (2PL)</strong> is a concurrency control mechanism that ensures serializability. Different types of 2PL enhance concurrency control by varying how locks are acquired and released.
            </p>
          </div>
        </div>

        <!-- Strict 2PL Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Strict 2PL</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In <strong>Strict 2PL</strong>, a transaction holds exclusive locks until it commits or aborts. This prevents cascading rollbacks and ensures data integrity.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Key Feature:</strong> Prevents cascading rollbacks.
            </p>
          </div>
        </div>

        <!-- Rigorous 2PL Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Rigorous 2PL</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In <strong>Rigorous 2PL</strong>, a transaction holds all locks (both shared and exclusive) until it commits or aborts. This ensures strict serializability.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Key Feature:</strong> Ensures strict serializability.
            </p>
          </div>
        </div>

        <!-- Conservative 2PL Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Conservative 2PL</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In <strong>Conservative 2PL</strong>, a transaction requests all required locks at the beginning before execution. This avoids deadlocks but reduces concurrency.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Key Feature:</strong> Avoids deadlocks but reduces concurrency.
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
              <li><strong>Strict 2PL</strong> prevents cascading rollbacks by holding exclusive locks until commit or abort.</li>
              <li><strong>Rigorous 2PL</strong> ensures strict serializability by holding all locks until commit or abort.</li>
              <li><strong>Conservative 2PL</strong> avoids deadlocks by requesting all locks upfront but reduces concurrency.</li>
              <li>Choosing the right 2PL category depends on the trade-offs between concurrency, deadlock prevention, and serializability.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default create2PLCategoriesSubtopic;