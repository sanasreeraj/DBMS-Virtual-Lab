// import React from 'react';
import { Subtopic } from './dbms';  


function createForeignKeySubtopic(): Subtopic {
  return {
    id: "foreign-key",
    title: "Foreign Key",
    content: `
      <div class="space-y-6 max-w-4xl mx-auto p-6">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div class="flex items-center space-x-3">
            <h2 class="text-2xl font-bold">Foreign Key</h2>
          </div>
        </div>

        <!-- Foreign Key Definition Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">What is a Foreign Key?</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              A <strong class="text-blue-600">foreign key</strong> is a column or a set of columns in one table that refers to the primary key in another table. It is used to maintain relationships between tables and ensure data integrity.
            </p>
          </div>
        </div>

        <!-- Characteristics Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Characteristics of Foreign Key</h3>
            </div>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Establishes a link between two tables.</li>
              <li>The foreign key value must exist in the referenced table (i.e., the primary key table).</li>
              <li>Helps in maintaining consistency by preventing orphan records.</li>
              <li>Supports cascading actions like <strong>DELETE</strong> and <strong>UPDATE</strong> to maintain relationships.</li>
            </ul>
          </div>
        </div>

        <!-- Example Section -->
        <div class="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
          <div class="p-6">
            <div class="flex items-center space-x-3 mb-4">
              <h3 class="text-xl font-bold text-blue-600">Example</h3>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Consider a <strong>School Database</strong> with two tables:
            </p>
            <div class="space-y-4">
              <!-- Students Table -->
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-bold text-blue-600 mb-2">1. Students Table (Primary Table)</h4>
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">StudentID (PK)</th>
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">Class</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-gray-50 transition-colors duration-200">
                        <td class="px-4 py-2 text-sm text-gray-700">101</td>
                        <td class="px-4 py-2 text-sm text-gray-700">Alice</td>
                        <td class="px-4 py-2 text-sm text-gray-700">10A</td>
                      </tr>
                      <tr class="hover:bg-gray-50 transition-colors duration-200">
                        <td class="px-4 py-2 text-sm text-gray-700">102</td>
                        <td class="px-4 py-2 text-sm text-gray-700">Bob</td>
                        <td class="px-4 py-2 text-sm text-gray-700">10B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Enrollments Table -->
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-bold text-blue-600 mb-2">2. Enrollments Table (Foreign Key Table)</h4>
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">EnrollmentID (PK)</th>
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">StudentID (FK)</th>
                        <th class="px-4 py-2 text-left text-sm font-semibold text-gray-900">Course</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-gray-50 transition-colors duration-200">
                        <td class="px-4 py-2 text-sm text-gray-700">1</td>
                        <td class="px-4 py-2 text-sm text-gray-700">101</td>
                        <td class="px-4 py-2 text-sm text-gray-700">Math</td>
                      </tr>
                      <tr class="hover:bg-gray-50 transition-colors duration-200">
                        <td class="px-4 py-2 text-sm text-gray-700">2</td>
                        <td class="px-4 py-2 text-sm text-gray-700">102</td>
                        <td class="px-4 py-2 text-sm text-gray-700">Science</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p class="text-gray-700 leading-relaxed mt-4">
              Here, <strong>StudentID</strong> in <strong>Enrollments</strong> is a Foreign Key that references <strong>StudentID</strong> in <strong>Students</strong>. This ensures that only valid students can enroll in courses.
            </p>
          </div>
        </div>
      </div>
    `,
  };
}
  
export default createForeignKeySubtopic; 