import { Subtopic } from './dbms';

function createPrimaryAndClusteringIndexingSubtopic(): Subtopic {
  return {
    id: "indexing",
    title: "Primary and Clustering Indexing in DBMS",
    content: `
        <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Primary and Clustering Indexing in DBMS</h2>
          </div>
        </div>

        <!-- Primary Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Primary Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              An index created on a sorted primary key field. It is a sparse index, meaning it has one entry per data block.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A student database where Roll No is the primary key and stored in sorted order. The index points to blocks instead of individual records.
            </p>
          </div>
        </div>

        <!-- Clustering Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Clustering Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              An index created on a non-primary, sorted column, where multiple rows can have the same value. It is not unique (unlike primary index).
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A hospital database where patients are stored based on "Department Name." Multiple patients in the same department are stored together.
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
              <li>Indexing improves the speed of data retrieval operations in a database.</li>
              <li><strong>Primary Index</strong> is created on a sorted primary key field and is sparse.</li>
              <li><strong>Clustering Index</strong> is created on a non-primary, sorted column and is not unique.</li>
              <li>Both types of indexes help in reducing the time complexity of search operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createPrimaryAndClusteringIndexingSubtopic;