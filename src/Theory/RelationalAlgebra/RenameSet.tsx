import { Subtopic } from './dbms';

function createRenameSetDifferenceOperatorsSubtopic(): Subtopic {
  return {
    id: "rename-set-difference-operators",
    title: "Rename Operator and Set-Difference Operator",
    content: `

      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Rename Operator and Set-Difference Operator</h2>
          </div>
        </div>

        <!-- Rename Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Rename Operator (ρ)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Rename Operator</strong> is used to change the name of a relation or its attributes.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Notation:</strong> ρ_NewRelationName (OldRelation)</li>
              <li><strong>Example:</strong> ρ_Students_Info(Students) → Renames "Students" to "Students_Info".</li>
              <li><strong>Use Case:</strong> Used when the same relation is needed multiple times in a query.</li>
            </ul>
          </div>
        </div>

        <!-- Set-Difference Operator Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Set-Difference Operator (-)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Set-Difference Operator</strong> retrieves tuples that are present in one relation but not in another.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Notation:</strong> R - S</li>
              <li><strong>Example:</strong> If R = {1, 2, 3} and S = {2, 3, 4}, then R - S = {1}.</li>
              <li><strong>Condition:</strong> Relations must be Union-Compatible.</li>
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
              <li>The Rename Operator is essential for disambiguating relations in complex queries.</li>
              <li>The Set-Difference Operator is useful for finding unique tuples in one relation compared to another.</li>
              <li>Both operators are fundamental in relational algebra and are widely used in database operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createRenameSetDifferenceOperatorsSubtopic;