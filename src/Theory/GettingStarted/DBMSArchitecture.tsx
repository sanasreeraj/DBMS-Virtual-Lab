// import React from 'react';

import { Subtopic } from './dbms';  

function createDBMSArchitectureSubtopic(): Subtopic  {
    return {
      id: "dbms-architectures",
      title: "DBMS Architectures",
      content: `<div class="space-y-4">

          <p class="text-gray-700">File systems and DBMS are both used to store and manage data, but they differ significantly in terms of functionality and features.</p>
          <h3 class="text-xl font-bold text-indigo-600">1. File System:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Data is stored in files and directories without predefined structure.</li>
            <li>There are no relationships between different files. For instance, in a file system, you might have a "customer_data.txt" file and an "orders_data.txt" file, but the system does not automatically link customers to their orders.</li>
            <li>High risk of data redundancy: the same data might be stored in multiple files. For example, the customer’s name and address might be repeated in several order records.</li>
            <li>Lacks advanced security, integrity, and concurrency control mechanisms. A file system might not restrict access to certain files.</li>
            <li>Suited for small applications with minimal data complexity.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">2. DBMS:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Data is stored in structured tables, often related to each other.</li>
            <li>It enforces data integrity and consistency, ensuring that data is stored logically and without redundancy. For example, an "orders" table can reference a "customers" table, ensuring that no customer information is repeated.</li>
            <li>Supports complex queries and joins, allowing users to access and manipulate data across tables easily. For instance, a user could query for all orders made by a particular customer in a single SQL query.</li>
            <li>DBMS is optimized for multi-user access and transactions, preventing data corruption from simultaneous updates.</li>
            <li>Provides security features such as user roles, passwords, and encryption to protect sensitive data.</li>
            <li>Suited for large, complex applications like banking systems, e-commerce platforms, and social media platforms.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">Examples:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><b class="text-indigo-600">File System</b>: Storing data in Excel spreadsheets or plain text files.</li>
            <li><b class="text-indigo-600">DBMS</b>: Managing user accounts, orders, products, and payments in an e-commerce website using a DBMS like MySQL or PostgreSQL.</li>
          </ul>
        </div>`,
    };
}

// function DBMSArchitecture() {
//     const subtopic = createDBMSArchitectureSubtopic();
//     return <div dangerouslySetInnerHTML={{ __html: subtopic.content }} />;
// }

export default createDBMSArchitectureSubtopic;
