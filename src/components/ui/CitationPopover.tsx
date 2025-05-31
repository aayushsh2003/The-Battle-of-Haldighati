import React, { useState, useRef } from "react";
import { Citation } from "../../types";
import { getCitationById, formatCitation } from "../../data/citations";

interface CitationPopoverProps {
  citationIds: string[];
}

const CitationPopover: React.FC<CitationPopoverProps> = ({ citationIds }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const citations: Citation[] = citationIds
    .map(id => getCitationById(id))
    .filter((citation): citation is Citation => !!citation);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // Close popover when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={togglePopover}
        className="inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-maroon rounded-full hover:bg-saddleBrown focus:outline-none focus:ring-2 focus:ring-goldenrod transition-colors"
        aria-label="View citations"
      >
        {citationIds.length}
      </button>
      
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-72 bg-beige border border-saddleBrown rounded-md shadow-lg p-3">
          <h4 className="text-maroon font-semibold mb-2 border-b border-goldenrod pb-1">Citations</h4>
          <ul className="text-sm space-y-2">
            {citations.map(citation => (
              <li key={citation.id}>
                <p className="text-saddleBrown">{formatCitation(citation)}</p>
                {citation.url && (
                  <a 
                    href={citation.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-maroon hover:underline"
                  >
                    View source
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CitationPopover;