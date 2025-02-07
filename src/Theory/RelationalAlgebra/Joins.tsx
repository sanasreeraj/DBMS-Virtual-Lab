import { Subtopic } from './dbms';

function createJoinsSubtopic(): Subtopic {
  return {
    id: "joins",
    title: "Joins in Relational Algebra",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Joins in Relational Algebra</h2>
          </div>
        </div>

        <!-- Natural Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Natural Join (⨝)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Natural Join</strong> combines two relations based on common attributes automatically.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Notation:</strong> R ⨝ S
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> If <strong>Students(ID, Name, Age)</strong> and <strong>Enrollments(ID, Course)</strong> have a common column <strong>ID</strong>, then:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <code class="text-gray-700">Students ⨝ Enrollments</code>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              will merge them on <strong>ID</strong>.
            </p>
          </div>
        </div>

        <!-- Conditional Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Conditional Join (⨝ condition)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The <strong class="text-blue-600">Conditional Join</strong> is similar to the Natural Join, but we explicitly specify a condition.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Notation:</strong> R ⨝ condition S
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> 
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <code class="text-gray-700">Students ⨝ Students.Age > 20 Enrollments</code>
            </div>
          </div>
        </div>

        <!-- Outer Joins Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Outer Joins</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Outer Joins</strong> are used when we want to include unmatched tuples.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Left Outer Join (⟕)</strong> – Keeps all tuples from the left relation.
              </li>
              <li>
                <strong>Right Outer Join (⟖)</strong> – Keeps all tuples from the right relation.
              </li>
              <li>
                <strong>Full Outer Join (⟗)</strong> – Keeps all tuples from both relations.
              </li>
            </ul>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Natural Join automatically combines relations based on common attributes.</li>
              <li>Conditional Join allows for explicit conditions to be specified.</li>
              <li>Outer Joins are essential for including unmatched tuples in the result.</li>
              <li>Understanding these joins is crucial for mastering relational algebra and SQL.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createJoinsSubtopic;