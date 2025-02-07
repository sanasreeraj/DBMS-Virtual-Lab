import { Subtopic } from './dbms';

function createRelationalAlgebraSummarySubtopic(): Subtopic {
  return {
    id: "relational-algebra-op",
    title: "Summary of Relational Algebra Operations",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Relational Algebra Operations</h2>
          </div>
        </div>

        <!-- Selection (σ) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Selection (σ)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Filters rows based on a specified condition.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Select all employees with a salary greater than 50000."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>σ<sub>Salary > 50000</sub>(Employees)</code></pre>
            </div>
          </div>
        </div>

        <!-- Projection (π) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Projection (π)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Selects specific columns from a relation.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Select only the names and departments of employees."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>π<sub>Name, Department</sub>(Employees)</code></pre>
            </div>
          </div>
        </div>

        <!-- Cartesian Product (×) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Cartesian Product (×)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Combines every tuple of one relation with every tuple of another.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Combine every employee with every department."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees × Departments</code></pre>
            </div>
          </div>
        </div>

        <!-- Union (∪) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Union (∪)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Combines tuples from two relations and removes duplicates.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Combine the list of employees from two different branches."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees_Branch1 ∪ Employees_Branch2</code></pre>
            </div>
          </div>
        </div>

        <!-- Intersection (∩) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Intersection (∩)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Finds common tuples in two relations.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find employees who work in both Branch 1 and Branch 2."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees_Branch1 ∩ Employees_Branch2</code></pre>
            </div>
          </div>
        </div>

        <!-- Set Difference (-) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Set Difference (-)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Finds tuples present in one relation but not in another.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find employees who work in Branch 1 but not in Branch 2."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees_Branch1 - Employees_Branch2</code></pre>
            </div>
          </div>
        </div>

        <!-- Natural Join (⨝) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Natural Join (⨝)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Combines tables based on common attributes.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Join Employees and Departments on the Department ID."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees ⨝ Departments</code></pre>
            </div>
          </div>
        </div>

        <!-- Conditional Join (⨝ condition) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Conditional Join (⨝ condition)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Joins tables based on a specific condition.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Join Employees and Departments where the Department ID matches and the salary is greater than 50000."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees ⨝<sub>Employees.DepartmentID = Departments.DepartmentID AND Salary > 50000</sub> Departments</code></pre>
            </div>
          </div>
        </div>

        <!-- Outer Joins (⟕, ⟖, ⟗) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Outer Joins (⟕, ⟖, ⟗)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Keeps unmatched tuples from one or both tables.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Perform a left outer join to include all employees, even those without a department."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees ⟕ Departments</code></pre>
            </div>
          </div>
        </div>

        <!-- Division Operator (÷) Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Division Operator (÷)</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Finds tuples related to all values in another relation.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find employees who work in all departments."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>Employees ÷ Departments</code></pre>
            </div>
          </div>
        </div>

        <!-- Max/Min Tuples on Join Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Max/Min Tuples on Join</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              The number of tuples in the result depends on the join type and the sizes of the relations.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "The result of a natural join between Employees and Departments will have a number of tuples between the minimum and maximum possible based on the join condition."
            </p>
          </div>
        </div>

        <!-- Tuple Relational Calculus Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Tuple Relational Calculus</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Specifies queries using logical predicates.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> "Find all employees who earn more than 50000."
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700"><code>{ t | t ∈ Employees ∧ t.Salary > 50000 }</code></pre>
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
              <li>Relational algebra forms the foundation for SQL and database querying.</li>
              <li>Understanding these operations is crucial for designing efficient database queries.</li>
              <li>These operations can be combined to form complex queries for data retrieval and manipulation.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createRelationalAlgebraSummarySubtopic;