// import React from 'react';
import { Subtopic } from './dbms';

function createIntroToDBMSSubtopic(): Subtopic {
  return {
    id: "dbms-overview",
    title: "Introduction to DBMS",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Database Management System (DBMS)</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a DBMS?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">Database Management System (DBMS)</strong> is a software system that manages databases. It enables users to store, modify, and extract data from a database. DBMS provides an interface for users and applications to interact with the database. The purpose of a DBMS is to help manage and organize large amounts of data efficiently, allowing for rapid data retrieval, manipulation, and ensuring data integrity and security.
            </p>
          </div>
        </div>

        <!-- Key Features Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Key Features of DBMS</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Data Independence:</strong> Allows changes to the data without affecting the applications using the data. For example, if we change the format of a stored phone number in the database (from text to integer), it does not affect the programs using it.
              </li>
              <li>
                <strong>Efficient Data Access:</strong> DBMS supports powerful query languages (like SQL) that allow for efficient data retrieval. For instance, you can quickly query a large dataset to find specific records.
              </li>
              <li>
                <strong>Data Integrity:</strong> Ensures that the data is accurate and reliable. For example, a DBMS can enforce rules to prevent duplicate entries (e.g., no two users should have the same email address).
              </li>
              <li>
                <strong>Security:</strong> DBMS provides features like access control and encryption to protect sensitive data. For example, only authorized users might be allowed to access sensitive customer information in a database.
              </li>
              <li>
                <strong>Data Redundancy Elimination:</strong> In a well-designed DBMS, data is stored in normalized forms, meaning there are no duplicate records. For instance, instead of storing the same address in every order record, we store it once in a separate table and link it to the orders.
              </li>
              <li>
                <strong>Concurrency Control:</strong> DBMS ensures that multiple users can access the database at the same time without interfering with each other. For example, two users might be able to edit different fields in the same record simultaneously.
              </li>
            </ul>
          </div>
        </div>

        <!-- Examples Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Examples of DBMS</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Relational DBMS (RDBMS):</strong> MySQL, PostgreSQL, Oracle, and SQL Server.
              </li>
              <li>
                <strong>NoSQL DBMS:</strong> MongoDB, CouchDB, Cassandra.
              </li>
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
              <li>A DBMS is essential for managing and organizing large amounts of data efficiently.</li>
              <li>Key features like data independence, efficient data access, and concurrency control make DBMS a powerful tool for data management.</li>
              <li>DBMS ensures data integrity and security, which are critical for reliable and secure data handling.</li>
              <li>Examples of DBMS include relational systems like MySQL and PostgreSQL, as well as NoSQL systems like MongoDB and Cassandra.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}

export default createIntroToDBMSSubtopic;
