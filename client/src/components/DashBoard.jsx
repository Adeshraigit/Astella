import React, { useState } from "react";

const Dashboard = ({ data }) => {
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" ? data : data.filter((item) => item.Post_Type === filter);

  const postTypes = ["All", "Static", "Carousel", "Reel"];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Social Media Dashboard</h1>

      {/* Filter Options */}
      <div className="flex justify-center mb-8">
        {postTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 mx-2 rounded-lg text-sm ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Posts</h3>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Likes</h3>
          <p className="text-2xl font-bold">{data.reduce((acc, post) => acc + post.Likes, 0)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Shares</h3>
          <p className="text-2xl font-bold">{data.reduce((acc, post) => acc + post.Shares, 0)}</p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Post ID</th>
              <th className="px-4 py-2 border">Post Type</th>
              <th className="px-4 py-2 border">Likes</th>
              <th className="px-4 py-2 border">Shares</th>
              <th className="px-4 py-2 border">Comments</th>
              <th className="px-4 py-2 border">Date Posted</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((post) => (
              <tr key={post.Post_ID} className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-2 border">{post.Post_ID}</td>
                <td className="px-4 py-2 border">{post.Post_Type}</td>
                <td className="px-4 py-2 border">{post.Likes}</td>
                <td className="px-4 py-2 border">{post.Shares}</td>
                <td className="px-4 py-2 border">{post.Comments}</td>
                <td className="px-4 py-2 border">{new Date(post.Date_Posted).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
