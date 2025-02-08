import { Subtopic } from './dbms';

function createCanonicalCoverSubtopic(): Subtopic {
  return {
    id: "canonical-cover",
    title: "Canonical Cover",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Canonical Cover</h2>
          </div>

        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Canonical Cover?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              A <strong class="text-blue-600">canonical cover</strong> (or minimal cover) is the smallest equivalent set of functional dependencies (FDs) without redundancy. It simplifies FDs before database design by removing unnecessary dependencies and merging overlapping ones.
            </p>
          </div>
        </div>


        <!-- Steps to Find Canonical Cover -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">How to Find a Canonical Cover?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To find a canonical cover, follow these steps:

            </p>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Remove Redundant FDs</strong> → Eliminate functional dependencies that can be inferred from others.</li>
              <li><strong>Merge Overlapping FDs</strong> → Combine FDs with the same left-hand side into a single FD.</li>
              <li><strong>Simplify Right-Hand Sides</strong> → Ensure that the right-hand side of each FD contains only one attribute.</li>
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

              Given Functional Dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → B</strong></li>

                <li><strong>A → C</strong></li>
                <li><strong>B → C</strong></li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Simplifying to Canonical Cover:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Merge <strong>A → B</strong> and <strong>A → C</strong> → <strong>A → BC</strong></li>
                <li>Keep <strong>B → C</strong> unchanged.</li>

              </ol>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Thus, the canonical cover is:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → BC</strong></li>
                <li><strong>B → C</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Note Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Note</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">

              <li>A canonical cover ensures minimal redundancy in functional dependencies.</li>
              <li>It is essential for efficient database normalization and design.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createCanonicalCoverSubtopic;