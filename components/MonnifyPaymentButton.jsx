// src/components/MonnifyPaymentButton.jsx
import React from "react";
// import { MonnifyButton } from "react-monnify";

const MonnifyPaymentButton = ({
  amount,
  customerName,
  customerEmail,
  customerPhone,
  onComplete,
  onClose,
}) => {
  const config = {
    amount,
    currency: "NGN", // or your currency
    reference: `${Date.now()}`, // unique transaction reference
    customerName,
    customerEmail,
    customerMobileNumber: customerPhone,
    apiKey: "YOUR_MONNIFY_API_KEY",
    contractCode: "YOUR_CONTRACT_CODE",
    paymentDescription: "Payment for Order",
    isTestMode: true, // switch to false in production
    metadata: { cartId: "12345", items: [] },
  };

  return (
    <MonnifyButton
      text="Pay Now"
      {...config}
      onComplete={onComplete}
      onClose={onClose}
      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
    />
  );
};

export default MonnifyPaymentButton;
