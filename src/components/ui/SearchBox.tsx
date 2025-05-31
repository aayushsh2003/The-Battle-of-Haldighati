import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
}

// In a real application, this would be connected to a proper search system
const SearchBox: React.FC<SearchBoxProps> = ({ 
  placeholder = "Search historical terms...", 
  className = "" 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2 pl-10 pr-4 text-saddleBrown bg-beige border-2 border-goldenrod rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
          aria-label="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search size={18} className="text-saddleBrown" aria-hidden="true" />
        </div>
      </div>
    </form>
  );
};

export default SearchBox;