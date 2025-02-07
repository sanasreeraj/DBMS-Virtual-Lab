import { Subtopic } from './dbms';

function createSQLConstraintsSubtopic(): Subtopic {
  return {
    id: "sql-constraints",
    title: "Constraints in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">SQL Constraints</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of Constraints</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong class="text-blue-600">PRIMARY KEY</strong>: Uniquely identifies each record</li>
              <li><strong class="text-blue-600">FOREIGN KEY</strong>: Links two tables together</li>
              <li><strong class="text-blue-600">NOT NULL</strong>: Ensures a column cannot have NULL values</li>
              <li><strong class="text-blue-600">UNIQUE</strong>: Ensures all values in a column are different</li>
              <li><strong class="text-blue-600">CHECK</strong>: Ensures a condition is met</li>
              <li><strong class="text-blue-600">DEFAULT</strong>: Assigns a default value</li>
            </ul>
          </div>
        </div>

        <!-- PRIMARY KEY & NOT NULL Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">PRIMARY KEY & NOT NULL Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Creating a table with PRIMARY KEY and NOT NULL constraints:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Each course must have a unique ID and course_name cannot be empty.
            </p>
          </div>
        </div>

        <!-- FOREIGN KEY Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">FOREIGN KEY Example</h3>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Links the Enrollments table to the Courses table through course_id.
            </p>
          </div>
        </div>

        <!-- CHECK Constraint Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">CHECK Constraint Example</h3>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
ALTER TABLE Students 
ADD CONSTRAINT age_check CHECK (age >= 18);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Ensures that students must be at least 18 years old.
            </p>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Constraints help maintain data integrity in your database</li>
              <li>They can be added during table creation or later using ALTER TABLE</li>
              <li>Multiple constraints can be applied to a single column</li>
              <li>Constraints prevent invalid data from being entered into the database</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLConstraintsSubtopic;