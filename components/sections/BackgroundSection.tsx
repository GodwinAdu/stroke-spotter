

interface BackgroundSectionProps {
  imageUrl: string;
  description?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ imageUrl, description, buttonText, onButtonClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[500px] bg-center bg-cover" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {description && <p className="relative z-10 mb-4 text-center text-white">{description}</p>}
      
      <button
        onClick={onButtonClick}
        className="relative z-10 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default BackgroundSection;
