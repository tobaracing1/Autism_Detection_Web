import { useState } from "react";

const HalamanRiwayat = () => {
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsBoxExpanded(!isBoxExpanded);
  };

  return (
    <div className="border flex justify-center items-center h-screen">
      <div
        className={`w-32 h-32 bg-blue-500 rounded-md transition-transform transform ${
          isBoxExpanded ? "scale-150" : ""
        }`}
      >
        hi
      </div>
      <button
        className="border ml-4 px-4 py-2 bg-gray-800 text-white rounded-md"
        onClick={handleButtonClick}
      >
        {isBoxExpanded ? "Shrink" : "Expand"}
      </button>
    </div>
  );
};

export default HalamanRiwayat;
