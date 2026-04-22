import type {ProductDisplayProps} from '../../types/index.ts';

function ProductDisplay({product, showDescription = true, showStockStatus = true, onAddToCart, children}: ProductDisplayProps) {
    return (
        <div>
            <img src={product.imageUrl} alt={`Picture of ${product.name}`}/>
            <h4>{product.name}</h4>
            <span>{product.price}</span>
            {showDescription && <p>{product.description}</p>}
            {showStockStatus && <span>{product.inStock}</span>}
            {onAddToCart && <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>}
            {children}
        </div>
    )
}

export default ProductDisplay;