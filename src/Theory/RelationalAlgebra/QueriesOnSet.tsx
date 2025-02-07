import { Subtopic } from './dbms';

function createSetOperationsSubtopic(): Subtopic {
  return {
    id: "set-operations",
    title: "Set Operations in Relational Algebra",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Set Operations in Relational Algebra</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Set Operations?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Set Operations</strong> are operations that combine two relations (tables) to produce a new relation. These operations are fundamental in relational algebra and include Union (∪), Intersection (∩), and Set Difference (-).
            </p>
          </div>
        </div>

        <!-- Operations Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of Set Operations</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The primary set operations in relational algebra are:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Union (∪):</strong> Combines all unique rows from two relations.</li>
              <li><strong>Intersection (∩):</strong> Retrieves rows that are common to both relations.</li>
              <li><strong>Set Difference (-):</strong> Retrieves rows that are in the first relation but not in the second.</li>
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
              Consider two tables <strong>CourseA</strong> and <strong>CourseB</strong> with the following data:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-gray-700 leading-relaxed mt-4">Table: CourseA</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Charlie</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-gray-700 leading-relaxed mt-4">Table: CourseB</p>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Union Operation:</strong> Find students enrolled in either CourseA or CourseB (or both).
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Charlie</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Intersection Operation:</strong> Find students enrolled in both CourseA and CourseB.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              <strong>Set Difference Operation:</strong> Find students enrolled in CourseA but not in CourseB.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="px-4 py-2">StudentID</th>
                    <th class="px-4 py-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Alice</td>
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
              <li>Set operations are essential for combining and comparing data from multiple tables.</li>
              <li>Union, Intersection, and Set Difference are the core set operations in relational algebra.</li>
              <li>These operations are directly supported in SQL through UNION, INTERSECT, and EXCEPT keywords.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSetOperationsSubtopic;