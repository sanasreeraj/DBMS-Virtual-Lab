import { Subtopic } from './dbms';

function createBPlusTreesSubtopic(): Subtopic {
  return {
    id: "b-plus-trees",
    title: "Introduction to B+ Trees in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Introduction to B+ Trees in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are B+ Trees?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">B+ Tree</strong> is an advanced form of B-Tree, commonly used in database indexes. It is designed to optimize disk access and improve the efficiency of range queries.
            </p>
          </div>
        </div>

        <!-- Key Features Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Features of B+ Trees in DBMS</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>All values are stored in leaf nodes</strong> (not internal nodes).</li>
              <li><strong>Internal nodes store only keys</strong> (used for navigation).</li>
              <li><strong>Leaf nodes are linked together</strong> → making range queries faster.</li>
              <li><strong>More keys per node</strong> → resulting in shorter tree height.</li>
            </ul>
          </div>
        </div>

        <!-- Example: B+ Tree Index on Employee_ID Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: B+ Tree Index on Employee_ID</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A B+ Tree (Order 3) for <strong>Employee_ID</strong>:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
       [203, 305]
      /        \\
[101, 150] → [203, 250, 275] → [305, 350, 408]
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              If we search for <strong>250</strong>, we follow:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Compare with <strong>203</strong> → go right.</li>
              <li>Found in the leaf node <strong>[203, 250, 275]</strong>.</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              If we want all employees above ID <strong>203</strong>, we traverse the linked list from <strong>203</strong> onwards.
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
              <li>B+ Trees are optimized for disk-based storage systems, making them ideal for databases.</li>
              <li>They store all values in leaf nodes, while internal nodes act as navigational keys.</li>
              <li>Linked leaf nodes enable efficient range queries and sequential access.</li>
              <li>B+ Trees have a shorter height compared to B-Trees, reducing the number of disk accesses.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBPlusTreesSubtopic;