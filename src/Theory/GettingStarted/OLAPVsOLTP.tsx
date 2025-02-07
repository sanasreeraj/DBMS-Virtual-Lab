// import React from 'react';
import { Subtopic } from './dbms';

function createOLAPVsOLTPSubtopic(): Subtopic {
    return {
        id: 'olap-vs-oltp',
        title: 'OLAP vs OLTP',
        content: `<div class="space-y-4">
            <p class="text-gray-700">OLAP (Online Analytical Processing) and OLTP (Online Transaction Processing) are two different types of database systems designed for different purposes:</p>
            <h3 class="text-xl font-bold text-indigo-600">1. OLAP (Online Analytical Processing):</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Designed for complex queries, reporting, and data analysis.</li>
                <li>Works with large volumes of historical data, often used in data warehousing environments.</li>
                <li>Optimized for read-heavy operations and multi-dimensional analysis.</li>
                <li>Supports operations like slicing, dicing, drilling down, and pivoting.</li>
                <li><b class="text-indigo-600">Example</b>: A business analyst querying a data warehouse for sales data across multiple regions, months, and product categories.</li>
            </ul>
            <h3 class="text-xl font-bold text-indigo-600">2. OLTP (Online Transaction Processing):</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Designed for handling real-time transactions, such as updates to databases and inserting new data.</li>
                <li>Optimized for write-heavy operations and rapid responses to queries.</li>
                <li>Ensures consistency and integrity for transactional data, especially when multiple users are accessing the system simultaneously.</li>
                <li><b class="text-indigo-600">Example</b>: A bank's database that processes customer's deposits, withdrawals, and transfers in real-time.</li>
            </ul>
            <h3 class="text-xl font-bold text-indigo-600">Key Differences:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>OLAP is primarily focused on <b class="text-indigo-600">analysis</b>, while OLTP focuses on <b class="text-indigo-600">transactions</b>.</li>
                <li>OLAP supports <b class="text-indigo-600">complex queries</b> and aggregations, while OLTP supports <b class="text-indigo-600">simple queries</b> with a high volume of frequent transactions.</li>
            </ul>
            <h3 class="text-xl font-bold text-indigo-600">Examples:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li><b class="text-indigo-600">OLAP</b>: Business Intelligence systems, data mining.</li>
                <li><b class="text-indigo-600">OLTP</b>: Banking systems, e-commerce platforms.</li>
            </ul>
        </div>`
    }
}

export default createOLAPVsOLTPSubtopic; 
