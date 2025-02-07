import { Subtopic } from './dbms';

function createHowToFindNormalFormSubtopic(): Subtopic {
  return {
    id: "how-to-find-normal-form",
    title: "How to Find Normal Form?",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">How to Find Normal Form?</h2>
          </div>
        </div>

        <!-- Introduction Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Introduction</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Normalization is the process of organizing a database to reduce redundancy and improve data integrity. To determine the normal form of a table, follow these steps:
            </p>
          </div>
        </div>

        <!-- Steps to Check Normal Forms -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Steps to Check Normal Forms</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Check 1NF:</strong> Ensure all columns contain atomic (indivisible) values and there are no repeating groups.
              </li>
              <li>
                <strong>Check 2NF:</strong> Ensure the table is in 1NF and has no partial dependencies (all non-key attributes depend on the entire primary key).
              </li>
              <li>
                <strong>Check 3NF:</strong> Ensure the table is in 2NF and has no transitive dependencies (non-key attributes depend only on the primary key).
              </li>
              <li>
                <strong>Check BCNF:</strong> Ensure the table is in 3NF and every determinant is a super key.
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
              Consider the following table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">CourseID</th>
                    <th class="px-4 py-2">CourseName</th>
                    <th class="px-4 py-2">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">C101</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Dr. Smith</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">C102</td>
                    <td class="border px-4 py-2">Science</td>
                    <td class="border px-4 py-2">Dr. Brown</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Step 1: Check 1NF</strong><br>
              Ensure all columns contain atomic values. In this table, all values are atomic, so it satisfies 1NF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Step 2: Check 2NF</strong><br>
              Ensure there are no partial dependencies. Here, <strong>CourseName</strong> depends only on <strong>CourseID</strong>, not on the entire primary key (<strong>StudentID, CourseID</strong>). This violates 2NF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Step 3: Check 3NF</strong><br>
              Ensure there are no transitive dependencies. Since the table is not in 2NF, it cannot be in 3NF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Step 4: Check BCNF</strong><br>
              Since the table is not in 3NF, it cannot be in BCNF.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Solution:</strong> Decompose the table into two tables:
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">CourseID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">C101</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">C102</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">CourseID</th>
                    <th class="px-4 py-2">CourseName</th>
                    <th class="px-4 py-2">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">C101</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Dr. Smith</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">C102</td>
                    <td class="border px-4 py-2">Science</td>
                    <td class="border px-4 py-2">Dr. Brown</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, both tables are in 2NF and can be further normalized to 3NF and BCNF if needed.
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
              <li>Always start by checking 1NF, then proceed to higher normal forms.</li>
              <li>Decompose tables carefully to ensure lossless join and dependency preservation.</li>
              <li>Normalization improves data integrity and reduces redundancy but may increase complexity.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createHowToFindNormalFormSubtopic;