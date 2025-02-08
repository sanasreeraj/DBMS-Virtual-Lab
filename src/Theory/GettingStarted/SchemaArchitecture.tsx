// import React from 'react';
import { Subtopic } from './dbms';

function createSchemaArchitectureSubtopic(): Subtopic {
  return {
    id: "schema-architecture",
    title: "Schema Architecture in DBMS",
    content: `

      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Three Schema Architecture in DBMS</h2>
          </div>
        </div>

        <!-- Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is Three Schema Architecture?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              In DBMS, <strong class="text-blue-600">schema</strong> refers to the logical and physical design of the database. The <strong>Three Schema Architecture</strong> is a framework used to define the separation of database management into three levels, ensuring data independence.
            </p>
          </div>
        </div>

        <!-- External Schema Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">1. External Schema</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              This is the <strong>user view</strong> of the data. Different users can have different views of the same data, depending on their needs and access privileges.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A customer may only see their own orders, while an administrator can see all orders in the system.
            </p>
          </div>
        </div>

        <!-- Conceptual Schema Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">2. Conceptual Schema</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Defines the <strong>logical structure</strong> of the entire database, describing all the data in the database and the relationships between different data elements. It is independent of how data is physically stored or how users view the data.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> A conceptual schema might define a <strong>Customer</strong> table, a <strong>Product</strong> table, and an <strong>Order</strong> table, with relationships (foreign keys) between them.
            </p>
          </div>
        </div>

        <!-- Internal Schema Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">3. Internal Schema</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Describes the <strong>physical storage</strong> of data on disk, such as file formats, indexing, and access paths.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Example:</strong> The internal schema would specify whether the data is stored in binary format, how indexes are created, and how data is partitioned across multiple disks.
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
              <li>The <strong>Three Schema Architecture</strong> separates the database into three levels: <strong>External</strong>, <strong>Conceptual</strong>, and <strong>Internal</strong>.</li>
              <li><strong>External Schema</strong> represents the user view of the data, tailored to specific user needs.</li>
              <li><strong>Conceptual Schema</strong> defines the logical structure of the entire database, independent of physical storage or user views.</li>
              <li><strong>Internal Schema</strong> describes the physical storage details, such as file formats and indexing.</li>
              <li>This architecture ensures <strong>data independence</strong>, allowing changes in one layer (e.g., physical storage) without affecting others (e.g., user views).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };
}


export default createSchemaArchitectureSubtopic; 
