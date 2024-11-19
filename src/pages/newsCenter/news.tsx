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

  // Handle page change
  const changePage = (page: number) => {
    setCurrentPage(page);
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
      <div className="flex justify-center mt-8 space-x-2 items-center">
        {/* Previous Button */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`px-3 py-1 rounded-lg ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>

        {/* Total Items */}
        <span className="text-gray-600 ml-4">Total {newsData.length} Items</span>
      </div>
    </div>
  );
};

export default NewsCenter;
