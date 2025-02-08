import  { useState } from 'react';
import SQLEditor from '../components/SQLEditor';
import { DatabaseObject, Query } from '../types';
import { Table, Eye, Zap, Plus, Trash, Database, RefreshCw } from 'lucide-react';

export default function Playground() {
  <br></br>
  const [queries, setQueries] = useState<Query[]>([]);
  <br></br>
  const [activeTab, setActiveTab] = useState<'tables' | 'views' | 'triggers'>('tables');
  const [dbObjects, setDbObjects] = useState<DatabaseObject[]>([
    {
      id: '1',
      name: 'employees',
      type: 'table',
      definition: `CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  department VARCHAR(50),
  salary DECIMAL(10,2)
)`,
      createdAt: new Date().toISOString(),
      columns: [
        { name: 'id', type: 'SERIAL', nullable: false, isPrimary: true },
        { name: 'name', type: 'VARCHAR(100)', nullable: false, isPrimary: false },
        { name: 'email', type: 'VARCHAR(255)', nullable: false, isPrimary: false },
        { name: 'department', type: 'VARCHAR(50)', nullable: true, isPrimary: false },
        { name: 'salary', type: 'DECIMAL(10,2)', nullable: true, isPrimary: false }
      ],
      data: [
        { id: 1, name: 'John Doe', email: 'john@example.com', department: 'IT', salary: 75000 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'HR', salary: 65000 }
      ]
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newObjectDefinition, setNewObjectDefinition] = useState('');
  const [selectedObject, setSelectedObject] = useState<DatabaseObject | null>(null);

  const executeQuery = (sql: string) => {
    // In a real app, this would connect to a database
    const newQuery: Query = {
      id: Date.now().toString(),
      sql,
      result: selectedObject?.data || [{ message: 'Query executed successfully' }]
    };
    setQueries([...queries, newQuery]);
  };

  const handleCreateObject = () => {
    const newObject: DatabaseObject = {
      id: Date.now().toString(),
      name: `new_${activeTab.slice(0, -1)}_${dbObjects.length + 1}`,
      type: activeTab.slice(0, -1) as 'table' | 'view' | 'trigger',
      definition: newObjectDefinition,
      createdAt: new Date().toISOString()
    };
    setDbObjects([...dbObjects, newObject]);
    setShowCreateModal(false);
    setNewObjectDefinition('');
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {[
              { id: 'tables', icon: Table, label: 'Tables' },
              { id: 'views', icon: Eye, label: 'Views' },
              { id: 'triggers', icon: Zap, label: 'Triggers' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id as any);
                  setSelectedObject(null);
                }}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Object List */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Database Objects</h2>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {dbObjects
                  .filter(obj => obj.type === activeTab.slice(0, -1))
                  .map(obj => (
                    <button
                      key={obj.id}
                      onClick={() => setSelectedObject(obj)}
                      className={`w-full text-left p-3 rounded-lg border transition
                        ${selectedObject?.id === obj.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{obj.name}</span>
                        <Database className="w-4 h-4 text-gray-400" />
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            {/* Object Details and Query Editor */}
            <div className="lg:col-span-2">
              {selectedObject ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Definition</h3>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      {selectedObject.definition}
                    </pre>
                  </div>

                  {selectedObject.type === 'table' && selectedObject.columns && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Structure</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Column
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Constraints
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {selectedObject.columns.map((col, idx) => (
                              <tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {col.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {col.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {[
                                    col.isPrimary && 'PRIMARY KEY',
                                    !col.nullable && 'NOT NULL'
                                  ].filter(Boolean).join(', ')}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Query Editor</h3>
                      <button
                        onClick={() => setQueries([])}
                        className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Clear History</span>
                      </button>
                    </div>
                    <SQLEditor
                      onExecute={executeQuery}
                      placeholder={`Enter your SQL query for ${selectedObject.name}...`}
                    />
                  </div>

                  <div className="space-y-4">
                    {queries.map((query) => (
                      <div key={query.id} className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm text-gray-800 mb-4 bg-gray-100 p-2 rounded">
                          {query.sql}
                        </pre>
                        {query.error ? (
                          <div className="text-red-600">{query.error}</div>
                        ) : (
                          <div className="bg-white p-4 rounded border overflow-x-auto">
                            <pre className="text-sm text-gray-600">
                              {JSON.stringify(query.result, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <Database className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg">Select a database object to view details and run queries</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create Object Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-xl font-semibold mb-4">
              Create New {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
            </h2>
            <textarea
              value={newObjectDefinition}
              onChange={(e) => setNewObjectDefinition(e.target.value)}
              className="w-full h-40 p-4 bg-gray-800 text-white font-mono rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
              placeholder={`Enter ${activeTab.slice(0, -1)} definition...`}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateObject}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

