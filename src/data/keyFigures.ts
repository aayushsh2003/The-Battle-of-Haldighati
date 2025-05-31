import { Figure } from "../types";

export const keyFigures: Figure[] = [
  {
    id: "maharana-pratap",
    name: "Maharana Pratap",
    title: "Ruler of Mewar",
    side: "Rajput",
    description: "Maharana Pratap Singh (1540-1597) was the ruler of Mewar, a region in present-day Rajasthan. Known for his resistance against Mughal emperor Akbar, he refused to submit to Mughal authority and fought to maintain the independence of Mewar. Pratap rode his famous horse Chetak in the Battle of Haldighati.",
    imageUrl: "../../maharaha-pratap.jpg",
    quotes: [
      "I cannot serve foreigners nor can I bow down to them. I am a descendant of the proud Sisodia Rajput clan who have never accepted servitude to any foreign ruler.",
      "As long as there is life in my body, I will continue to fight for the freedom of Mewar."
    ],
    citationIds: ["sharma1954", "tod1829"]
  },
  {
    id: "man-singh",
    name: "Raja Man Singh",
    title: "Kachwaha Rajput General of Akbar",
    side: "Mughal",
    description: "Raja Man Singh I (1550-1614) was a Kachwaha Rajput who served as a trusted general in Emperor Akbar's army. He was appointed by Akbar to lead the Mughal forces against Maharana Pratap at Haldighati. His appointment was strategic, as Akbar hoped the presence of a Rajput commander would cause dissension in Pratap's ranks.",
    imageUrl: "../../man_singh.jpg",
    quotes: [
      "I serve the Emperor who respects all religions and seeks to unite all people under a single, peaceful rule.",
      "It is with a heavy heart that I lead this army against fellow Rajputs, but my loyalty to the Emperor cannot be questioned."
    ],
    citationIds: ["chandra1982", "sarkar1960"]
  },
  {
    id: "hakim-khan-sur",
    name: "Hakim Khan Sur",
    title: "Afghan General",
    side: "Rajput",
    description: "Hakim Khan Sur was an Afghan Muslim general who fought alongside Maharana Pratap against the Mughals. His presence in Pratap's army illustrates that the conflict was not purely religious but political. He commanded a contingent of Afghan soldiers and was known for his loyalty to Mewar.",
    imageUrl: "../../hakim-khan-sur.jpg",
    quotes: [
      "My allegiance is to Mewar and its rightful ruler, not to any distant emperor who demands submission.",
      "It is honor, not religion, that guides my sword in this battle."
    ],
    citationIds: ["sharma1954", "singh2015"]
  },
  {
    id: "akbar",
    name: "Emperor Akbar",
    title: "Third Mughal Emperor",
    side: "Mughal",
    description: "Akbar (1542-1605) was the third Mughal emperor who sought to extend Mughal control throughout the Indian subcontinent. Though known for his religious tolerance and administrative reforms, he was determined to bring all Rajput states under Mughal suzerainty. While not present at Haldighati personally, he directed the campaign against Mewar.",
    imageUrl: "../../akbar.jpg",
    quotes: [
      "The unity of India requires that all rulers acknowledge the authority of the Mughal throne.",
      "I offer friendship and honor to those who join us, but must pursue those who resist the peace and unity we bring."
    ],
    citationIds: ["chandra1982", "khan1927"]
  },
  {
    id: "jhala-man",
    name: "Jhala Man",
    title: "Chieftain of Jhala clan",
    side: "Rajput",
    description: "Jhala Man was a loyal chieftain who sacrificed his life in the Battle of Haldighati to save Maharana Pratap. When the battle turned against the Rajputs, he exchanged royal insignia with Pratap and fought on, allowing the Maharana to escape and continue the resistance against the Mughals.",
    imageUrl: "../../jhala_manna.jpg",
    quotes: [
      "My life is a small price to pay for the future of Mewar.",
      "Let the Mughals think they have won today, but as long as the Maharana lives, Mewar lives."
    ],
    citationIds: ["sharma1954", "tod1829"]
  }
];

export const getFiguresBySide = (side: "Rajput" | "Mughal"): Figure[] => {
  return keyFigures.filter(figure => figure.side === side);
};

export const getFigureById = (id: string): Figure | undefined => {
  return keyFigures.find(figure => figure.id === id);
};