import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from './type'; // Import data and interface

const NewsDetailPage: React.FC = () => {
  // Retrieve the dynamic 'id' parameter from the URL
  const { id } = useParams<{ id: string }>(); 

  // Find the news item with the matching ID
  const newsItem = newsData.find((news) => news.id.toString() === id);

  if (!newsItem) {
    return <div>News article not found.</div>; // If the news item doesn't exist, show a not found message
  }

  // Split content into sentences, ignoring those with floats (e.g., 12.45)
  const contentParagraphs = newsItem.content
    .split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => !/\d+\.\d+/.test(sentence) && sentence.length > 0);

  return (
    <>
    <div className="sticky top-0 bg-gray-100 z-10  py-3 mb-6">
        <div className="max-w-4xl  px-6 flex items-left leading-[18px] text-[20px] space-x-2 ">
          <Link to="/news-center" className="text-blue-600  hover:text-blue-900 font-semibold">
            News Center
          </Link>
          <span className="text-gray-600"> &gt; </span>
          <span className="text-gray-600 font-medium">Article</span>
        </div>
      </div>
    <div className="container mx-auto p-4">
      {/* Sticky Navigation */}
      

      <div className="max-w-4xl mx-auto">
        <h1 className="text-[40px] text-gray-800 tracking-[0.77px] text-left leading-[56px]">{newsItem.title}</h1>

        <p className="text-[20px] text-gray-500 mt-2 mb-7">
          {newsItem.date} | Uploaded by: {newsItem.uploader}
        </p>

        <hr />

        <div className="mt-6 bg-white overflow-hidden">
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-6">
            <div className="mt-4 text-[18px] text-[#222]">
              {contentParagraphs.map((sentence) => (
                <p key={sentence} className="mb-4">
                  {sentence}.
                </p>
              ))}
            </div>

            <br /> <br />

            <div className="flex justify-end">
              <Link to="/news-center" className="border-2 p-4 border-gray-300 rounded-lg m-7">
                Back to News Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default NewsDetailPage;
