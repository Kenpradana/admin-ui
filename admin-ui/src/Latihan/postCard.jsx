import React, { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className="group flex flex-col items-center gap-3 p-4 rounded-x bg-white border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-gray-300 hover:bg-pink-100 shadow-md hover:shadow-xl h-full w-full"
    >
      {/* Bagian Atas: Judul Post */}
      <h3 className="text-sm font-bold text-gray-800 leading-tight line-clamp-3 w-full text-center">
        {title}
      </h3>

      {/* Bagian Tengah: Isi Post */}
      <p className="flex-1 text-gray-600 text-xs leading-relaxed whitespace-pre-line line-clamp-4 w-full text-center">
        {body}
      </p>

      {/* Bagian Bawah: Tombol */}
      <button
        onClick={handleButtonClick}
        className={`
          w-full px-3 py-2 rounded-lg font-semibold text-white text-xs
          transition-all duration-300 ease-in-out
          cursor-pointer
          ${isClicked
            ? 'bg-special-red2 group-hover:brightness-125'
            : 'bg-gray-400 group-hover:bg-gray-350 group-hover:brightness-110'
          }
        `}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
};

export default PostCard;