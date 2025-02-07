import { Subtopic } from './dbms';

function createSQLDivisionOperatorSubtopic(): Subtopic {
  return {
    id: "sql-division-operator",
    title: "Division Operator in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Division Operator in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the Division Operator?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Division Operator</strong> in relational algebra is used to find values associated with all values in another set. In SQL, this can be implemented using <strong>NOT EXISTS</strong> and <strong>EXCEPT</strong> clauses.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Find Students Who Have Taken All Courses in 'Computer Science'</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The following SQL query demonstrates how to find students who have taken all courses in the 'Computer Science' department:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT DISTINCT student_id  
FROM enrollments e1  
WHERE NOT EXISTS (  
    SELECT course_id FROM courses WHERE department = 'Computer Science'  
    EXCEPT  
    SELECT course_id FROM enrollments e2 WHERE e1.student_id = e2.student_id  
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>How it works:</strong>
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>The <strong>EXCEPT</strong> clause ensures that the student is enrolled in all courses of the 'Computer Science' department.</li>
                <li>If the student has enrolled in all courses, the <strong>NOT EXISTS</strong> clause returns <strong>true</strong>, and the student is included in the result.</li>
              </ul>
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
              <li>The division operator is used to find values associated with all values in another set.</li>
              <li>In SQL, it can be implemented using <strong>NOT EXISTS</strong> and <strong>EXCEPT</strong> clauses.</li>
              <li>This approach is useful for queries where you need to find records that satisfy all conditions in a related set.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLDivisionOperatorSubtopic;