import React from "react";

function BookCard({ book }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
      <img
        src={coverImg}
        alt={book.title}
        className="h-60 w-full object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name?.[0] || "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500">
        Year: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}

export default BookCard;
