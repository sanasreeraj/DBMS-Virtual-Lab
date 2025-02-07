import { Subtopic } from './dbms';

function createWeakEntitySubtopic(): Subtopic {
  return {
    id: "weak-entity",
    title: "Weak Entity in ER Diagrams",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Weak Entity</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Weak Entity?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong>Weak Entity</strong> is an entity that cannot be uniquely identified without being associated with another entity. It does not have a primary key and depends on a strong entity.
            </p>
          </div>
        </div>

        <!-- Characteristics Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Characteristics of Weak Entities</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>No Primary Key</strong> – Instead, they use a foreign key from the strong entity.
              </li>
              <li>
                <strong>Existence Dependency</strong> – They cannot exist without a strong entity.
              </li>
              <li>
                <strong>Has a Discriminator (Partial Key)</strong> – Used to differentiate weak entities related to the same strong entity.
              </li>
              <li>
                <strong>Represented with Double Rectangle in ER Diagram</strong> – Weak entities are enclosed in a double rectangle, and their relationship with the strong entity is shown with a double diamond.
              </li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example of Weak Entity</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Banking System:</strong>
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>
                  <strong>Strong Entity:</strong> Customer (Customer_ID, Name)
                </li>
                <li>
                  <strong>Weak Entity:</strong> Account (Account_Number, Account_Type, Balance)
                </li>
                <li>
                  <strong>Relationship:</strong> A Customer owns multiple Accounts, but an Account cannot exist without a Customer.
                </li>
              </ul>
              <pre class="mt-2 bg-gray-100 p-4 rounded-md text-sm">
Customer (Customer_ID, Name)  
Account (Account_Number, Account_Type, Balance, Customer_ID)</pre>
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
              <li>Weak entities rely on strong entities for their existence and identification.</li>
              <li>They are represented with a double rectangle in ER diagrams.</li>
              <li>A discriminator (partial key) is used to uniquely identify weak entities associated with the same strong entity.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createWeakEntitySubtopic;