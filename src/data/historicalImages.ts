import { HistoricalImage } from "../types";

export const historicalImages: HistoricalImage[] = [
  {
    id: "haldighati-painting",
    title: "Battle of Haldighati",
    description: "A historical painting depicting the fierce cavalry charge led by Maharana Pratap against the Mughal forces. The painting shows Pratap on his horse Chetak, recognizable by the royal insignia and armor.",
    imageUrl: "https://images.pexels.com/photos/14760843/pexels-photo-14760843.jpeg",
    attribution: "Mewar School of Painting, Rajasthan State Archives",
    period: "Late 17th century",
    citationIds: ["sharma1954"]
  },
  {
    id: "pratap-portrait",
    title: "Portrait of Maharana Pratap",
    description: "Traditional portrait of Maharana Pratap showing him with his spear (known as Bhala) and in traditional Rajput royal attire. The painting emphasizes his tall stature and strong build that historical accounts frequently mention.",
    imageUrl: "https://images.pexels.com/photos/15193799/pexels-photo-15193799.jpeg",
    attribution: "Collection of City Palace Museum, Udaipur",
    period: "18th century",
    citationIds: ["tod1829"]
  },
  {
    id: "akbar-durbar",
    title: "Akbar's Court (Durbar)",
    description: "Mughal miniature showing Emperor Akbar in his court with his nobles, including Raja Man Singh. The painting illustrates the multicultural nature of the Mughal court with Rajput nobles serving alongside Muslim officers.",
    imageUrl: "../../public/mughal-darbar.jpg",
    attribution: "From Akbarnama, Victoria and Albert Museum",
    period: "c. 1590",
    citationIds: ["chandra1982"]
  },
  {
    id: "haldighati-landscape",
    title: "Haldighati Pass Landscape",
    description: "Historical drawing of the Haldighati pass showing its narrow confines between two hills. The yellowish soil that gives the pass its name is clearly depicted.",
    imageUrl: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg",
    attribution: "Sketches of Western India, British Library Collection",
    period: "Early 19th century",
    citationIds: ["tod1829"]
  },
  {
    id: "rajput-armor",
    title: "Rajput Warrior Armor and Weapons",
    description: "Collection of 16th century Rajput armor including mail and plate armor (charaina), helmets (top), shields (dhal), and various weapons including the characteristic Rajput curved sword (khanda).",
    imageUrl: "../../rajput-armor.jpg",
    attribution: "National Museum, New Delhi",
    period: "16th century",
    citationIds: ["sarkar1960"]
  },
  {
    id: "mughal-cavalry",
    title: "Mughal Cavalry Formations",
    description: "Illustration depicting Mughal cavalry tactics and formations as used during the reign of Akbar. The image shows the distinctive horsemen with composite bows and light armor that made Mughal cavalry highly mobile.",
    imageUrl: "../../mughal-cavalry.jpg",
    attribution: "From Ain-i-Akbari, Bibliothèque Nationale de France",
    period: "Late 16th century",
    citationIds: ["khan1927"]
  },
  {
    id: "chetak-memorial",
    title: "Memorial of Chetak",
    description: "Photograph of the memorial erected in honor of Chetak, Maharana Pratap's loyal horse who carried him to safety despite being mortally wounded. The memorial is located near the battlefield at Haldighati.",
    imageUrl: "https://images.pexels.com/photos/6670704/pexels-photo-6670704.jpeg",
    attribution: "Archaeological Survey of India",
    period: "Modern (commemorating 1576 event)",
    citationIds: ["sharma1954"]
  }
];

export const getHistoricalImageById = (id: string): HistoricalImage | undefined => {
  return historicalImages.find(image => image.id === id);
};