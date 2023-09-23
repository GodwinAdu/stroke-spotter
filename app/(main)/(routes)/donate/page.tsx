"use client";

import Breadcrumb from "@/components/common/Breadcrumbs";
// DonationPage.tsx
import React, { useState } from "react";

const DonationPage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");
  const amounts = [5, 10, 25, 50];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Donated: $${selectedAmount}`);
    // Handle payment processing here
  };

  return (
    <>
      <Breadcrumb pageName="Donate Now" description="Your donation is a must" />
      <div className="p-4 md:max-w-lg mx-auto bg-white shadow-lg rounded-md px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Support Us with a Donation
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="mb-2 font-medium">Choose a donation amount:</p>
            <div className="flex space-x-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`w-20 h-10 focus:outline-none ${
                    selectedAmount === amount
                      ? "bg-indigo/50 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  ${amount}
                </button>
              ))}
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Custom"
                className="w-28 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="cardNumber">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 1234 1234 1234"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <div>
              <label className="block mb-2 font-medium" htmlFor="expiryDate">
                Expiry Date:
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="cvc">
                CVC:
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="123"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-indigo/50 text-white rounded-md"
          >
            Donate ${selectedAmount}
          </button>
        </form>
      </div>
    </>
  );
};

export default DonationPage;
