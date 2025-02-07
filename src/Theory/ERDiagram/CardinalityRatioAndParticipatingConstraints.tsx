import { Subtopic } from './dbms';

function createCardinalityAndParticipationSubtopic(): Subtopic {
  return {
    id: "cardinality-and-participation",
    title: "Cardinality Ratio and Participation Constraints",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Cardinality Ratio and Participation Constraints</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Cardinality?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Cardinality defines how many instances of one entity are related to instances of another entity in a relationship.
            </p>
          </div>
        </div>

        <!-- Types of Cardinality Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Types of Cardinality</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>One-to-One (1:1)</strong> – One entity instance is related to only one instance of another entity.<br>
              </li>
              <li>
                <strong>One-to-Many (1:M)</strong> – One entity instance is related to multiple instances of another entity.<br>
              </li>
              <li>
                <strong>Many-to-Many (M:M)</strong> – Multiple instances of an entity are related to multiple instances of another entity.<br>
              </li>
            </ul>
          </div>
        </div>

        <!-- Participation Constraints Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Participation Constraints</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Participation constraints define whether all entities must participate in a relationship.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Total Participation</strong> – Every entity must be part of a relationship.<br>
              </li>
              <li>
                <strong>Partial Participation</strong> – Some entities may not participate in a relationship.<br>
              </li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider a <strong>University</strong> database:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>One-to-One (1:1)</strong>: A <strong>Country</strong> has one <strong>President</strong>.</li>
                <li><strong>One-to-Many (1:M)</strong>: A <strong>Professor</strong> teaches multiple <strong>Courses</strong>.</li>
                <li><strong>Many-to-Many (M:M)</strong>: <strong>Students</strong> enroll in multiple <strong>Courses</strong>.</li>
                <li><strong>Total Participation</strong>: Every <strong>Employee</strong> must belong to a <strong>Department</strong>.</li>
                <li><strong>Partial Participation</strong>: Some <strong>Professors</strong> may not have <strong>Research Projects</strong>.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Cardinality defines the numerical relationship between entities.</li>
              <li>Participation constraints determine whether all entities must participate in a relationship.</li>
              <li>Understanding cardinality and participation is crucial for designing accurate and efficient database schemas.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createCardinalityAndParticipationSubtopic;