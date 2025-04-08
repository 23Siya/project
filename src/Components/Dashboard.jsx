import React from 'react';

function Dashboard(){
return(
  
    <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

    {/* Grid of Movies */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-2">Genre: {item.genre}</p>
          <p className="text-gray-600">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  </div>
);
}
export default Dashboard;
