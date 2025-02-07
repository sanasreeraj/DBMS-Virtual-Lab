import { Subtopic } from './dbms';

function createERModelSubtopic(): Subtopic {
  return {
    id: "er-model",
    title: "Introduction to ER Model",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Introduction to ER Model</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the ER Model?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Entity-Relationship (ER) Model</strong> is a high-level data model used to describe real-world objects (entities) and their relationships. It is commonly used in database design to provide a clear structure before implementing a database.
            </p>
          </div>
        </div>

        <!-- Key Components Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Components of ER Model</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Entities</strong> – Real-world objects that store data.<br>
                <span class="text-sm text-gray-500">Example: A university database has entities like <strong>Student</strong>, <strong>Course</strong>, and <strong>Professor</strong>.</span>
              </li>
              <li>
                <strong>Attributes</strong> – Characteristics or properties of an entity.<br>
                <span class="text-sm text-gray-500">Example: A <strong>Student</strong> entity may have attributes like <strong>Student_ID</strong>, <strong>Name</strong>, and <strong>Age</strong>.</span>
              </li>
              <li>
                <strong>Relationships</strong> – Connections between two or more entities.<br>
                <span class="text-sm text-gray-500">Example: A <strong>Student</strong> "enrolls in" a <strong>Course</strong>.</span>
              </li>
              <li>
                <strong>Constraints</strong> – Rules that define relationships (One-to-One, One-to-Many, Many-to-Many).
              </li>
            </ul>
          </div>
        </div>

        <!-- ER Diagrams Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">ER Diagrams</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              ER diagrams are graphical representations of ER models. They use:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Rectangles</strong> for entities.</li>
              <li><strong>Ovals</strong> for attributes.</li>
              <li><strong>Diamonds</strong> for relationships.</li>
              <li><strong>Lines</strong> for connections.</li>
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
              Consider a university database:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>Entities</strong>: Student, Course, Professor.</li>
                <li><strong>Attributes</strong>: Student_ID, Name, Age, Course_ID, Course_Name, Professor_ID, Professor_Name.</li>
                <li><strong>Relationships</strong>: Student "enrolls in" Course, Professor "teaches" Course.</li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              The ER diagram for this database would visually represent these entities, attributes, and relationships.
            </p>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>The ER Model is a <strong>conceptual tool</strong> for database design.</li>
              <li>It helps in visualizing the structure of a database before implementation.</li>
              <li>ER diagrams are widely used to communicate database designs.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createERModelSubtopic;