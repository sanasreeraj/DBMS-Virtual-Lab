import { Subtopic } from './dbms';

function createRelationshipsInERDiagramSubtopic(): Subtopic {
  return {
    id: "relationships-in-er-diagram",
    title: "Relationships in ER Diagram",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Relationships in ER Diagram</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Relationships?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A relationship represents an association between two or more entities in an ER diagram.
            </p>
          </div>
        </div>

        <!-- Types of Relationships Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Types of Relationships</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Unary Relationship (Self-Referencing)</strong> – When an entity is related to itself.<br>
              </li>
              <li>
                <strong>Binary Relationship</strong> – When two entities are related.<br>
              </li>
              <li>
                <strong>Ternary Relationship</strong> – When three entities are related.<br>
              </li>
              <li>
                <strong>Higher-Order Relationship</strong> – When more than three entities are involved.<br>
              </li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider a <strong>University</strong> database:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>Unary Relationship</strong>: <strong>Employee</strong> supervises another <strong>Employee</strong>.</li>
                <li><strong>Binary Relationship</strong>: <strong>Student</strong> enrolls in a <strong>Course</strong>.</li>
                <li><strong>Ternary Relationship</strong>: <strong>Doctor</strong> prescribes <strong>Medicine</strong> to a <strong>Patient</strong>.</li>
                <li><strong>Higher-Order Relationship</strong>: <strong>Bank</strong> manages multiple <strong>Customers</strong> and their <strong>Accounts</strong>.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Relationships define how entities interact with each other in a database.</li>
              <li>Understanding relationship types is essential for designing accurate and efficient ER diagrams.</li>
              <li>Higher-order relationships are less common but are used when multiple entities are involved.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createRelationshipsInERDiagramSubtopic;