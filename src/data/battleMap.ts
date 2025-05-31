import { MapMarker } from "../types";

// Note: These are approximate coordinates for illustrative purposes
// In a real implementation, these would be based on historical maps and archaeological evidence
export const mapMarkers: MapMarker[] = [
  {
    id: "haldighati-pass",
    coordinates: [24.7772, 73.6883],
    title: "Haldighati Pass",
    description: "The narrow mountain pass where the battle took place. Its yellow soil gives it the name 'Haldi' (turmeric) ghati (valley)."
  },
  {
    id: "rajput-position",
    coordinates: [24.7830, 73.6920],
    title: "Initial Rajput Position",
    description: "Maharana Pratap positioned his forces on higher ground to gain tactical advantage and compensate for his smaller numbers."
  },
  {
    id: "mughal-position",
    coordinates: [24.7730, 73.6850],
    title: "Mughal Army Position",
    description: "Raja Man Singh's forces were arranged in the traditional Mughal battle formation with cavalry on the flanks and infantry at center."
  },
  {
    id: "bhil-archers",
    coordinates: [24.7850, 73.6930],
    title: "Bhil Tribal Archers",
    description: "Local Bhil tribesmen loyal to Mewar provided archery support from elevated positions."
  },
  {
    id: "chetak-memorial",
    coordinates: [24.7790, 73.6900],
    title: "Chetak Memorial",
    description: "Site commemorating where Pratap's loyal horse Chetak is believed to have died after carrying the wounded Maharana to safety."
  },
  {
    id: "badshah-bagh",
    coordinates: [24.7720, 73.6840],
    title: "Badshah Bagh",
    description: "The area where the Mughal command was established before the battle."
  },
  {
    id: "rajput-retreat",
    coordinates: [24.7900, 73.7000],
    title: "Rajput Retreat Path",
    description: "The route through which Maharana Pratap and surviving Rajput forces retreated to the hills after the battle."
  }
];

export const getMapMarkerById = (id: string): MapMarker | undefined => {
  return mapMarkers.find(marker => marker.id === id);
};