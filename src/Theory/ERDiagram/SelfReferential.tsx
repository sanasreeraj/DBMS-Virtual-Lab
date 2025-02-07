import { Subtopic } from './dbms';

function createSelfReferentialRelationshipSubtopic(): Subtopic {
  return {
    id: "self-referential-relationship",
    title: "Self-Referential Relationship",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Self-Referential Relationship</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Self-Referential Relationship?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A self-referential relationship occurs when an entity is related to itself. This is also known as a unary or recursive relationship.
            </p>
          </div>
        </div>

        <!-- Examples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Examples</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Employee and Manager Relationship</strong>:<br>
                An <strong>Employee</strong> can be supervised by another <strong>Employee</strong> (Manager).<br>
                <span class="text-sm text-gray-500">
                  <strong>ER Representation:</strong><br>
                  <code>Employee (Emp_ID, Name, Manager_ID)</code>
                </span>
              </li>
              <li>
                <strong>Prerequisite Courses</strong>:<br>
                A <strong>Course</strong> can be a prerequisite for another <strong>Course</strong>.<br>
                <span class="text-sm text-gray-500">
                  <strong>ER Representation:</strong><br>
                  <code>Course (Course_ID, Course_Name, Prerequisite_Course_ID)</code>
                </span>
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
                <li>
                  <strong>Employee and Manager Relationship</strong>:<br>
                  An <strong>Employee</strong> (e.g., <strong>Emp_ID: 101</strong>) is supervised by another <strong>Employee</strong> (e.g., <strong>Manager_ID: 102</strong>).
                </li>
                <li>
                  <strong>Prerequisite Courses</strong>:<br>
                  A <strong>Course</strong> (e.g., <strong>Course_ID: C101</strong>) has a prerequisite <strong>Course</strong> (e.g., <strong>Prerequisite_Course_ID: C100</strong>).
                </li>
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
              <li>Self-referential relationships are used when an entity needs to reference itself.</li>
              <li>They are commonly used in hierarchical or recursive data structures.</li>
              <li>Examples include employee-manager relationships and prerequisite course dependencies.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSelfReferentialRelationshipSubtopic;