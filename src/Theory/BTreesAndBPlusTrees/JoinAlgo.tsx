import { Subtopic } from './dbms';

function createJoinAlgorithmsSubtopic(): Subtopic {
  return {
    id: "join-algorithms",
    title: "Join Algorithms in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Join Algorithms in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Join Algorithms?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Join operations</strong> in DBMS combine data from multiple tables based on common attributes. Join algorithms determine how efficiently these operations are performed.
            </p>
          </div>
        </div>

        <!-- Nested Loop Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Nested Loop Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Compares each row in <strong>Table A</strong> with each row in <strong>Table B</strong>.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Performance:</strong> Slow for large datasets.
            </p>
          </div>
        </div>

        <!-- Sort-Merge Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Sort-Merge Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Sorts both tables before joining.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Performance:</strong> Efficient for large sorted datasets.
            </p>
          </div>
        </div>

        <!-- Hash Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Hash Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Uses hashing to split tables into groups before joining.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Performance:</strong> Fastest join method for large datasets.
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
              <li>Join algorithms are critical for combining data from multiple tables efficiently.</li>
              <li><strong>Nested Loop Join</strong> is simple but inefficient for large datasets.</li>
              <li><strong>Sort-Merge Join</strong> is efficient for sorted datasets but requires pre-sorting.</li>
              <li><strong>Hash Join</strong> is the fastest for large datasets due to its hashing mechanism.</li>
              <li>The choice of join algorithm depends on the dataset size, sorting, and indexing.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createJoinAlgorithmsSubtopic;