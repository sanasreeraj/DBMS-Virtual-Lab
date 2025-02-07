import { Subtopic } from './dbms';

function createSecIndexingSubtopic(): Subtopic {
  return {
    id: "indexing12",
    title: "Secondary Indexing in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Secondary Indexing in DBMS</h2>
          </div>
        </div>

        <!-- Secondary Index over Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Secondary Index over Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              An index created on a non-sorted column that is a candidate key (unique). It allows fast retrieval of non-primary key attributes.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> Creating an index on Email ID in a student database (since it is unique but not the primary key).
            </p>
          </div>
        </div>

        <!-- Secondary Index over Non-Key Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Secondary Index over Non-Key</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              An index created on non-unique attributes (values can repeat). Multiple records may match the same index value.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> Creating an index on City Name in a customer database. Multiple customers may belong to the same city.
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
              <li><strong>Secondary Index over Key</strong> is created on a unique, non-sorted column.</li>
              <li><strong>Secondary Index over Non-Key</strong> is created on non-unique attributes.</li>
              <li><strong>Clustering Index</strong> is created on a non-primary, sorted column and is not unique.</li>
              <li>All types of indexes help in reducing the time complexity of search operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSecIndexingSubtopic;