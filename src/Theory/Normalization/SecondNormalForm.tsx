import { Subtopic } from './dbms';

function createSecondNormalFormSubtopic(): Subtopic {
  return {
    id: "second-normal-form",
    title: "Second Normal Form (2NF)",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Second Normal Form (2NF)</h2>
          </div>

        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Second Normal Form (2NF)?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              A table is in <strong class="text-blue-600">Second Normal Form (2NF)</strong> if:
            </p>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">

              <li>It is in <strong>1NF</strong> (First Normal Form).</li>
              <li>It has no <strong>partial dependencies</strong> (i.e., non-key attributes depend on the whole primary key, not just part of it).</li>
            </ol>
          </div>
        </div>

        <!-- Example Section (Before 2NF) -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example (Before 2NF)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              Consider the following table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-gray-700">
                <thead>

                  <tr>
                    <th class="border p-2">StudentID</th>
                    <th class="border p-2">CourseID</th>
                    <th class="border p-2">StudentName</th>
                    <th class="border p-2">CourseName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">1</td>
                    <td class="border p-2">C1</td>
                    <td class="border p-2">John</td>
                    <td class="border p-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border p-2">2</td>
                    <td class="border p-2">C2</td>
                    <td class="border p-2">Alice</td>
                    <td class="border p-2">Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Issue</strong>: <strong>StudentName</strong> depends only on <strong>StudentID</strong>, not <strong>CourseID</strong>. This is a partial dependency, violating 2NF.
            </p>
          </div>
        </div>

        <!-- Example Section (After 2NF) -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example (After 2NF)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              To resolve the issue, we decompose the table into three tables:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed"><strong>Student</strong> Table:</p>
              <table class="w-full text-gray-700 mb-4">
                <thead>

                  <tr>
                    <th class="border p-2">StudentID</th>
                    <th class="border p-2">StudentName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">1</td>
                    <td class="border p-2">John</td>
                  </tr>
                  <tr>
                    <td class="border p-2">2</td>
                    <td class="border p-2">Alice</td>
                  </tr>
                </tbody>
              </table>

              <p class="text-gray-700 leading-relaxed"><strong>Course</strong> Table:</p>
              <table class="w-full text-gray-700 mb-4">
                <thead>
                  <tr>
                    <th class="border p-2">CourseID</th>
                    <th class="border p-2">CourseName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">C1</td>
                    <td class="border p-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border p-2">C2</td>
                    <td class="border p-2">Science</td>
                  </tr>
                </tbody>
              </table>

              <p class="text-gray-700 leading-relaxed"><strong>Enrollment</strong> Table:</p>
              <table class="w-full text-gray-700">
                <thead>
                  <tr>
                    <th class="border p-2">StudentID</th>
                    <th class="border p-2">CourseID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">1</td>
                    <td class="border p-2">C1</td>
                  </tr>
                  <tr>
                    <td class="border p-2">2</td>
                    <td class="border p-2">C2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, the tables are in <strong>2NF</strong> as there are no partial dependencies.
            </p>
          </div>
        </div>

        <!-- Note Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Note</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>2NF eliminates redundancy by ensuring non-key attributes depend on the entire primary key.</li>
              <li>It is a critical step in database normalization to improve data integrity and efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSecondNormalFormSubtopic;