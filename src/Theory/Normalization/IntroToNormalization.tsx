import { Subtopic } from './dbms';

function createNormalizationSubtopic(): Subtopic {
  return {
    id: "normalization",
    title: "Introduction to Normalization",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Normalization</h2>
          </div>

        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Normalization?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">

              <strong class="text-blue-600">Normalization</strong> is a process in database design to remove redundancy and ensure data integrity. It organizes tables efficiently by dividing larger tables into smaller ones and establishing relationships.
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

              Consider a table storing customer orders:
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <table class="w-full text-gray-700 leading-relaxed">
                <thead>

                  <tr>
                    <th class="border px-4 py-2">OrderID</th>
                    <th class="border px-4 py-2">CustomerName</th>
                    <th class="border px-4 py-2">CustomerAddress</th>
                    <th class="border px-4 py-2">Product</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">John Doe</td>
                    <td class="border px-4 py-2">NY, USA</td>
                    <td class="border px-4 py-2">Laptop</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">John Doe</td>
                    <td class="border px-4 py-2">NY, USA</td>
                    <td class="border px-4 py-2">Mouse</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Here, the customer information is repeated. Normalization will create a separate Customers table, reducing redundancy.
            </p>
          </div>
        </div>

        <!-- Note Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Note</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Normalization helps in reducing data redundancy and improving data integrity.</li>
              <li>It involves dividing larger tables into smaller, related tables and establishing relationships between them.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createNormalizationSubtopic;