import { Subtopic } from './dbms';

function createDBMSArchitectureSubtopic(): Subtopic {
  return {
    id: "dbms-architecture",
    title: "DBMS Architecture",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">DBMS Architecture</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is DBMS Architecture?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Database Management System (DBMS)</strong> is software that helps us store, manage, and retrieve data efficiently. The architecture of DBMS defines how data is stored, processed, and accessed by users.
            </p>
          </div>
        </div>

        <!-- Types of DBMS Architecture Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Types of DBMS Architecture</h3>
            </div>
            <div class="space-y-4">
              <!-- Single-Tier Architecture -->
              <div>
                <h4 class="text-lg font-semibold text-blue-600">Single-Tier Architecture (Monolithic Architecture)</h4>
                <p class="text-gray-700 leading-relaxed mb-2">
                  The database and the user interface exist on the same system.
                </p>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Example:</strong> Microsoft Access, where everything (database, UI, and logic) runs on a single computer.
                </p>
              </div>
              <!-- Two-Tier Architecture -->
              <div>
                <h4 class="text-lg font-semibold text-blue-600">Two-Tier Architecture (Client-Server Model)</h4>
                <p class="text-gray-700 leading-relaxed mb-2">
                  The database is on a server, and users access it using client applications.
                </p>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Example:</strong> A bank system where employees use software (client) to access a central database (server).
                </p>
              </div>
              <!-- Three-Tier Architecture -->
              <div>
                <h4 class="text-lg font-semibold text-blue-600">Three-Tier Architecture (Web-Based Model)</h4>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Presentation Layer (User Interface)</strong> → Handles user interactions.
                </p>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Application Layer (Business Logic)</strong> → Processes requests and applies logic.
                </p>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Database Layer</strong> → Stores and manages data.
                </p>
                <p class="text-gray-700 leading-relaxed mb-2">
                  <strong>Example:</strong> An online shopping website where customers access data via a web browser, while the server processes orders and retrieves data from the database.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Components of DBMS Architecture Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Components of DBMS Architecture</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Database</strong> → Stores the actual data.</li>
              <li><strong>DBMS Software</strong> → Manages data, security, and access.</li>
              <li><strong>User Interface</strong> → Allows users to interact with the database.</li>
              <li><strong>Query Processor</strong> → Executes database queries (e.g., SQL commands).</li>
              <li><strong>Transaction Manager</strong> → Ensures data consistency in case of failures.</li>
            </ul>
          </div>
        </div>

        <!-- Example Scenario Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example Scenario</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Imagine you are using Netflix:
            </p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Single-Tier:</strong> You download and store movies locally.</li>
              <li><strong>Two-Tier:</strong> You use the Netflix app (client) to access a central server storing movies.</li>
              <li><strong>Three-Tier:</strong> Netflix has a web interface (UI), a server handling business logic, and a database storing all movies.</li>
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
              <li>DBMS architecture defines how data is stored, processed, and accessed.</li>
              <li><strong>Single-Tier Architecture</strong> is simple but not scalable.</li>
              <li><strong>Two-Tier Architecture</strong> separates the client and server for better scalability.</li>
              <li><strong>Three-Tier Architecture</strong> is ideal for web-based applications, separating UI, logic, and data layers.</li>
              <li>Key components like the query processor and transaction manager ensure efficient and consistent data management.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createDBMSArchitectureSubtopic;
