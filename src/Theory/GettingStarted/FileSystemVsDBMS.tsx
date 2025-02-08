import { Subtopic } from './dbms';

function createFileSystemVsDBMSSubtopic(): Subtopic {
  return {
    id: "file-system-dbms",
    title: "File Systems vs DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">File Systems vs DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What are File Systems and DBMS?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-blue-600">File Systems</strong> and <strong class="text-purple-600">Database Management Systems (DBMS)</strong> are both used to store and manage data, but they differ significantly in terms of functionality and features.
            </p>
          </div>
        </div>

        <!-- File System Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">File System</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                Data is stored in files and directories without a predefined structure.
              </li>
              <li>
                There are no relationships between different files. For instance, in a file system, you might have a <strong>customer_data.txt</strong> file and an <strong>orders_data.txt</strong> file, but the system does not automatically link customers to their orders.
              </li>
              <li>
                High risk of data redundancy: the same data might be stored in multiple files. For example, the customer’s name and address might be repeated in several order records.
              </li>
              <li>
                Lacks advanced security, integrity, and concurrency control mechanisms. A file system might not restrict access to certain files.
              </li>
              <li>
                Suited for small applications with minimal data complexity.
              </li>
            </ul>
          </div>
        </div>

        <!-- DBMS Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">DBMS</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                Data is stored in structured tables, often related to each other.
              </li>
              <li>
                It enforces data integrity and consistency, ensuring that data is stored logically and without redundancy. For example, an <strong>orders</strong> table can reference a <strong>customers</strong> table, ensuring that no customer information is repeated.
              </li>
              <li>
                Supports complex queries and joins, allowing users to access and manipulate data across tables easily. For instance, a user could query for all orders made by a particular customer in a single SQL query.
              </li>
              <li>
                DBMS is optimized for multi-user access and transactions, preventing data corruption from simultaneous updates.
              </li>
              <li>
                Provides security features such as user roles, passwords, and encryption to protect sensitive data.
              </li>
              <li>
                Suited for large, complex applications like banking systems, e-commerce platforms, and social media platforms.
              </li>
            </ul>
          </div>
        </div>

        <!-- Examples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-purple-600">Examples</h3>
            </div>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>
                  <strong>File System</strong>: Storing data in Excel spreadsheets or plain text files.
                </li>
                <li>
                  <strong>DBMS</strong>: Managing user accounts, orders, products, and payments in an e-commerce website using a DBMS like MySQL or PostgreSQL.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Insights Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Insights</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>File systems are simple and suitable for small-scale applications with minimal data complexity.</li>
              <li>DBMS provides advanced features like data integrity, security, and concurrency control, making it ideal for large and complex applications.</li>
              <li>The choice between a file system and a DBMS depends on the scale and complexity of the application.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createFileSystemVsDBMSSubtopic;


