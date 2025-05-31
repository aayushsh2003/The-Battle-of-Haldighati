import { BattleEvent } from "../types";

export const battleEvents: BattleEvent[] = [
  {
    id: "pre-battle-diplomacy",
    date: "1572-1576",
    title: "Diplomatic Efforts and Rising Tensions",
    description: "Before the battle, Emperor Akbar made several diplomatic attempts to bring Mewar under Mughal control. He sent six diplomatic missions to Maharana Pratap, including one led by Raja Man Singh, but Pratap refused to personally submit to Akbar. The final embassy was led by Todar Mal, who returned unsuccessful, prompting Akbar to prepare for military action.",
    citationIds: ["chandra1982", "sharma1954"]
  },
  {
    id: "mughal-deployment",
    date: "June 18, 1576",
    title: "Mughal Army Deployment",
    description: "The Mughal army of approximately 10,000 soldiers, led by Raja Man Singh, marched towards Haldighati. The army included Rajput allies, Afghan cavalry, and Mughal infantry. They positioned themselves at the entrance of the Haldighati pass, a narrow corridor between two hills that was strategically important for controlling access to Mewar.",
    citationIds: ["sarkar1960", "khan1927"]
  },
  {
    id: "rajput-strategy",
    date: "June 18, 1576 (morning)",
    title: "Rajput Battle Strategy",
    description: "Maharana Pratap, with an army of about 3,000 soldiers, decided to use the terrain to his advantage. Unable to match the Mughal numbers, he planned a surprise attack from the hills, using the narrow pass to negate the Mughal numerical superiority. His forces included Bhil tribal archers who were positioned on higher ground to provide covering fire.",
    citationIds: ["sharma1954", "tod1829"]
  },
  {
    id: "battle-begins",
    date: "June 18, 1576 (mid-morning)",
    title: "Initial Rajput Charge",
    description: "The battle began with a fierce charge by Rajput cavalry led by Maharana Pratap himself. Mounted on his legendary horse Chetak, Pratap led his forces directly toward the Mughal center where Raja Man Singh's elephant was positioned. The surprise and ferocity of this initial charge momentarily threw the Mughal forces into disarray.",
    citationIds: ["sarkar1960", "sharma1954"]
  },
  {
    id: "personal-combat",
    date: "June 18, 1576 (noon)",
    title: "Personal Combat Between Leaders",
    description: "In one of the most legendary moments of the battle, Maharana Pratap sought out Raja Man Singh for personal combat. Pratap's forces cut through to Man Singh's elephant. Pratap is said to have thrown his spear with such force that it pierced the howdah's protective plates. Man Singh escaped harm, but the moment became emblematic of Rajput valor.",
    citationIds: ["sharma1954", "tod1829"]
  },
  {
    id: "tide-turns",
    date: "June 18, 1576 (afternoon)",
    title: "Mughal Reinforcements Arrive",
    description: "Despite initial Rajput success, the tide of battle turned when Mughal reinforcements arrived. The superior numbers of the Mughal army began to tell as they encircled the Rajput forces. Hakim Khan Sur and his Afghan contingent fought bravely but were gradually pushed back by the fresh Mughal troops.",
    citationIds: ["sarkar1960", "khan1927"]
  },
  {
    id: "jhala-sacrifice",
    date: "June 18, 1576 (late afternoon)",
    title: "Sacrifice of Jhala Man",
    description: "As the battle turned against the Rajputs, Jhala Man, a loyal chieftain, donned the royal insignia of Maharana Pratap and continued fighting to draw the Mughal forces away. This sacrifice allowed Pratap to escape the battlefield. Jhala Man fought until he was killed, his actions becoming one of the most celebrated examples of Rajput loyalty.",
    citationIds: ["sharma1954", "tod1829"]
  },
  {
    id: "pratap-escape",
    date: "June 18, 1576 (evening)",
    title: "Maharana Pratap's Escape",
    description: "With the battle clearly lost, Maharana Pratap was persuaded to leave the field to continue the resistance another day. His legendary horse Chetak carried him over a stream but was mortally wounded. Pratap escaped into the hills, where the Mughal cavalry could not follow effectively, allowing him to regroup his forces later.",
    citationIds: ["sharma1954", "tod1829"]
  },
  {
    id: "battle-aftermath",
    date: "June 19-30, 1576",
    title: "Immediate Aftermath",
    description: "While the Mughals claimed victory at Haldighati, they failed to capture Maharana Pratap or secure lasting control over Mewar. Raja Man Singh occupied parts of Mewar briefly but could not hold them against guerrilla attacks. The battle ended with a tactical Mughal victory but a strategic stalemate.",
    citationIds: ["chandra1982", "sarkar1960"]
  },
  {
    id: "continued-resistance",
    date: "1576-1597",
    title: "Continued Resistance and Later Years",
    description: "Following Haldighati, Maharana Pratap continued his resistance from the hills and forests of Mewar. He gradually recaptured much of his lost territory through guerrilla warfare. By the time of his death in 1597, he had recovered most of Mewar except for Chittor. His resistance became symbolic of Rajput determination to maintain independence.",
    citationIds: ["sharma1954", "chandra1982"]
  }
];

export const getBattleEventById = (id: string): BattleEvent | undefined => {
  return battleEvents.find(event => event.id === id);
};