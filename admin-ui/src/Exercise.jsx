import React from 'react';
import PostCard from './PostCard.jsx';
import { postsData } from './data/postsData.js';

const Exercise = () => {

  const renderPostCards = () => postsData.map(({ id, userId, title, body }) => {

  
    const postProps = { id, userId, title, body };

    return (
      
      <PostCard key={id} {...postProps} />
    );
  });

  
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Post Cards
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {renderPostCards()}
        </div>

      </div>
    </div>
  );
};

export default Exercise;