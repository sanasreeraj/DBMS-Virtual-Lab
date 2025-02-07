import { Subtopic } from './dbms';

function createDivisionOperatorSubtopic(): Subtopic {
  return {
    id: "division-operator",
    title: "Division Operator in Relational Algebra",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Division Operator (÷)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is the Division Operator?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Division Operator (÷)</strong> is a binary operation in relational algebra used to find tuples in one relation that have a corresponding set of tuples in another relation. It is particularly useful for queries like "Find all students who are enrolled in all available courses."
            </p>
          </div>
        </div>

        <!-- Syntax and Explanation Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Syntax and Explanation</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The division operation is represented as:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <code class="text-gray-700">
                R ÷ S
              </code>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Here, <strong>R</strong> is a relation with attributes A and B, and <strong>S</strong> is a relation with attribute B. The result of the division operation is a relation with attribute A, containing tuples from R that have all corresponding tuples in S.
            </p>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider two tables:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700"><strong>Students(Course, Student_ID)</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Student_ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Science</td>
                    <td class="border px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <p class="text-gray-700"><strong>Courses(Course)</strong></p>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              To find students who are enrolled in all available courses, we use the division operation:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <code class="text-gray-700">
                Students(Course, Student_ID) ÷ Courses(Course)
              </code>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              The result will be:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Student_ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This means <strong>Student_ID 1</strong> is enrolled in all courses (Math and Science).
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
              <li>The division operator is used to solve queries involving "all" or "every" conditions.</li>
              <li>It is a powerful tool for finding relationships between two relations.</li>
              <li>Understanding division is essential for complex database queries and optimizations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createDivisionOperatorSubtopic;