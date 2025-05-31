import React, { useState } from "react";
import { BattleEvent } from "../../types";
import { battleEvents } from "../../data/battleEvents";
import CitationPopover from "./CitationPopover";

const TimelineSlider: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const sortedEvents = [...battleEvents].sort((a, b) => a.date.localeCompare(b.date));

  const handlePrevious = () => {
    setActiveEventIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveEventIndex(prev => (prev < sortedEvents.length - 1 ? prev + 1 : prev));
  };

  const activeEvent = sortedEvents[activeEventIndex];

  return (
    <div className="w-full bg-beige border-2 border-goldenrod rounded-lg p-4 my-6">
      <h3 className="text-xl font-semibold text-maroon mb-4 flex justify-between items-center">
        Battle Timeline
        <span className="text-sm font-normal text-saddleBrown">
          {activeEventIndex + 1} of {sortedEvents.length}
        </span>
      </h3>
      
      <div className="w-full bg-[#E8E4D0] h-2 rounded-full mb-4 relative">
        <div 
          className="absolute bg-maroon h-2 rounded-full transition-all duration-300"
          style={{ width: `${((activeEventIndex + 1) / sortedEvents.length) * 100}%` }}
        ></div>
        
        {/* Timeline markers */}
        <div className="w-full flex justify-between absolute top-0 transform -translate-y-1/2">
          {sortedEvents.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full border-2 border-saddleBrown transition-all ${
                index <= activeEventIndex ? 'bg-goldenrod' : 'bg-[#E8E4D0]'
              }`}
              style={{ transform: 'translateX(-50%)' }}
              onClick={() => setActiveEventIndex(index)}
              aria-label={`Go to event ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold text-saddleBrown">{activeEvent.title}</h4>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-maroon">{activeEvent.date}</span>
            <CitationPopover citationIds={activeEvent.citationIds} />
          </div>
        </div>
        
        <p className="text-saddleBrown mb-4">{activeEvent.description}</p>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={activeEventIndex === 0}
            className={`px-4 py-1 rounded border ${
              activeEventIndex === 0
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-maroon text-maroon hover:bg-maroon hover:text-white transition-colors'
            }`}
            aria-label="Previous event"
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={activeEventIndex === sortedEvents.length - 1}
            className={`px-4 py-1 rounded border ${
              activeEventIndex === sortedEvents.length - 1
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-maroon text-maroon hover:bg-maroon hover:text-white transition-colors'
            }`}
            aria-label="Next event"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlider;