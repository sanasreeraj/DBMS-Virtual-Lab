import { Subtopic } from './dbms';

function createBPlusTreeOrderSubtopic(): Subtopic {
  return {
    id: "b-plus-tree-order",
    title: "Order of B+ Tree",
    content: `

      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">B+ Tree in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a B+ Tree?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">B+ Tree</strong> is a variation of the B-Tree data structure that is optimized for use in databases and file systems. It stores all data in its leaf nodes, while internal nodes are used only for navigation. This makes B+ Trees highly efficient for range queries and sequential access.
            </p>
          </div>
        </div>

        <!-- Order of a B+ Tree Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Order of a B+ Tree</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Just like B-Trees, the order (<strong>m</strong>) of a B+ Tree determines:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Max keys per node</strong> = <strong>m - 1</strong></li>
              <li><strong>Max child nodes per internal node</strong> = <strong>m</strong></li>
            </ul>
          </div>
        </div>

        <!-- Example: B+ Tree of Order 4 Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: B+ Tree of Order 4</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A B+ Tree of Order 4:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
       [30, 60]
      /     \\
[10, 20] → [30, 40, 50] → [60, 70, 80]
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Internal nodes</strong> store only navigation keys, while <strong>leaf nodes</strong> store all actual data. This structure ensures efficient range queries and sequential access.
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
              <li>B+ Trees store all data in leaf nodes, making them ideal for range queries and sequential access.</li>
              <li>Internal nodes are used only for navigation, improving search efficiency.</li>
              <li>The order of a B+ Tree determines the maximum number of keys and child nodes per node.</li>
              <li>B+ Trees are widely used in databases for indexing due to their balanced structure and efficient operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBPlusTreeOrderSubtopic;