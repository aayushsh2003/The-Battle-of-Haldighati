import React from "react";

interface PeriodDecorationProps {
  type: "divider" | "corner" | "border";
  className?: string;
}

const PeriodDecoration: React.FC<PeriodDecorationProps> = ({ type, className = "" }) => {
  switch (type) {
    case "divider":
      return (
        <div className={`flex items-center justify-center my-6 ${className}`}>
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-goldenrod to-transparent"></div>
          <div className="mx-4 text-goldenrod">⚜</div>
          <div className="w-1/3 h-px bg-gradient-to-l from-transparent via-goldenrod to-transparent"></div>
        </div>
      );
    
    case "corner":
      return (
        <div className={`absolute w-12 h-12 border-goldenrod ${className}`} aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-goldenrod"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-goldenrod rounded-full"></div>
        </div>
      );
    
    case "border":
      return (
        <div className={`border-2 border-goldenrod rounded-lg p-1 ${className}`}>
          <div className="border border-dashed border-saddleBrown rounded-md w-full h-full">
            {/* Content goes inside this div */}
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default PeriodDecoration;