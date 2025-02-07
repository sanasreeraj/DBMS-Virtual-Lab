import { Subtopic } from './dbms';

function createFunctionalDependencySubtopic(): Subtopic {
  return {
    id: "functional-dependency",
    title: "Functional Dependency",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Functional Dependency</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Functional Dependency?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Functional Dependency (FD)</strong> means one column’s value determines another column’s value in a table. If column <strong>A</strong> determines column <strong>B</strong>, it is written as <strong>A → B</strong> (A determines B).
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Functional Dependency helps in:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Normalization</strong> (removing redundancy).</li>
              <li><strong>Finding candidate keys</strong>.</li>
              <li><strong>Ensuring data integrity</strong>.</li>
            </ul>
          </div>
        </div>

        <!-- How to Identify Functional Dependency -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">How to Identify Functional Dependency?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              To identify functional dependencies:
            </p>
            <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Check if one column determines another</strong> → For example, <strong>Student_ID → Student_Name</strong> (If you know a student's ID, you can determine their name).</li>
              <li><strong>Find functional dependencies from existing data</strong> → For example, in the table below, <strong>Student_ID → Student_Name</strong> holds, but <strong>Student_Name → Student_ID</strong> does not (because "Alice" appears twice).</li>
            </ol>
            <div class="bg-blue-50 rounded-lg p-4 mt-4">
              <table class="w-full text-gray-700">
                <thead>
                  <tr>
                    <th class="border px-4 py-2">Student_ID</th>
                    <th class="border px-4 py-2">Student_Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">101</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">102</td>
                    <td class="border px-4 py-2">Bob</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">103</td>
                    <td class="border px-4 py-2">Alice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Types of Functional Dependency -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of Functional Dependency</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-gray-700">
                <thead>
                  <tr>
                    <th class="border px-4 py-2">Type</th>
                    <th class="border px-4 py-2">Definition</th>
                    <th class="border px-4 py-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2"><strong>Full Dependency</strong></td>
                    <td class="border px-4 py-2">B depends completely on A.</td>
                    <td class="border px-4 py-2"><strong>Emp_ID → Emp_Name</strong></td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2"><strong>Partial Dependency</strong></td>
                    <td class="border px-4 py-2">Only part of a key determines B.</td>
                    <td class="border px-4 py-2"><strong>(Emp_ID, Dept_ID) → Dept_Name</strong>, but <strong>Dept_ID → Dept_Name</strong> is partial.</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2"><strong>Transitive Dependency</strong></td>
                    <td class="border px-4 py-2">A → B and B → C, so A → C.</td>
                    <td class="border px-4 py-2"><strong>A → B, B → C ⇒ A → C</strong></td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2"><strong>Trivial Dependency</strong></td>
                    <td class="border px-4 py-2">If B is a subset of A.</td>
                    <td class="border px-4 py-2"><strong>{A, B} → A</strong></td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2"><strong>Non-Trivial Dependency</strong></td>
                    <td class="border px-4 py-2">If B is not a subset of A.</td>
                    <td class="border px-4 py-2"><strong>A → B</strong> (B is not part of A)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Given Relation: <strong>R(A, B, C, D, E)</strong><br>
              Functional Dependencies:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → B</strong></li>
                <li><strong>B → C</strong></li>
                <li><strong>A, C → D</strong></li>
                <li><strong>D → E</strong></li>
              </ul>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Finding Functional Dependency Chains:
            </p>
            <div class="bg-purple-50 rounded-lg p-4">
              <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong>A → B → C</strong> (By applying <strong>A → B</strong> and <strong>B → C</strong>)</li>
                <li><strong>A, C → D</strong> (Since we got <strong>C</strong> from <strong>A</strong>, now <strong>A → D</strong>)</li>
                <li><strong>A → E</strong> (Since <strong>A → D</strong> and <strong>D → E</strong>, then <strong>A → E</strong>)</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Helps in <strong>normalization</strong> and finding <strong>candidate keys</strong>.</li>
              <li>Reduces <strong>data redundancy</strong> and improves <strong>data integrity</strong>.</li>
              <li>Used to check if functional dependencies hold in a given relation.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}
  
export default createFunctionalDependencySubtopic; 