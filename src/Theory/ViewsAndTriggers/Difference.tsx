import { Subtopic } from './dbms';

function createViewsVsTriggersSubtopic(): Subtopic {
  return {
    id: "views-vs-triggers",
    title: "Key Differences Between Views and Triggers",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Key Differences Between Views and Triggers</h2>
          </div>
        </div>

        <!-- Overview Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Overview</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Views and Triggers are both powerful features in SQL, but they serve very different purposes. Below is a comparison of their key differences:
            </p>
          </div>
        </div>

        <!-- Comparison Table Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Comparison Table</h3>
            </div>
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr class="bg-blue-50">
                  <th class="py-2 px-4 border-b text-left">Feature</th>
                  <th class="py-2 px-4 border-b text-left">Views</th>
                  <th class="py-2 px-4 border-b text-left">Triggers</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50">
                  <td class="py-2 px-4 border-b">Purpose</td>
                  <td class="py-2 px-4 border-b">Virtual table to simplify queries</td>
                  <td class="py-2 px-4 border-b">Automatically runs on insert/update/delete</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="py-2 px-4 border-b">Stores Data?</td>
                  <td class="py-2 px-4 border-b">No</td>
                  <td class="py-2 px-4 border-b">No</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="py-2 px-4 border-b">Use Case</td>
                  <td class="py-2 px-4 border-b">Read data in a structured way</td>
                  <td class="py-2 px-4 border-b">Automate actions based on table changes</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="py-2 px-4 border-b">Example</td>
                  <td class="py-2 px-4 border-b">View showing only student names and grades</td>
                  <td class="py-2 px-4 border-b">Log changes when salary is updated</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="py-2 px-4 border-b">Can Modify Data?</td>
                  <td class="py-2 px-4 border-b">Yes (if updatable)</td>
                  <td class="py-2 px-4 border-b">No, but it can insert/update other tables</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Views</strong> are virtual tables that simplify data access and do not store data.</li>
              <li><strong>Triggers</strong> are used to automate actions when specific events (like insert, update, or delete) occur on a table.</li>
              <li>Views are primarily used for reading data, while triggers are used for automating tasks based on data changes.</li>
              <li>Views can sometimes be used to modify data (if they are updatable), whereas triggers cannot directly modify the data that invoked them but can modify other tables.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createViewsVsTriggersSubtopic;