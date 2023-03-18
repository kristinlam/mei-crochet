import React, { useContext } from 'react';
import CartContext from '../context/cart';
import { Link } from 'react-router-dom';
import { convertCents } from '../helpers';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItemClick = (item) => {
    removeItem(item);
  };

  return (
    <div className="flex border-b-2 border-green py-6">
      <div className="basis-9/12">
        <div className="flex items-center">
          <Link to={`/shop/${item.id}`}>
            <div className="w-28 sm:w-32">
              <img
                className="w-full	aspect-square object-cover rounded-xl"
                src={item.image}
              />
            </div>
          </Link>
          <div className="px-6">
            <Link to={`/shop/${item.id}`}>
              <p className="font-serif font-bold text-xl sm:text-2xl">
                {item.name}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex grow items-center justify-between space-x-6">
        <p className="text-xl sm:text-2xl">{convertCents(item.price)}</p>
        <AiOutlineCloseCircle
          className="self-start text-2xl sm:text-3xl cursor-pointer"
          onClick={() => handleRemoveItemClick(item)}
        />
      </div>
    </div>
  );
};

export default CartItem;
