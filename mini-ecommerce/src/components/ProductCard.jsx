import React from 'react'; // TODO 6: import `memo`
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

// TODO 5: ใช้ React.memo
function ProductCard({ product }) {
  const dispatch = useDispatch();

  // TODO 7: ใช้ useCallback ใน Component แม่
  const handleAddToCart = () => {
    dispatch(addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
    }));
  };

  return ( <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">{product.title}</h2>
        <p className="text-green-600 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;