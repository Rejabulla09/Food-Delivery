import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import rating_stars from '../../assets/rating_starts.png';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img 
            className='add' 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white} 
            alt="Add to Cart" 
          />
        ) : (
          <div className='food-item-counter'>
            <img 
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red} 
              alt="Remove from Cart" 
            />
            <p>{cartItems[id]}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add more" 
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
