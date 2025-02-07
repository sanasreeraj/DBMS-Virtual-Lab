import { Subtopic } from './dbms';

function createFileOrganizationSubtopic(): Subtopic {
  return {
    id: "file-organization",
    title: "File Organization in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">File Organization in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is File Organization?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">File organization</strong> refers to the way data is stored in a database system on physical storage (like a hard drive). The choice of file organization affects how efficiently data can be retrieved, inserted, and updated.
            </p>
          </div>
        </div>

        <!-- Heap (Unordered) File Organization Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Heap (Unordered) File Organization</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Records are stored in the order they arrive, with no particular sequence. Searching requires scanning the entire file.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If you store student records in a database as they come, searching for a specific student will require scanning all entries.
            </p>
          </div>
        </div>

        <!-- Sequential File Organization Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Sequential File Organization</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Records are stored in sorted order (e.g., by a unique identifier). Searching is faster using binary search.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A phone directory where names are stored in alphabetical order.
            </p>
          </div>
        </div>

        <!-- Hashing File Organization Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Hashing File Organization</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Uses a hash function to compute an address for each record. Faster retrieval but not suitable for range queries.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A hash table is used to store employee records where employee ID is mapped to a specific storage location.
            </p>
          </div>
        </div>

        <!-- Clustered File Organization Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Clustered File Organization</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Stores related records together to speed up retrieval.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> Orders and Customers are stored in the same place if they are frequently accessed together.
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
              <li>File organization determines how data is stored and accessed in a database.</li>
              <li><strong>Heap (Unordered)</strong> is simple but inefficient for searching.</li>
              <li><strong>Sequential</strong> is efficient for sorted data and supports binary search.</li>
              <li><strong>Hashing</strong> provides fast retrieval but is not ideal for range queries.</li>
              <li><strong>Clustered</strong> improves performance by storing related records together.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createFileOrganizationSubtopic;