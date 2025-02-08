import { Subtopic } from './dbms';

function createRecoverableSchedulesSubtopic(): Subtopic {
  return {
    id: "recoverable-schedules",
    title: "Recoverable and Irrecoverable Schedules",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Recoverable and Irrecoverable Schedules</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Recoverable and Irrecoverable Schedules?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">schedule</strong> (or sequence of database transactions) is <strong>recoverable</strong> if the system can recover from a failure without losing consistency. If a schedule is not recoverable, it is termed as <strong>irrecoverable</strong>.
            </p>
          </div>
        </div>

        <!-- Recoverable Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Recoverable Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A schedule is <strong>recoverable</strong> if a transaction commits only after all the transactions it depends on have also committed.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed mb-4">
                <strong>Example:</strong><br>
                Transaction T1 reads data X and updates it.<br>
                Transaction T2 reads the updated X from T1.<br>
                T1 commits, then T2 commits.<br>
                This is recoverable because T2 commits only after T1.
              </p>
            </div>
          </div>
        </div>

        <!-- Irrecoverable Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Irrecoverable Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A schedule is <strong>irrecoverable</strong> if a transaction commits before the one it depends on, and the first one fails. In such cases, recovery is impossible.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed mb-4">
                <strong>Example:</strong><br>
                T1 reads and updates X but crashes before committing.<br>
                T2 has already committed the changes from T1.<br>
                If we try to rollback T1, the changes made by T2 remain, making recovery impossible.
              </p>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Recoverable schedules ensure database consistency after recovery from failures.</li>
              <li>Irrecoverable schedules can lead to data inconsistencies and are generally avoided in database systems.</li>
              <li>Proper transaction management is crucial to maintain recoverability.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createRecoverableSchedulesSubtopic;