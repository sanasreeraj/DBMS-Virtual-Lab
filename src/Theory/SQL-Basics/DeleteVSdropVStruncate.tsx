import { Subtopic } from './dbms';

function createSQLDeleteCommandsSubtopic(): Subtopic {
  return {
    id: "sql-delete-commands",
    title: "DELETE vs DROP vs TRUNCATE",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">DELETE vs DROP vs TRUNCATE</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What's the Difference?</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong class="text-blue-600">DELETE</strong>: Removes specific rows from a table</li>
              <li><strong class="text-blue-600">DROP</strong>: Deletes the entire table structure and data</li>
              <li><strong class="text-blue-600">TRUNCATE</strong>: Deletes all rows but keeps the table structure</li>
            </ul>
          </div>
        </div>

        <!-- DELETE Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">DELETE Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To remove specific rows from a table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
DELETE FROM Students WHERE id = 1;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This deletes the student with id = 1 from the table.
            </p>
          </div>
        </div>

        <!-- TRUNCATE Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">TRUNCATE Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To remove all data while keeping the table structure:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
TRUNCATE TABLE Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This deletes all students but keeps the Students table structure.
            </p>
          </div>
        </div>

        <!-- DROP Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">DROP Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To remove the entire table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
DROP TABLE Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This completely removes the Students table and all its data.
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
              <li>DELETE allows you to remove specific records with WHERE clause</li>
              <li>TRUNCATE is faster than DELETE for removing all records</li>
              <li>DROP permanently removes the table structure and all its data</li>
              <li>Always backup your data before using these commands</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLDeleteCommandsSubtopic;