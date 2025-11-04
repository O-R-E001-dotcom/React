import { useState } from "react";

function StatesExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [sortBy, setSortBy] = useState("capitals");

  const states = [
    { id: 1, stateName: "Abia", capital: "Umuahia", region: "South-East" },
    { id: 2, stateName: "Anambra", capital: "Awka", region: "South-East" },
    { id: 3, stateName: "Delta", capital: "Asaba", region: "South-South" },
    { id: 4, stateName: "Ekiti", capital: "Ado-Ekiti", region: "South-West" },
    { id: 5, stateName: "Nasarawa", capital: "Laffia", region: "South-South" },
    { id: 6, stateName: "Enugu", capital: "Enugu", region: "South-East" },
    { id: 7, stateName: "Lagos", capital: "Ikeja", region: "South-West" },
    { id: 8, stateName: "Ogun", capital: "Abeokuta", region: "South-West" },
    { id: 9, stateName: "Oyo", capital: "Ibadan", region: "South-West" },
    { id: 10, stateName: "Plateau", capital: "Jos", region: "North-Centrl" }
  ];

  //Filter by Region
  let filteredStates = states.filter((state) => {
    if (regionFilter === 'All') return true;
    return state.region.toLowerCase().includes(regionFilter.toLowerCase());
  });

  //Search by name or capital
  if (searchTerm.trim() !== "") {
    filteredStates = filteredStates.filter(
      (s) =>
        s.stateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  
  // Sort alphabetically by state or capital
  const sortedStates = [...filteredStates].sort((a, b) => {
    if (sortBy === "stateName") {
      return a.stateName.localeCompare(b.stateName);
    } else if (sortBy === "capital") {
      return a.capital.localeCompare(b.capital);
    }
    return 0;
  });

  return (
    <div className="state">
      <h1>Nigerian States</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search by state name or capital..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-buttons">
        {["All", "North", "South", "East", "West"].map((btn) => (
          <button
            key={btn}
            onClick={() => setRegionFilter(btn)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: regionFilter === btn ? "none" : "1px solid #ccc",
              backgroundColor: regionFilter === btn ? "#ad5210ff" : "#fff",
              color: regionFilter === btn ? "#fff" : "#ad3710ff",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.2s ease",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* sort buttons */}
      <div className="sort-buttons">
        <span>Sort by: </span>
        <button
          className={sortBy === "stateName" ? "active" : ""}
          onClick={() => setSortBy("stateName")}
        >
          State Name
        </button>
        <button
          className={sortBy === "capital" ? "active" : ""}
          onClick={() => setSortBy("capital")}
        >
          Capital
        </button>
      </div>

      {/* States List */}
      {sortedStates.length === 0 ? (
        <div className="empty-state">
          <p>No results found</p>
        </div>
      ) : (
        <div className="state-grid">
          <ol className="state-grid">
              {sortedStates.map((state) => (
                <li key={state.id}>
              <strong>State:</strong> {state.stateName} — <strong>Capital:</strong> {state.capital} ({state.region})
            </li>
              ))}
            
          </ol>
        </div>
      )}

      {/* Results count  */}
      <p className="results-count">
        Showing {sortedStates.length} of {states.length} states
      </p>
    </div>
  );
}

export default StatesExplorer;
