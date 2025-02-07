import { Subtopic } from './dbms';

function createTupleRelationalCalculusSubtopic(): Subtopic {
  return {
    id: "tuple-relational-calculus",
    title: "Tuple Relational Calculus",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Tuple Relational Calculus</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Tuple Relational Calculus?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Tuple Relational Calculus</strong> is a declarative approach to querying databases, where we describe what data we want without specifying how to retrieve it. It uses logical predicates to specify conditions.
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
              <strong>Tuple Relational Calculus Query:</strong> Find students with age > 20.
            </p>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <pre class="text-gray-700 leading-relaxed">
                { t | t ∈ Students ∧ t.Age > 20 }
              </pre>
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
              <li>Tuple Relational Calculus is a non-procedural query language.</li>
              <li>It focuses on what to retrieve rather than how to retrieve it.</li>
              <li>It uses logical expressions to define the conditions for data retrieval.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createTupleRelationalCalculusSubtopic;