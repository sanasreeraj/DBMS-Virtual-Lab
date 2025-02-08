import { Subtopic } from './dbms';

function createDependencyPreservingDecompositionSubtopic(): Subtopic {
  return {
    id: "dependency-preserving-decomposition",
    title: "Dependency Preserving Decomposition",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Dependency Preserving Decomposition</h2>
          </div>

        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Dependency Preserving Decomposition?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              A decomposition is <strong class="text-blue-600">dependency preserving</strong> if all functional dependencies remain enforceable in the decomposed tables without needing extra joins. This ensures that the integrity constraints of the original table are maintained in the decomposed tables.
            </p>
          </div>

        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              Given the following functional dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → B</strong></li>

                <li><strong>B → C</strong></li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              If the table is decomposed into <strong>(A, B)</strong> and <strong>(B, C)</strong>, both functional dependencies are preserved. The dependency <strong>A → B</strong> is enforced in the first table, and <strong>B → C</strong> is enforced in the second table.
            </p>
          </div>
        </div>

        <!-- Note Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Note</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Dependency preserving decomposition is crucial for maintaining data integrity and avoiding anomalies in the database.</li>
              <li>It ensures that all functional dependencies can be checked without performing expensive join operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createDependencyPreservingDecompositionSubtopic;