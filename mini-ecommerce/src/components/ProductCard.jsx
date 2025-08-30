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

  return ( /* ... JSX ... */ );
}

export default ProductCard;