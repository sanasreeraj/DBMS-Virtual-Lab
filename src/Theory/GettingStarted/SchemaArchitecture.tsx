// import React from 'react';
import { Subtopic } from './dbms';

function createSchemaArchitectureSubtopic(): Subtopic {
    return {
        id: 'schema-architecture',
        title: 'Schema Architecture',
        content: `<div class="space-y-4">
          <p class="text-gray-700">In DBMS, schema refers to the logical and physical design of the database. The Three Schema Architecture is a framework used to define the separation of database management into three levels, ensuring data independence.</p>
          <h3 class="text-xl font-bold text-indigo-600">1. External Schema:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>This is the user view of the data. Different users can have different views of the same data, depending on their needs and access privileges.</li>
            <li><b class="text-indigo-600">Example</b>: A customer may only see their own orders, while an administrator can see all orders in the system.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">2. Conceptual Schema:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Defines the logical structure of the entire database, describing all the data in the database and the relationships between different data elements.</li>
            <li>Independent of how data is physically stored or how users view the data.</li>
            <li><b class="text-indigo-600">Example</b>: A conceptual schema might define a Customer table, a Product table, and an Order table, with relationships (foreign keys) between them.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">3. Internal Schema:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Describes the physical storage of data on disk, such as file formats, indexing, and access paths.</li>
            <li><b class="text-indigo-600">Example</b>: The internal schema would specify whether the data is stored in binary format, how indexes are created, and how data is partitioned across multiple disks.</li>
          </ul>
          <p class="text-gray-700">This architecture helps ensure <b class="text-indigo-600">data independence</b> by separating user views, logical schema, and physical storage, allowing changes in one layer without impacting the others. For example, changing the internal schema (like switching to a new storage medium) would not affect the external schema (user views).</p>
        </div>`,
    };
}

export default createSchemaArchitectureSubtopic; 
