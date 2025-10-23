import ProductCard from "./ProductCard";
import "./App.css"

function App() {
  return (
    <div>
      <h1>E-Commerce Site</h1>
      <div className="app">
        <div className="product-grid">
          <ProductCard className="overlay"
            image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            name="Laptop Computer"
            price="₦1,800,000"
            inStock={false}
          />
        </div>

        <div>
          <ProductCard
            image="https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=851"
            name="Toyota Ford"
            price="₦35,000,000"
            inStock={true}
          />
        </div>

        <div>
          <ProductCard
            image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
            name="Duplex house"
            price="₦50,000,000"
            inStock={true}
          />
        </div>
      </div>
    </div>
    
  );
}

export default App;