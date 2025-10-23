import "./ProductCard.css"

function ProductCard({ name, price, image, inStock}) {
    return (
        <div className={`product ${inStock ? 'true' : 'overlay'}`}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{price}</p>
            <p style={{color: inStock? "green": "red"}} >{inStock? "in-stock✓": "out-of-stock"}</p>
            {/* {inStock && <div className="avl">inStock✓</div>} */}
        </div>
    );
}

export default ProductCard;
