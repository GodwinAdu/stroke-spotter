"use client";


import { PaystackButton } from "react-paystack";
import React, { useState } from "react";


interface PaystackProps{
   
}
const DonateComponent = ({user}) => {
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
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
    const subscriptionSuccess = () => {
        console.log("Payment successful");
        // Handle payment success here
    };
    const subscriptionClose = () => {
        console.log("Payment closed");
        // Handle payment close here
    };

    const componentProps = {
        email: user?.email,
        amount: selectedAmount * 100,
        custom_fields: {
            name: user?.name,
        },
        currency: process.env.NEXT_PUBLIC_PAYSTACK_CURRENCY!,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        text:  ` Donate Gh${selectedAmount}`,
        onSuccess: () => subscriptionSuccess(),
        onClose: () => subscriptionClose()
    }




    return (
        <>

            <div className="p-4 md:max-w-lg mx-auto bg-white shadow-lg rounded-md px-4 my-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Support Us with a Donation
                </h2>
                <form onSubmit={handleSubmit} className="py-16 px-10">
                    <div className="mb-4 space-y-6">
                        <p className="mb-2 font-medium">Choose a donation amount:</p>
                        <div className="flex space-x-2 ">
                            {amounts.map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    onClick={() => setSelectedAmount(amount)}
                                    className={`w-20 h-10 focus:outline-none px-3 rounded-md ${selectedAmount === amount
                                            ? "bg-indigo/50 text-white"
                                            : "bg-gray-200"
                                        }`}
                                >
                                    Gh{amount}
                                </button>
                            ))}
                            <input
                                type="number"
                                min="1"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                placeholder="Custom"
                                className="w-28 p-2 border rounded-md flex-1"
                            />
                        </div>
                    </div>

                    <PaystackButton {...componentProps} className="w-full items-center mt-4 inline-block bg-indigo/50 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300" />
                </form>
            </div>
        </>
    );
};

export default DonateComponent;

//**sk_live_8b5cc782e6c6a8d3de3f69698d93689eee2f35a0
