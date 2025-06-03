import React, { useEffect, useState } from 'react';

function App() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/metrics')
      .then(res => res.json())
      .then(data => setMetrics(data));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Cain Email Campaign Dashboard</h1>
      {metrics ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-gray-800 rounded">Total Emails: {metrics.total}</div>
          <div className="p-6 bg-green-700 rounded">Opened: {metrics.opened}</div>
          <div className="p-6 bg-blue-700 rounded">Clicked: {metrics.clicked}</div>
          <div className="p-6 bg-yellow-600 rounded">Replied: {metrics.replied}</div>
          <div className="p-6 bg-red-700 rounded">Unopened: {metrics.unopened}</div>
        </div>
      ) : (
        <p>Loading metrics...</p>
      )}
    </div>
  );
}

export default App;
