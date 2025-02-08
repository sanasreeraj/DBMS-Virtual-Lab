import { Subtopic } from './dbms';

function createDataIndependenceSubtopic(): Subtopic {
  return {
    id: "data-independence",
    title: "Data Independence in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Data Independence in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Data Independence?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">Data independence</strong> refers to the ability to change the schema at one level of the DBMS without affecting other levels. It allows for easier maintenance and greater flexibility when managing the database.
            </p>
          </div>
        </div>

        <!-- Logical Data Independence Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">1. Logical Data Independence</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Refers to the ability to change the <strong>conceptual schema</strong> without affecting the <strong>external schema</strong> (user views).
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> Adding new fields (e.g., a new "phone number" column) to a table does not affect how users access the data.
            </p>
          </div>
        </div>

        <!-- Physical Data Independence Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">2. Physical Data Independence</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Refers to the ability to change the <strong>internal schema</strong> (physical storage) without affecting the <strong>conceptual schema</strong>.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> Moving the database from one type of storage (e.g., hard disk) to another (e.g., SSD) does not affect the logical structure or user views of the data.
            </p>
          </div>
        </div>

        <!-- Importance of Data Independence Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Why is Data Independence Important?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Data independence is a crucial feature because it allows for changes to the system without disrupting the overall database operation. For instance, if the underlying storage method is upgraded or changed, users and applications can continue to interact with the database as usual.
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
              <li><strong>Data independence</strong> allows changes to one level of the database schema without affecting other levels.</li>
              <li><strong>Logical Data Independence</strong> ensures changes to the conceptual schema (e.g., adding new fields) do not impact user views.</li>
              <li><strong>Physical Data Independence</strong> ensures changes to the internal schema (e.g., storage methods) do not affect the logical structure or user views.</li>
              <li>Data independence simplifies database maintenance, enhances flexibility, and ensures uninterrupted operation during system upgrades or changes.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createDataIndependenceSubtopic; 
