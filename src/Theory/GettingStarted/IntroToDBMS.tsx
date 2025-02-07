// import React from 'react';
import { Subtopic } from './dbms';  

 
function createIntroToDBMSSubtopic(): Subtopic  {
    return {
      id: "intro-dbms",
      title: "Intro to DBMS",
      content: `<div class="space-y-4">
          <p class="text-gray-700">
            <b class="text-indigo-600">Database Management System (DBMS)</b> is a software system that manages databases. It enables users to store, modify, and extract data from a database. DBMS provides an interface for users and applications to interact with the database. The purpose of a DBMS is to help manage and organize large amounts of data efficiently, allowing for rapid data retrieval, manipulation, and ensuring data integrity and security.
          </p>
          <h3 class="text-xl font-bold text-indigo-600">Key Features of DBMS:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><b class="text-indigo-600">Data Independence</b>: Allows changes to the data without affecting the applications using the data. For example, if we change the format of a stored phone number in the database (from text to integer), it does not affect the programs using it.</li>
            <li><b class="text-indigo-600">Efficient Data Access</b>: DBMS supports powerful query languages (like SQL) that allow for efficient data retrieval. For instance, you can quickly query a large dataset to find specific records.</li>
            <li><b class="text-indigo-600">Data Integrity</b>: Ensures that the data is accurate and reliable. For example, a DBMS can enforce rules to prevent duplicate entries (e.g., no two users should have the same email address).</li>
            <li><b class="text-indigo-600">Security</b>: DBMS provides features like access control and encryption to protect sensitive data. For example, only authorized users might be allowed to access sensitive customer information in a database.</li>
            <li><b class="text-indigo-600">Data Redundancy Elimination</b>: In a well-designed DBMS, data is stored in normalized forms, meaning there are no duplicate records. For instance, instead of storing the same address in every order record, we store it once in a separate table and link it to the orders.</li>
            <li><b class="text-indigo-600">Concurrency Control</b>: DBMS ensures that multiple users can access the database at the same time without interfering with each other. For example, two users might be able to edit different fields in the same record simultaneously.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">Examples:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><b class="text-indigo-600">Relational DBMS (RDBMS)</b>: MySQL, PostgreSQL, Oracle, and SQL Server.</li>
            <li><b class="text-indigo-600">NoSQL DBMS</b>: MongoDB, CouchDB, Cassandra.</li>
          </ul>
        </div>`,
    };
}
  
export default createIntroToDBMSSubtopic;
