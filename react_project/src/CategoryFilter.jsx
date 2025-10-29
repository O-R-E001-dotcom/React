const categories = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

function CategoryFilter({ filter, setFilter }) {
    return (
        <div className="filter-buttons">
            {categories.map((category) => 
                <button 
                    key={category}
                    className={filter === category ? "active" : ""}
                    onClick={() => setFilter(category)}
                >
                    {category}
                </button>    
            )}
        </div>
    );
}

export default CategoryFilter;