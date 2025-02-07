import { Subtopic } from './dbms';

function createBTreeSubtopic(): Subtopic {
  return {
    id: "b-tree-construction",
    title: "Construction of B-Tree in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Construction of B-Tree in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a B-Tree?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">B-Tree</strong> is a self-balancing tree data structure that maintains sorted data and allows for efficient insertion, deletion, and search operations. It is commonly used in databases and file systems for indexing.
            </p>
          </div>
        </div>

        <!-- Rules for B-Tree Construction Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Rules for B-Tree Construction</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Nodes can store multiple keys (based on the order of the tree).</li>
              <li>Keys are always sorted in ascending order.</li>
              <li>Each key acts as a separator for child nodes.</li>
              <li>Splitting occurs when a node is full, moving the middle key up.</li>
              <li>The tree remains balanced to optimize search time.</li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: B-Tree (Order 3)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Suppose we insert <strong>101, 203, 305, 408, 512</strong> into a B-Tree of order 3:
            </p>
            <pre class="bg-gray-100 p-4 rounded-lg text-gray-700">
       [203, 408]
      /    |     \\
 [101]  [305]   [512]
            </pre>
            <p class="text-gray-700 leading-relaxed mb-4">
              Each node can hold at most 2 keys (Order - 1).
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
              <li>B-Trees are self-balancing, ensuring efficient operations.</li>
              <li>Keys in nodes are always sorted, enabling fast searches.</li>
              <li>Splitting nodes during insertion keeps the tree balanced.</li>
              <li>B-Trees are ideal for databases and file systems due to their efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBTreeSubtopic;