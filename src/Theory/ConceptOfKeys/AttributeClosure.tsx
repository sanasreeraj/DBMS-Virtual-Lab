import { Subtopic } from './dbms';

function createAttributeClosureSubtopic(): Subtopic {
  return {
    id: "attribute-closure",
    title: "Attribute Closure",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Attribute Closure</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Attribute Closure?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">attribute closure</strong> of a set of attributes <strong>X</strong> (denoted as <strong>X⁺</strong>) is the set of all attributes that can be functionally determined by <strong>X</strong> using a given set of functional dependencies. It is useful for finding candidate keys and checking if a functional dependency holds in a relation.
            </p>

          </div>
        </div>

        <!-- Steps to Find Attribute Closure -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">How to Find Attribute Closure (X⁺)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To find <strong>X⁺</strong>, follow these steps:
            </p>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Start with X</strong> → Add all attributes in <strong>X</strong> to <strong>X⁺</strong>.</li>
              <li><strong>Apply Functional Dependencies</strong> → Add attributes to <strong>X⁺</strong> if they can be determined by attributes already in <strong>X⁺</strong>.</li>
              <li><strong>Repeat Until No More Changes</strong> → Keep adding attributes until no new ones can be added.</li>
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
              Given Relation: <strong>R(A, B, C, D, E)</strong><br>
              Functional Dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → B</strong></li>
                <li><strong>B → C</strong></li>
                <li><strong>A, C → D</strong></li>
                <li><strong>D → E</strong></li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Finding Attribute Closure <strong>X⁺</strong> (For <strong>X = {A}</strong>):
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Start with <strong>A</strong> → <strong>{A}</strong></li>
                <li><strong>A → B</strong> (Add <strong>B</strong>) → <strong>{A, B}</strong></li>
                <li><strong>B → C</strong> (Add <strong>C</strong>) → <strong>{A, B, C}</strong></li>
                <li><strong>A, C → D</strong> (<strong>A</strong> and <strong>C</strong> present, Add <strong>D</strong>) → <strong>{A, B, C, D}</strong></li>
                <li><strong>D → E</strong> (Add <strong>E</strong>) → <strong>{A, B, C, D, E}</strong></li>
              </ol>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Thus, <strong>X⁺ = {A, B, C, D, E}</strong>
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
              <li>If <strong>X⁺</strong> contains all attributes of the relation, <strong>X</strong> is a candidate key.</li>
              <li>Attribute closure helps verify functional dependencies in normalization.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}
export default createAttributeClosureSubtopic; 