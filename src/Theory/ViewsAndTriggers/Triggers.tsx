import { Subtopic } from './dbms';

function createSQLTriggersSubtopic(): Subtopic {
  return {
    id: "sql-triggers",
    title: "Triggers in SQL",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Triggers in SQL</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are Triggers?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Trigger</strong> is a special kind of SQL program that automatically runs when something happens in a table (like <strong>INSERT</strong>, <strong>UPDATE</strong>, or <strong>DELETE</strong> operations). Think of it as a reaction to an event in the database.
            </p>
          </div>
        </div>

        <!-- Why Use Triggers Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Why Use Triggers?</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Automatic actions</strong> – Execute code when data is inserted, updated, or deleted.</li>
              <li><strong>Data consistency</strong> – Prevents invalid data from entering tables.</li>
              <li><strong>Logging changes</strong> – Keeps track of modifications in a separate table.</li>
            </ul>
          </div>
        </div>

        <!-- Example: Creating a Trigger Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example: Creating a Trigger</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Suppose we have an <strong>Employees</strong> table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              We want to create a log every time an employee’s salary is updated. First, create a log table:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TABLE SalaryLog (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Now, create the trigger:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
CREATE TRIGGER salary_update_trigger
BEFORE UPDATE ON Employees
FOR EACH ROW
INSERT INTO SalaryLog (emp_id, old_salary, new_salary)
VALUES (OLD.emp_id, OLD.salary, NEW.salary);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- How It Works Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">How It Works?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              When someone updates an employee's salary in the <strong>Employees</strong> table, this trigger automatically adds a record to <strong>SalaryLog</strong>.
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>OLD.salary</strong> is the salary before the update.</li>
              <li><strong>NEW.salary</strong> is the salary after the update.</li>
            </ul>
          </div>
        </div>

        <!-- Testing the Trigger Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Testing the Trigger</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If we update an employee’s salary:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
UPDATE Employees SET salary = 60000 WHERE emp_id = 1;
                </code>
              </pre>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              The <strong>SalaryLog</strong> table will record this change:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
log_id  emp_id  old_salary  new_salary  change_date
1       1       50000.00    60000.00    2025-02-07 10:30:00
                </code>
              </pre>
            </div>
          </div>
        </div>

        <!-- Dropping a Trigger Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Dropping a Trigger</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you want to remove the trigger:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <pre class="text-gray-700">
                <code>
DROP TRIGGER salary_update_trigger;
                </code>
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
              <li>Triggers are automatic actions that execute when specific events (like <strong>INSERT</strong>, <strong>UPDATE</strong>, or <strong>DELETE</strong>) occur in a table.</li>
              <li>They are useful for maintaining data consistency, logging changes, and automating tasks.</li>
              <li>Use <strong>CREATE TRIGGER</strong> to define a trigger and <strong>DROP TRIGGER</strong> to remove it.</li>
              <li>Triggers can access the <strong>OLD</strong> and <strong>NEW</strong> values of the rows being modified.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createSQLTriggersSubtopic;