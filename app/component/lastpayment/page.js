"use client";

import { useEffect } from "react";

export default function PaymentPage() {
  useEffect(() => {
    // Load the Moyasar JS library
    const script = document.createElement("script");
    script.src = "https://cdn.moyasar.com/mpf/1.11.4/moyasar.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Make Payment</h1>

      <div
        className="mysr-form"
        data-amount="1000" 
        data-currency="SAR"
        data-description="NetMovies Payment"
        data-publishable-api-key="pk_test_6yk3higCYiux7vj2EBWxEEe4DSdiwt7yGPfYS1Q4"
        data-callback-url="https://your-domain.com/component/payment-success"
        data-methods="creditcard,applepay,mada"
      ></div>
    </div>
  );
}
