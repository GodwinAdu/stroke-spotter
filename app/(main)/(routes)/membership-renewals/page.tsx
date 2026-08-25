"use client"
import Breadcrumb from '@/components/common/Breadcrumbs';
import React, { useState } from 'react';


interface RenewalFormState {
  memberId: string;
  email: string;
  duration: string;
}

const MembershipRenewalPage: React.FC = () => {
  const [formData, setFormData] = useState<RenewalFormState>({
    memberId: "",
    email: "",
    duration: "1 month"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can call an API or handle the form data as required
    console.log(formData);
  };

  return (
    <>
    <Breadcrumb
        pageName="Membership Renewals"
        description="Frequently Asked Questions"
      />

      <div className="p-4">
      <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-400 p-4">
          <h2 className="text-xl font-semibold mb-2">Membership Renewal</h2>
          <p className="text-gray-700">We value your participation in our community! To renew your membership, please fill out the form below. Provide your Membership ID or Username, your email, and select the desired renewal duration. If you have any questions, please contact our support team.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="memberId" className="block text-gray-700">Membership ID:</label>
            <input 
              type="text"
              id="memberId"
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              className="mt-2 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700">Duration of Renewal:</label>
            <select 
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-2 p-2 w-full border rounded"
            >
              <option value="1 month">1 Month</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Renew Membership
          </button>
        </form>
      </div>
    </>
  );
};

export default MembershipRenewalPage;
