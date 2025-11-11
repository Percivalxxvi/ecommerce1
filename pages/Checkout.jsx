import React from 'react';
import { MonnifyPaymentButton, usePayWithMonnifyPayment } from 'react-monnify-ts';

const MyPaymentComponent = () => {
  const config = {
    amount: 100,
    currency: "NGN",
    reference: `my_unique_ref_${new Date().getTime()}`, // Generate a unique reference
    customerFullName: "John Doe",
    customerEmail: "john.doe@example.com",
    paymentDescription: "Test payment for service",
    apiKey: "MK_TEST_SV8THETAPX", // Replace with your actual API key
    contractCode: "8205348210", // Replace with your actual contract code
    isLive: false, // Set to true for live environment
    onComplete: (response) => {
      console.log("Payment completed:", response);
      // Handle successful payment response
    },
    onClose: (response) => {
      console.log("Payment modal closed:", response);
      // Handle modal close event
    },
  };

  const { initializePayment } = usePayWithMonnifyPayment(config);

  return (
    <div>
      <MonnifyPaymentButton {...config}>
        Pay with Monnify (Button Component)
      </MonnifyPaymentButton>

      <button onClick={() => initializePayment()}>
        Pay with Monnify (Custom Button)
      </button>
    </div>
  );
};

export default MyPaymentComponent;