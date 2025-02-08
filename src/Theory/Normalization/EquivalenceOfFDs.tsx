import { Subtopic } from './dbms';

function createEquivalenceOfFDsSubtopic(): Subtopic {
  return {
    id: "equivalence-of-fds",
    title: "Equivalence of Functional Dependencies (FDs)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Equivalence of Functional Dependencies (FDs)</h2>
          </div>

        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Equivalence of FDs?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              Two sets of functional dependencies are <strong class="text-blue-600">equivalent</strong> if they produce the same closure (i.e., determine the same attributes). This means that both sets can derive the same functional dependencies.
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

              Consider the following two sets of functional dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>Set 1:</strong> { A → B, B → C }</li>

                <li><strong>Set 2:</strong> { A → C, A → B }</li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Both sets can derive <strong>A → C</strong>, so they are equivalent.
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
              <li>Equivalence of FDs is important for ensuring that different sets of dependencies can represent the same constraints in a database.</li>
              <li>It helps in simplifying and optimizing the design of relational databases.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createEquivalenceOfFDsSubtopic;