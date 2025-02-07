import { Subtopic } from './dbms';

function createTypesOfAttributesSubtopic(): Subtopic {
  return {
    id: "types-of-attributes",
    title: "Types of Attributes",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Types of Attributes</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Attributes?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Attributes describe an entity’s properties and are categorized into different types based on their characteristics and usage in the database.
            </p>
          </div>
        </div>

        <!-- Types of Attributes Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Types of Attributes</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Simple (Atomic) Attributes</strong> – Cannot be broken down further.<br>
              </li>
              <li>
                <strong>Composite Attributes</strong> – Can be divided into smaller meaningful attributes.<br>
              </li>
              <li>
                <strong>Derived Attributes</strong> – Attributes that can be derived from other attributes.<br>
              </li>
              <li>
                <strong>Multivalued Attributes</strong> – An entity may have multiple values for an attribute.<br>
              </li>
              <li>
                <strong>Key Attributes</strong> – Unique identifiers for an entity.<br>
              </li>
              <li>
                <strong>Stored Attributes</strong> – Attributes stored in the database without derivation.<br>
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
              Consider a <strong>Student</strong> entity:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>Simple Attribute</strong>: <strong>Roll Number</strong>.</li>
                <li><strong>Composite Attribute</strong>: <strong>Address</strong> → <strong>House Number</strong>, <strong>Street</strong>, <strong>City</strong>, <strong>Zip Code</strong>.</li>
                <li><strong>Derived Attribute</strong>: <strong>Age</strong> (derived from <strong>Date of Birth</strong>).</li>
                <li><strong>Multivalued Attribute</strong>: <strong>Phone Numbers</strong> (a student can have multiple phone numbers).</li>
                <li><strong>Key Attribute</strong>: <strong>Student_ID</strong> (uniquely identifies each student).</li>
                <li><strong>Stored Attribute</strong>: <strong>Date of Birth</strong> (stored in the database).</li>
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
              <li>Attributes define the properties of an entity in the ER model.</li>
              <li>Understanding attribute types is crucial for designing efficient databases.</li>
              <li>Key attributes ensure uniqueness, while derived attributes reduce redundancy.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createTypesOfAttributesSubtopic;