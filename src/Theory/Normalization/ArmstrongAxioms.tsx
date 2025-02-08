import { Subtopic } from './dbms';

function createArmstrongsAxiomsSubtopic(): Subtopic {
  return {
    id: "armstrongs-axioms",
    title: "Armstrong's Axioms",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">

            <h2 class="text-2xl font-bold">Armstrong's Axioms</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Armstrong's Axioms?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              <strong class="text-blue-600">Armstrong's Axioms</strong> are a set of rules used to infer functional dependencies (FDs) in a relational database. They help in finding attribute closures and checking the equivalence of functional dependencies.
            </p>
          </div>

        </div>

        <!-- Axioms Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Armstrong's Axioms</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              The three fundamental axioms are:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">

                <li><strong>Reflexivity</strong>: If <strong>Y ⊆ X</strong>, then <strong>X → Y</strong>.</li>
                <li><strong>Augmentation</strong>: If <strong>X → Y</strong>, then <strong>XZ → YZ</strong>.</li>
                <li><strong>Transitivity</strong>: If <strong>X → Y</strong> and <strong>Y → Z</strong>, then <strong>X → Z</strong>.</li>
              </ul>
            </div>
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

                <li><strong>B → C</strong></li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Using <strong>Transitivity</strong>, we can derive:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed">

                Since <strong>A → B</strong> and <strong>B → C</strong>, then <strong>A → C</strong>.
              </p>
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
              <li>Armstrong's Axioms are essential for reasoning about functional dependencies.</li>
              <li>They form the foundation for database normalization and design.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createArmstrongsAxiomsSubtopic;