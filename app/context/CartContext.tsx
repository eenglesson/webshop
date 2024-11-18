'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (
    itemId: string,
    selectedColor: string,
    selectedSize: string
  ) => void;
  updateQuantity: (
    itemId: string,
    selectedColor: string,
    selectedSize: string,
    quantity: number
  ) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart state from sessionStorage
  useEffect(() => {
    const storedCart = sessionStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart state to sessionStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      sessionStorage.removeItem('cartItems');
    }
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((cartItem) => {
        if (
          cartItem.id === item.id &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedSize === item.selectedSize
        ) {
          // Increment quantity by 1
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      // Check if the item was updated
      const isUpdated = updatedItems.some(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedSize === item.selectedSize
      );

      if (!isUpdated) {
        // Add the new item with quantity 1
        return [...updatedItems, { ...item, quantity: 1 }];
      }

      return updatedItems;
    });
  };

  const removeFromCart = (
    itemId: string,
    selectedColor: string,
    selectedSize: string
  ) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === itemId &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          )
      )
    );
  };

  const updateQuantity = (
    itemId: string,
    selectedColor: string,
    selectedSize: string,
    quantity: number
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeByIndex = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1); // Remove the item at the specific index
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
