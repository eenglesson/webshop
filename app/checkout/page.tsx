import React from 'react';
import CheckoutForm from './CheckoutForm';
import SummaryForCheckout from './SummaryForCheckout';

export default function Page() {
  return (
    <>
      <h1 className='text-h4 sm:text-h3 mt-8 font-semibold mb-4'>Checkout</h1>
      <section className='flex flex-col md:flex-row gap-4'>
        {/* Sticky Checkout Form */}
        <div className='block md:hidden'>
          <SummaryForCheckout />
        </div>
        <div className='w-full md:w-1/2 md:sticky top-[82px] h-fit'>
          <CheckoutForm />
        </div>

        {/* Summary For Checkout */}
        <div className='hidden md:block w-full sm:w-1/2'>
          <SummaryForCheckout />
        </div>
      </section>
    </>
  );
}
