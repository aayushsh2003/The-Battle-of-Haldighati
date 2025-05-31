import React from 'react';
import { mapMarkers } from '../../data/battleMap';

// This is a simplified map implementation
// In a production environment, you would use a proper mapping library like Leaflet or MapboxGL
const BattleMap: React.FC = () => {
  // The map dimensions and center coordinates
  const mapWidth = 600;
  const mapHeight = 400;
  const centerLat = 24.7772;
  const centerLon = 73.6883;
  
  // Scale factor to convert geo coordinates to pixel coordinates
  // This is a very simplified approach for demonstration
  const latScale = 10000;
  const lonScale = 10000;
  
  // Convert geo coordinates to pixel coordinates
  const toPixelCoords = (lat: number, lon: number) => {
    const x = (lon - centerLon) * lonScale + mapWidth / 2;
    const y = (centerLat - lat) * latScale + mapHeight / 2;
    return { x, y };
  };

  return (
    <div className="my-8 border-4 border-goldenrod rounded-lg overflow-hidden bg-beige">
      <div className="p-4 bg-saddleBrown text-beige">
        <h3 className="text-xl font-bold">Battle of Haldighati Map</h3>
        <p className="text-sm">Interactive map showing key locations from the 1576 battle</p>
      </div>
      
      <div className="relative" style={{ width: '100%', height: '400px', backgroundImage: 'url(https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg)', backgroundSize: 'cover' }}>
        {/* Map markers */}
        {mapMarkers.map(marker => {
          const { x, y } = toPixelCoords(marker.coordinates[0], marker.coordinates[1]);
          return (
            <div 
              key={marker.id}
              className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${(x / mapWidth) * 100}%`, top: `${(y / mapHeight) * 100}%` }}
              title={marker.title}
            >
              <div className="w-6 h-6 bg-maroon rounded-full border-2 border-white flex items-center justify-center text-white font-bold">
                <span aria-hidden="true">!</span>
              </div>
              
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 w-48 bg-white p-2 rounded shadow-lg text-sm z-10 pointer-events-none transition-opacity">
                <h4 className="font-bold text-saddleBrown">{marker.title}</h4>
                <p className="text-xs text-gray-700">{marker.description}</p>
              </div>
            </div>
          );
        })}
        
        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-2 rounded shadow-md">
          <h4 className="text-sm font-bold text-saddleBrown mb-1">Legend</h4>
          <div className="flex items-center text-xs text-gray-700 mb-1">
            <div className="w-3 h-3 bg-maroon rounded-full mr-2"></div>
            <span>Battle locations</span>
          </div>
          <div className="text-xs text-gray-500 italic">Hover over markers for details</div>
        </div>
      </div>
      
      <div className="p-4 bg-beige text-saddleBrown text-sm">
        <p>
          <strong>Note:</strong> This map is a historical representation based on available sources. Exact locations may vary slightly from actual historical positions.
        </p>
      </div>
    </div>
  );
};

export default BattleMap;