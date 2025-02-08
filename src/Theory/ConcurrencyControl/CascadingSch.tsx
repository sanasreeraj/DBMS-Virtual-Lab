import { Subtopic } from './dbms';

function createCascadingSchedulesSubtopic(): Subtopic {
  return {
    id: "cascading-cascadeless-schedules",
    title: "Cascading and Cascadeless Schedules",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Cascading and Cascadeless Schedules</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Cascading and Cascadeless Schedules?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Cascading schedules</strong> cause multiple rollbacks when one transaction fails, while <strong class="text-blue-600">cascadeless schedules</strong> prevent such rollbacks by ensuring transactions only read committed data.
            </p>
          </div>
        </div>

        <!-- Cascading Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Cascading Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In a cascading schedule, if one transaction is rolled back, other dependent transactions also need to be rolled back. This leads to cascading rollbacks and can cause performance issues.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong>
            </p>
            <pre class="bg-gray-100 p-4 rounded-lg text-gray-700">
T1 updates X, but does not commit.
T2 reads X from T1 before it commits.
If T1 fails, T2 also needs to roll back.
            </pre>
          </div>
        </div>

        <!-- Cascadeless Schedule Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Cascadeless Schedule</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In a cascadeless schedule, a transaction only reads committed data. This eliminates rollback dependencies and improves efficiency.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong>
            </p>
            <pre class="bg-gray-100 p-4 rounded-lg text-gray-700">
T1 updates X and commits.
Only after T1 commits, T2 reads the updated X.
If T1 fails, T2 is not affected.
            </pre>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Cascading schedules</strong> can lead to multiple rollbacks, causing performance issues.</li>
              <li><strong>Cascadeless schedules</strong> ensure transactions only read committed data, preventing rollback dependencies.</li>
              <li>Cascadeless schedules are more efficient and reliable for database systems.</li>
              <li>Understanding these schedules is crucial for designing robust concurrency control mechanisms.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createCascadingSchedulesSubtopic;