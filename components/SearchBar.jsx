// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) onSearch(query);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center w-full max-w-md bg-gray-100 px-4 py-2 shadow-sm transition"
//     >
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
//       />
//       <button
//         type="submit"
//         className="text-gray-600 hover:text-blue-600 transition"
//       >
//         <Search className="w-5 h-5" />
//       </button>
//     </form>
//   );
// };

// export default SearchBar;


import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // optional live search
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md bg-gray-100 px-4 py-2 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition"
    >
      
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        
      />
      <button 
        type="submit"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;




