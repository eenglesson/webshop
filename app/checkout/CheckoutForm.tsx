'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { FaApple, FaPaypal } from 'react-icons/fa';
import { Card } from '@/components/ui/card';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutForm() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout data submitted:', formData);
    // Clear the cart
    clearCart();

    // Navigate to the OrderConfirmation page
    router.push('/orderConfirmation');
    // Add logic to handle form submission, such as calling an API.
  };

  const handleCheckout = () => {
    // Save order details to sessionStorage or a state management solution
    sessionStorage.setItem('orderDetails', JSON.stringify(cartItems));

    // Clear the cart
    clearCart();

    // Navigate to the OrderConfirmation page
    router.push('/orderConfirmation');
  };

  return (
    <Card className='flex flex-col w-full gap-8 shadow-none p-4'>
      <aside className='flex flex-col gap-4'>
        <Button
          onClick={handleCheckout}
          className='bg-black gap-0.5 hover:bg-black/90 rounded-lg flex w-full justify-center items-center'
        >
          <div className='mb-0.5'>
            <FaApple size={16} />
          </div>
          Pay
        </Button>
        <Button
          onClick={handleCheckout}
          className='rounded-lg flex w-full justify-center items-center text-white py-1 gap-0.5'
        >
          <div>
            <FaPaypal size={16} />
          </div>
          PayPal
        </Button>
      </aside>

      <div className='flex items-center gap-4'>
        <span className='bg-gray h-[1px] w-full'></span>
        <p className='text-darkGray'>or</p>
        <span className='bg-gray h-[1px] w-full'></span>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6 text-small '>
        {/* Personal Information */}

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div>
            <label className='block font-medium mb-1 '>First Name</label>
            <Input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder='John'
              className='placeholder:text-small shadow-none'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Last Name</label>
            <Input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder='Doe'
              className='placeholder:text-small shadow-none'
            />
          </div>
        </div>

        <div>
          <label className='block font-medium mb-1'>Email</label>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder='john.doe@example.com'
            className='placeholder:text-small shadow-none'
          />
        </div>

        {/* Address Information */}
        <div>
          <label className='block font-medium mb-1'>Address</label>
          <Input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder='123 Main St'
            className='placeholder:text-small shadow-none'
          />
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div>
            <label className='block font-medium mb-1'>City</label>
            <Input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleInputChange}
              required
              placeholder='Gothenburg'
              className='placeholder:text-small shadow-none'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Postal Code</label>
            <Input
              type='text'
              name='postalCode'
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              placeholder='12345'
              className='placeholder:text-small shadow-none'
            />
          </div>
        </div>

        {/* Conditional Card Details */}

        <div className='space-y-4'>
          <div>
            <label className='block font-medium mb-1'>Card Number</label>
            <Input
              type='text'
              name='cardNumber'
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              placeholder='1234 5678 9012 3456'
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block font-medium mb-1'>Expiration Date</label>
              <Input
                type='text'
                name='expirationDate'
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
                placeholder='MM/YY'
              />
            </div>
            <div>
              <label className='block font-medium mb-1'>CVV</label>
              <Input
                type='text'
                name='cvv'
                value={formData.cvv}
                onChange={handleInputChange}
                required
                placeholder='123'
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button type='submit' size='lg' className='w-full'>
          Pay ${totalPrice}.00
        </Button>
      </form>
    </Card>
  );
}
