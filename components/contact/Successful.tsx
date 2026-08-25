"use client"

interface Props {
  isOpen: boolean;
  status: string;
  body: string;
  onClose: () => void;
}

const SucessfulModal = ({ isOpen, onClose ,status,body}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 max-w-3xl w-[100%] px-2 mx-auto">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10">
        <h2 className="text-2xl font-bold mb-4 text-green-500">{status}</h2>
        <p className="dark:text-black">
          {body}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-indigo/50 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SucessfulModal;
