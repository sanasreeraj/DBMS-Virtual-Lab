import { Subtopic } from './dbms';

function createRelationalAlgebraSubtopic(): Subtopic {
  return {
    id: "relational-algebra",
    title: "Introduction to Relational Algebra",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Introduction to Relational Algebra</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Relational Algebra?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Relational Algebra</strong> is a procedural query language used to retrieve data from relational databases. It provides a set of operations to manipulate and retrieve data from relations (tables).
            </p>
          </div>
        </div>

        <!-- Operations Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of Operations</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Relational Algebra operations can be divided into:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Unary Operations:</strong> Work on a single relation – Selection, Projection, Rename.</li>
              <li><strong>Binary Operations:</strong> Work on two relations – Union, Intersection, Cartesian Product, Join.</li>
              <li><strong>Set Operations:</strong> Union, Intersection, Set-Difference, Division.</li>
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
              Consider a table <strong>Students</strong> with the following attributes:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">20</td>
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">22</td>
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Selection Operation:</strong> Select students who are older than 21.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">22</td>
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Projection Operation:</strong> Project the Name and Course attributes.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">Alice</td>
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">Bob</td>
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                </tbody>
              </table>
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
              <li>Relational Algebra forms the foundation for SQL queries.</li>
              <li>It provides a procedural way to manipulate and retrieve data from relational databases.</li>
              <li>Understanding relational algebra is crucial for database design and optimization.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createRelationalAlgebraSubtopic;