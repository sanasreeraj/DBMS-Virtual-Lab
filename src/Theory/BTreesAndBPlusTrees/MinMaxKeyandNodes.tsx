import { Subtopic } from './dbms';

function createBTreeminmaxSubtopic(): Subtopic {
  return {
    id: "b-tree-minmax",
    title: "Minimum and Maximum Keys and Nodes in B/B+ Trees",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">B/B+ Tree in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a B/B+ Tree?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">B-Tree</strong> and <strong class="text-blue-600">B+ Tree</strong> are self-balancing tree data structures used in databases to maintain sorted data and allow efficient search, insertion, and deletion operations. They are commonly used in file systems and databases for indexing.
            </p>
          </div>
        </div>

        <!-- B-Tree Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">B-Tree of Order m</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Minimum keys per node:</strong> ⌈m/2⌉ - 1
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Maximum keys per node:</strong> m - 1
            </p>
          </div>
        </div>

        <!-- B+ Tree Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">B+ Tree of Order m</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Minimum keys in internal nodes:</strong> ⌈m/2⌉ - 1
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Minimum keys in leaf nodes:</strong> ⌈m/2⌉
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Maximum keys per node:</strong> m - 1
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example for Order 4 B+ Tree</h3>
            </div>
            <pre class="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-4 rounded">
       [30, 60]
      /     \\
[10, 20] → [30, 40, 50] → [60, 70, 80]
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Min keys in internal node:</strong> 2
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Max keys per node:</strong> 3
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
              <li>B-Tree and B+ Tree are balanced tree structures used for efficient data storage and retrieval.</li>
              <li><strong>B-Tree</strong> allows a minimum of ⌈m/2⌉ - 1 keys and a maximum of m - 1 keys per node.</li>
              <li><strong>B+ Tree</strong> has different minimum key requirements for internal and leaf nodes.</li>
              <li>B+ Trees are widely used in databases due to their efficient range query support.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBTreeminmaxSubtopic;