import { Subtopic } from './dbms';

function createOLAPVsOLTPSubtopic(): Subtopic {
  return {
    id: "olap-oltp",
    title: "OLAP and OLTP in DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">OLAP and OLTP in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are OLAP and OLTP?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">OLAP (Online Analytical Processing)</strong> and <strong class="text-blue-600">OLTP (Online Transaction Processing)</strong> are two types of database systems designed for different purposes. OLAP is used for complex analysis and reporting, while OLTP is used for real-time transaction processing.
            </p>
          </div>
        </div>

        <!-- OLAP Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">OLAP (Online Analytical Processing)</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Designed for complex queries, reporting, and data analysis.</li>
              <li>Works with large volumes of historical data, often used in data warehousing environments.</li>
              <li>Optimized for read-heavy operations and multi-dimensional analysis.</li>
              <li>Supports operations like slicing, dicing, drilling down, and pivoting.</li>
              <li><strong>Example:</strong> A business analyst querying a data warehouse for sales data across multiple regions, months, and product categories.</li>
            </ul>
          </div>
        </div>

        <!-- OLTP Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">OLTP (Online Transaction Processing)</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Designed for handling real-time transactions, such as updates to databases and inserting new data.</li>
              <li>Optimized for write-heavy operations and rapid responses to queries.</li>
              <li>Ensures consistency and integrity for transactional data, especially when multiple users are accessing the system simultaneously.</li>
              <li><strong>Example:</strong> A bank's database that processes customer's deposits, withdrawals, and transfers in real-time.</li>
            </ul>
          </div>
        </div>

        <!-- Key Differences Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Differences</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Purpose:</strong> OLAP is focused on analysis, while OLTP focuses on transactions.</li>
              <li><strong>Query Complexity:</strong> OLAP supports complex queries and aggregations, while OLTP supports simple queries with a high volume of frequent transactions.</li>
              <li><strong>Data Volume:</strong> OLAP works with large volumes of historical data, while OLTP handles real-time transactional data.</li>
              <li><strong>Operations:</strong> OLAP is read-heavy, while OLTP is write-heavy.</li>
            </ul>
          </div>
        </div>

        <!-- Examples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Examples</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>OLAP:</strong> Business Intelligence systems, data mining, and data warehousing.</li>
              <li><strong>OLTP:</strong> Banking systems, e-commerce platforms, and airline reservation systems.</li>
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
              <li>OLAP and OLTP serve different purposes: OLAP for analysis and OLTP for transactions.</li>
              <li>OLAP is optimized for complex queries and historical data, while OLTP is optimized for real-time transaction processing.</li>
              <li>Understanding the differences between OLAP and OLTP helps in designing the right database system for specific use cases.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createOLAPVsOLTPSubtopic; 
