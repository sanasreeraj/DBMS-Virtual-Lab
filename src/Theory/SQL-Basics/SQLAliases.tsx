import { Subtopic } from './dbms';

function createSQLAliasesSubtopic(): Subtopic {
  return {
    id: "sql-aliases",
    title: "Aliases in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Aliases in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Aliases?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Aliases</strong> are temporary names given to tables or columns in SQL to improve readability and simplify queries.
            </p>
          </div>
        </div>

        <!-- Column Alias Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Column Aliases</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Column aliases are used to rename columns in the output of a query. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT name AS StudentName, age AS StudentAge FROM Students;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              This query renames the <strong>name</strong> column to <strong>StudentName</strong> and the <strong>age</strong> column to <strong>StudentAge</strong> in the output.
            </p>
          </div>
        </div>

        <!-- Table Alias Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Table Aliases</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Table aliases are used to give a table a temporary name, often to shorten the query. Here's an example:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
SELECT s.name, s.age FROM Students AS s;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              In this query, <strong>s</strong> is an alias for the <strong>Students</strong> table, making the query more concise.
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
              <li>Aliases improve query readability and reduce complexity.</li>
              <li>Column aliases rename columns in the output, while table aliases provide shorthand for table names.</li>
              <li>Aliases are temporary and only exist for the duration of the query.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLAliasesSubtopic;