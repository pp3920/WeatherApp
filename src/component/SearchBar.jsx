import { useState } from "react";


// searches input from the user  sends data to parent component
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");               // storing text value inside query in local state

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    onSearch(query);    // sends search term to parent component
    setQuery(""); // Clear input after search
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>  
      <input
        type="text"
        placeholder="Enter city/town..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}   //setting text 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;