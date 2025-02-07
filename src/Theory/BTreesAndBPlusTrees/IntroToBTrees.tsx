import { Subtopic } from './dbms';

function createBTreesSubtopic(): Subtopic {
  return {

    id: "b-trees",
    title: "Introduction to B-Trees in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Introduction to B-Trees in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are B-Trees?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In DBMS (Database Management Systems), a <strong class="text-blue-600">B-Tree</strong> is used for indexing large datasets. It helps in fast searching, inserting, and deleting records in a database. Since database records are stored on disk, minimizing disk accesses is crucial for performance.
            </p>
          </div>
        </div>

        <!-- Why Use B-Trees Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Why are B-Trees used in DBMS?</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Fast Searching</strong> → B-Trees keep data sorted, making searches efficient.</li>
              <li><strong>Balanced Structure</strong> → Ensures that tree height remains low, reducing disk reads.</li>
              <li><strong>Efficient Insertions & Deletions</strong> → Keeps database indexing efficient.</li>
              <li><strong>Supports Range Queries</strong> → Useful in queries like <code>SELECT * FROM Employee WHERE Salary BETWEEN 50,000 AND 80,000</code>.</li>
            </ul>
          </div>
        </div>

        <!-- Example in DBMS Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example in DBMS</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider a database table for Employee records:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
Employee_ID   Name    Salary
101           John    50,000
203           Alice   70,000
305           Mike    90,000
408           David   60,000
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              A B-Tree index on <strong>Employee_ID</strong> might look like this (Order = 3):
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
       [203]
      /     \\
 [101]     [305, 408]
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              If we search for <strong>Employee_ID = 305</strong>, we follow this path:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Compare with <strong>203</strong> → go right.</li>
              <li>Compare with <strong>305</strong> → found!</li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              This reduces the number of disk accesses significantly.
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
              <li>B-Trees are widely used in DBMS for indexing large datasets efficiently.</li>
              <li>They provide fast searching, insertion, and deletion operations.</li>
              <li>B-Trees are balanced, ensuring low tree height and minimizing disk accesses.</li>
              <li>They support range queries, making them ideal for database operations.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createBTreesSubtopic;