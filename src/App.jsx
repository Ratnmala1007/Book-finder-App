import React, { useState } from "react";
import BookCard from "./BookCard.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 10)); // Show top 10 results
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">
        📚 Book Finder
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books by title..."
          className="w-80 p-2 border border-gray-400 rounded-l-lg outline-none"
        />
        <button
          onClick={fetchBooks}
          className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {!loading && books.length === 0 && (
        <p className="text-center text-gray-500">
          Try searching for a book title!
        </p>
      )}
    </div>
  );
}

export default App;
