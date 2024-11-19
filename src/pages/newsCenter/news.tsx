// src/pages/news.tsx
import React, { useState } from 'react';
import { newsData } from './type'; // Import the interface and data
import { Link } from 'react-router-dom'; // Import Link for navigation

const NewsCenter: React.FC = () => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of posts to display for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / postsPerPage);

  // Handle the next page click
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle the previous page click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-8 max-w-screen-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8">News Center</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((news) => (
          <Link
            to={`/news/${news.id}`} // Use Link to navigate to the news detail page
            key={news.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 ease-in-out w-full sm:w-80 lg:w-72 p-4"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
              <p className="text-sm text-gray-500 my-2">
                {news.date} | {news.uploader}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsCenter;
