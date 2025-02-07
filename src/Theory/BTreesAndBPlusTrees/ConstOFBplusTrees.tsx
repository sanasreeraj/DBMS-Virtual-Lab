import { Subtopic } from './dbms';

function createBPlusTreeSubtopic(): Subtopic {
  return {
    id: "b-plus-tree-construction",
    title: "Construction of B+ Tree in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Construction of B+ Tree in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a B+ Tree?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">B+ Tree</strong> is a self-balancing tree data structure used in databases and file systems. It is an extension of the B-Tree, where all data is stored in the leaf nodes, and internal nodes are used only for navigation. This structure allows for efficient range queries and sequential access.
            </p>
          </div>
        </div>

        <!-- Steps to Construct a B+ Tree Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Steps to Construct a B+ Tree</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Insert keys in sorted order.</li>
              <li>When a node gets full, split it.</li>
              <li>Keep all keys in leaf nodes, while internal nodes store only keys for navigation.</li>
              <li>All leaf nodes are linked, allowing fast range queries.</li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: B+ Tree (Order 3)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Keys inserted: <strong>10, 20, 30, 40, 50, 60</strong>
            </p>
            <pre class="bg-gray-100 p-4 rounded-lg text-gray-700">
       [30, 50]
      /       \\
[10, 20] → [30, 40] → [50, 60]
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Leaf nodes</strong> store all data, while <strong>internal nodes</strong> only store navigation keys.
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
              <li>B+ Trees store all data in leaf nodes, making them ideal for range queries.</li>
              <li>Internal nodes are used only for navigation, reducing their size and improving efficiency.</li>
              <li>Leaf nodes are linked together, enabling fast sequential access.</li>
              <li>B+ Trees are widely used in databases and file systems for indexing.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBPlusTreeSubtopic;