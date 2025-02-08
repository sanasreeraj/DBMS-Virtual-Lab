import { Subtopic } from './dbms';

function createACIDSubtopic(): Subtopic {
  return {
    id: "acid-properties",
    title: "ACID Properties in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">ACID Properties in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are ACID Properties?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">ACID</strong> (Atomicity, Consistency, Isolation, Durability) properties are a set of principles that ensure database transactions are processed reliably and maintain data integrity.
            </p>
          </div>
        </div>

        <!-- Atomicity Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Atomicity</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Either all operations of a transaction complete successfully or none of them are applied.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If a fund transfer operation crashes after deducting money but before depositing it, Atomicity ensures that the entire operation is rolled back.
            </p>
          </div>
        </div>

        <!-- Consistency Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Consistency</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A transaction brings the database from one valid state to another valid state.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If Account A has $1000 and Account B has $500, after transferring $200, the total money ($1500) should remain unchanged.
            </p>
          </div>
        </div>

        <!-- Isolation Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Isolation</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Concurrent transactions should not interfere with each other.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If two users try to withdraw money from the same account, Isolation ensures that one transaction completes before the other starts.
            </p>
          </div>
        </div>

        <!-- Durability Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Durability</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Once a transaction is committed, it remains permanent even in case of system failure.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If a transaction is committed and the system crashes, the changes should still be present after a restart.
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
              <li>ACID properties ensure reliability and integrity of database transactions.</li>
              <li><strong>Atomicity</strong> guarantees that a transaction is treated as a single, indivisible unit.</li>
              <li><strong>Consistency</strong> ensures that the database remains in a valid state before and after a transaction.</li>
              <li><strong>Isolation</strong> prevents concurrent transactions from interfering with each other.</li>
              <li><strong>Durability</strong> ensures that committed changes are permanent and survive system failures.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createACIDSubtopic;