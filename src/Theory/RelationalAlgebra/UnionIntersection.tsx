import { Subtopic } from './dbms';

function createUnionAndIntersectionSubtopic(): Subtopic {
  return {
    id: "union-and-intersection",
    title: "Union and Intersection Operators",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Union and Intersection Operators</h2>
          </div>
        </div>

        <!-- Union Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Union Operator (∪)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Union Operator</strong> combines tuples from two relations and removes duplicates.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Notation:</strong> R ∪ S</li>
              <li><strong>Condition:</strong> Both relations must have the same number of attributes with the same domain (Union-Compatible).</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Example:</strong> If R = {1, 2, 3} and S = {3, 4, 5}, then R ∪ S = {1, 2, 3, 4, 5}.
            </p>
          </div>
        </div>

        <!-- Intersection Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Intersection Operator (∩)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Intersection Operator</strong> retrieves tuples that are common in both relations.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Notation:</strong> R ∩ S</li>
              <li><strong>Condition:</strong> Relations must be Union-Compatible.</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Example:</strong> If R = {1, 2, 3} and S = {3, 4, 5}, then R ∩ S = {3}.
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
              <li>Union and Intersection are fundamental set operations in relational algebra.</li>
              <li>Both operations require the relations to be Union-Compatible (same attributes and domains).</li>
              <li>Union combines data, while Intersection finds common data between two relations.</li>
              <li>These operations are essential for querying and manipulating relational databases.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createUnionAndIntersectionSubtopic;