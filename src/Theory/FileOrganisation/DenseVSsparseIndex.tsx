import { Subtopic } from './dbms';

function createDenseVsSparseIndexSubtopic(): Subtopic {
  return {
    id: "dense-vs-sparse-index",
    title: "Dense Index vs Sparse Index",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Dense Index vs Sparse Index</h2>
          </div>
        </div>

        <!-- Dense Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Dense Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Dense Index</strong> stores an index entry for every record in the database. This allows for faster lookups but requires more storage space.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If a student database has 1000 records, a dense index would have 1000 index entries.
            </p>
          </div>
        </div>

        <!-- Sparse Index Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Sparse Index</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Sparse Index</strong> stores index entries for only some records (not all). This reduces storage space but may require additional searches.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If we store an index entry for every 10th record in a student database, searching may require scanning nearby records.
            </p>
          </div>
        </div>

        <!-- Comparison Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Comparison</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Dense Index:</strong> Faster lookups, but consumes more space.</li>
              <li><strong>Sparse Index:</strong> Saves space, but may require extra searches.</li>
              <li><strong>Use Case:</strong> Dense indexes are ideal for frequently queried data, while sparse indexes are better for large datasets with infrequent queries.</li>
            </ul>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Dense indexes provide faster access to data but require more storage.</li>
              <li>Sparse indexes save storage space but may increase search time.</li>
              <li>The choice between dense and sparse indexes depends on the specific use case and performance requirements.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createDenseVsSparseIndexSubtopic;