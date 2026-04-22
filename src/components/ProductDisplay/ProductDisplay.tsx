import type {ProductDisplayProps} from '../../types/index.ts';

function ProductDisplay({product, showDescription = true, showStockStatus = true, onAddToCart, children}: ProductDisplayProps) {
    return (
        <div className='product-display'>
            <img src={product.imageUrl} alt={`Picture of ${product.name}`} className='product-img'/>
            <div className='product-content'>
                <h3>{product.name}</h3>
                <p className='price'>${product.price}</p>
                {showDescription && <p className='description'>{product.description}</p>}
                {showStockStatus && <p className='stock'>{product.inStock ? "In Stock" : "Out of Stock"}</p>}
                {onAddToCart && <button onClick={() => onAddToCart(product.name)} className='add-btn'>Add to Cart</button>}
                {children}
            </div>
        </div>
    )
}

export default ProductDisplay;