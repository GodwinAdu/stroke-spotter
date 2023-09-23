"use client"

import { saveFaq } from '@/lib/actions/faq.actions';
import { usePathname, useRouter } from 'next/navigation';
// Dialog.tsx
import React, { useState } from 'react';

interface DialogProps {
    isOpen: boolean;
    heading:string;
    onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, heading }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const path = usePathname();
    const router = useRouter();

    const handleSave = async () => {
        await saveFaq(question,answer,path)
        onClose();
        router.push("/dashboard");
    };
 console.log(path)
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <h1 className='font-bold text-center text-xl md:text-2xl'>{heading}</h1>
                    <div className="mt-2">
                        <input
                            className="w-full p-2 border rounded-md"
                            placeholder="faq question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <textarea
                            className="w-full mt-4 p-2 border rounded-md"
                            rows={4}
                            placeholder="faq answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            className="mr-2 px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
