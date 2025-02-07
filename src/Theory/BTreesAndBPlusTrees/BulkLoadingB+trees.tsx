import { Subtopic } from './dbms';

function createBPlusTreeBulkSubtopic(): Subtopic {
  return {
    id: "b-plus-tree-bulk",
    title: "Bulk Loading in B+ Tree",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Bulk Loading in B+ Tree</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Bulk Loading?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Bulk Loading</strong> is a technique used to insert a large dataset into a B+ Tree at once, instead of inserting records one by one. This method is more efficient for initial data loading.
            </p>
          </div>
        </div>

        <!-- Steps for Bulk Loading Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Steps for Bulk Loading</h3>
            </div>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Sort the data</strong> by the indexed key.</li>
              <li><strong>Distribute keys</strong> across leaf nodes.</li>
              <li><strong>Build internal nodes</strong> by grouping keys.</li>
              <li><strong>Ensure all leaf nodes</strong> are linked.</li>
            </ol>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If we have sorted Employee_IDs: <code>[100, 150, 200, 250, 300, 350]</code>, we insert them directly into the B+ Tree instead of inserting one by one.
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
              <li>Bulk Loading is efficient for inserting large datasets into a B+ Tree.</li>
              <li>Data must be <strong>sorted</strong> by the indexed key before bulk loading.</li>
              <li>Internal nodes are built by grouping keys from the sorted data.</li>
              <li>All leaf nodes are linked to maintain the B+ Tree structure.</li>
              <li>This method reduces the overhead of inserting records one by one.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBPlusTreeBulkSubtopic;