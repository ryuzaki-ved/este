import { useState, useEffect } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";
import { getFilteredCities } from "../../lib/cityData";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [suggestions, setSuggestions] = useState([]);

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
    
    if (name === "city") {
      const filteredCities = getFilteredCities(value);
      setSuggestions(filteredCities);
    }
  };

  const handleSuggestionClick = (city) => {
    setQuery(prev => ({ ...prev, city }));
    setSuggestions([]);
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <div className="searchInput">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={query.city}
            onChange={handleChange}
          />
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((city) => (
                <div
                  key={city}
                  className="suggestion"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;