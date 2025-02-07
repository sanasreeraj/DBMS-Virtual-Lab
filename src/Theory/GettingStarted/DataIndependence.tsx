// import React from 'react';
import { Subtopic } from './dbms';

function createDataIndependenceSubtopic(): Subtopic {
    return {
        id: 'data-independence',
        title: 'Data Independence',
        content: `<div class="space-y-4">
          <p class="text-gray-700">Data independence refers to the ability to change the schema at one level of the DBMS without affecting other levels. It allows for easier maintenance and greater flexibility when managing the database.</p>
          <h3 class="text-xl font-bold text-indigo-600">There are two types of data independence:</h3>
          <h3 class="text-xl font-bold text-indigo-600">1. Logical Data Independence:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Refers to the ability to change the conceptual schema without affecting the external schema (user views).</li>
            <li><b class="text-indigo-600">Example</b>: Adding new fields (e.g., a new "phone number" column) to a table does not affect how users access the data.</li>
          </ul>
          <h3 class="text-xl font-bold text-indigo-600">2. Physical Data Independence:</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Refers to the ability to change the internal schema (physical storage) without affecting the conceptual schema.</li>
            <li><b class="text-indigo-600">Example</b>: Moving the database from one type of storage (e.g., hard disk) to another (e.g., SSD) does not affect the logical structure or user views of the data.</li>
          </ul>
          <p class="text-gray-700">Data independence is a crucial feature because it allows for changes to the system without disrupting the overall database operation. For instance, if the underlying storage method is upgraded or changed, users and applications can continue to interact with the database as usual.</p>
        </div>`
    }
}

// function DataIndependence() {
//     const subtopic = createDataIndependenceSubtopic();
//     return <div dangerouslySetInnerHTML={{ __html: subtopic.content }} />;
// }

export default createDataIndependenceSubtopic; 
