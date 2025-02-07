import { Subtopic } from './dbms';

function createBTreeOrderSubtopic(): Subtopic {
  return {
    id: "b-tree-order",
    title: "Order of B-Tree",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">B-Tree in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a B-Tree?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">B-Tree</strong> is a self-balancing tree data structure that maintains sorted data and allows for efficient insertion, deletion, and search operations. It is commonly used in databases and file systems to store and retrieve data quickly.
            </p>
          </div>
        </div>

        <!-- Order of a B-Tree Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Order of a B-Tree</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The order (<strong>m</strong>) of a B-Tree determines:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Max number of keys per node</strong> = <strong>m - 1</strong></li>
              <li><strong>Max number of children per node</strong> = <strong>m</strong></li>
            </ul>
          </div>
        </div>

        <!-- Example: B-Tree of Order 4 Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: B-Tree of Order 4</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A B-Tree of order 4 can have:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Max 3 keys per node</strong></li>
              <li><strong>Max 4 child nodes per internal node</strong></li>
            </ul>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <pre class="text-gray-700">
                <code>
       [50, 100, 150]
      /     |      |     \\
 [10, 20] [75]  [125]   [175, 200]
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This structure ensures faster retrieval in indexed database queries.
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
              <li>B-Trees are self-balancing, ensuring efficient operations even as data grows.</li>
              <li>The order of a B-Tree determines the maximum number of keys and children per node.</li>
              <li>B-Trees are widely used in databases for indexing due to their ability to handle large amounts of data efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBTreeOrderSubtopic;