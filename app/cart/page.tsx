'use client';

import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (
    id: string,
    selectedColor: string,
    selectedSize: string
  ) => {
    removeFromCart(id, selectedColor, selectedSize);
  };

  const handleUpdateQuantity = (
    id: string,
    selectedColor: string,
    selectedSize: string,
    newQuantity: number
  ) => {
    if (newQuantity > 0) {
      updateQuantity(id, selectedColor, selectedSize, newQuantity);
    }
  };

  return (
    <>
      <Navbar />
      <div className='max-w-3xl mx-auto mt-8'>
        <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
        {cartItems.length > 0 ? (
          <ul className='space-y-4'>
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className='flex items-center justify-between border p-4 rounded-lg'
              >
                <div className='flex items-center gap-4'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-16 h-16 object-cover rounded-lg'
                  />
                  <div>
                    <h2 className='text-lg font-medium'>{item.title}</h2>
                    <p className='text-sm text-gray-500'>
                      Color: {item.selectedColor} | Size: {item.selectedSize}
                    </p>
                    <p className='text-sm font-bold text-gray-800'>
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  {/* Quantity Controls */}
                  <div className='flex items-center'>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          item.selectedColor,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                      className='px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300'
                    >
                      -
                    </button>
                    <span className='px-4'>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          item.selectedColor,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className='px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300'
                    >
                      +
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      handleRemove(
                        item.id,
                        item.selectedColor,
                        item.selectedSize
                      )
                    }
                    className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>Your cart is currently empty.</p>
        )}
      </div>
    </>
  );
}
