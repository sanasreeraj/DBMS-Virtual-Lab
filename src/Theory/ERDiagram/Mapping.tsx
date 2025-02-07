import { Subtopic } from './dbms';

function createMappingRelationshipsSubtopic(): Subtopic {
  return {
    id: "mapping-relationships",
    title: "Mapping Relationships",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Mapping Relationships</h2>
          </div>
        </div>

        <!-- One-to-One Mapping Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">One-to-One (1:1) Mapping</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Each entity in set A is related to at most one entity in set B.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed">
                <strong>Example:</strong> Each Student has one Student ID.
              </p>
              <pre class="mt-2 bg-gray-100 p-4 rounded-md text-sm">
Student (Student_ID, Name)  
Student_ID → Name (Unique)</pre>
            </div>
          </div>
        </div>

        <!-- One-to-Many Mapping Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">One-to-Many (1:M) Mapping</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              One entity in set A is related to multiple entities in set B, but each entity in B is related to only one entity in A.
            </p>
            <div class="bg-purple-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed">
                <strong>Example:</strong> One Manager manages many Employees, but each Employee has only one Manager.
              </p>
              <pre class="mt-2 bg-gray-100 p-4 rounded-md text-sm">
Manager (Manager_ID, Name)  
Employee (Emp_ID, Name, Manager_ID)</pre>
            </div>
          </div>
        </div>

        <!-- Many-to-Many Mapping Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Many-to-Many (M:M) Mapping</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Many entities in A are related to many entities in B.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed">
                <strong>Example:</strong> A Student can enroll in multiple Courses, and each Course can have multiple Students.
              </p>
              <pre class="mt-2 bg-gray-100 p-4 rounded-md text-sm">
Student (Student_ID, Name)  
Course (Course_ID, Course_Name)  
Enrollment (Student_ID, Course_ID)</pre>
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
              <li>One-to-One relationships are used when each entity in one set corresponds to exactly one entity in another set.</li>
              <li>One-to-Many relationships are common in hierarchical structures, such as a manager managing multiple employees.</li>
              <li>Many-to-Many relationships require a junction table to manage the associations between entities.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createMappingRelationshipsSubtopic;