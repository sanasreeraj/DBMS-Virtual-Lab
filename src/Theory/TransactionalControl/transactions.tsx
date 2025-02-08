import { Subtopic } from './dbms';

function createTransactionsSubtopic(): Subtopic {
  return {
    id: "transactions",
    title: "Transactions in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Transactions in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Transaction?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">transaction</strong> is a sequence of one or more database operations performed as a single logical unit of work. A transaction must either be fully completed (<strong>COMMIT</strong>) or completely undone (<strong>ROLLBACK</strong>) to ensure database consistency.
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
              Consider a banking system where you are transferring $500 from Account A to Account B:
            </p>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Withdraw $500 from Account A.</li>
              <li>Deposit $500 to Account B.</li>
              <li>Commit the transaction.</li>
            </ol>
            <p class="text-gray-700 leading-relaxed mt-4">
              If the system crashes after step 1, the money is deducted from Account A but not credited to Account B, leading to inconsistency. Using transactions ensures that either both operations are performed, or neither happens.
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
              <li>A transaction is a logical unit of work that ensures database consistency.</li>
              <li>Transactions must follow the <strong>ACID</strong> properties: Atomicity, Consistency, Isolation, and Durability.</li>
              <li><strong>COMMIT</strong> saves all changes made during the transaction.</li>
              <li><strong>ROLLBACK</strong> undoes all changes if any operation fails.</li>
              <li>Transactions prevent partial updates, ensuring data integrity.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createTransactionsSubtopic;