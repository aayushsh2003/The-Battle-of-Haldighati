import { Citation } from "../types";

export const citations: Citation[] = [
  {
    id: "chandra1982",
    author: "Chandra, Satish",
    title: "Medieval India: From Sultanat to the Mughals (1526-1748)",
    publication: "Har-Anand Publications",
    year: 1982,
    url: "https://www.example.com/citation1"
  },
  {
    id: "sarkar1960",
    author: "Sarkar, Jadunath",
    title: "Military History of India",
    publication: "Orient Longmans",
    year: 1960,
    url: "https://www.example.com/citation2"
  },
  {
    id: "sharma1954",
    author: "Sharma, Sri Ram",
    title: "Maharana Pratap and His Times",
    publication: "Rajasthan University Press",
    year: 1954,
    url: "https://www.example.com/citation3"
  },
  {
    id: "tod1829",
    author: "Tod, James",
    title: "Annals and Antiquities of Rajasthan",
    publication: "Oxford University Press",
    year: 1829,
    url: "https://www.example.com/citation4"
  },
  {
    id: "khan1927",
    author: "Khan, Abdul Qadir",
    title: "Muntakhab-ul-Lubab",
    publication: "Asiatic Society",
    year: 1927,
    url: "https://www.example.com/citation5"
  },
  {
    id: "roy2012",
    author: "Roy, Kaushik",
    title: "Hinduism and the Ethics of Warfare in South Asia: From Antiquity to the Present",
    publication: "Cambridge University Press",
    year: 2012,
    url: "https://www.example.com/citation6"
  },
  {
    id: "singh2015",
    author: "Singh, Rajendra",
    title: "Battles That Changed History: Decisive Conflicts in Rajasthan",
    publication: "Rajasthan Historical Research Institute",
    year: 2015,
    url: "https://www.example.com/citation7"
  }
];

export const getCitationById = (id: string): Citation | undefined => {
  return citations.find(citation => citation.id === id);
};

export const formatCitation = (citation: Citation): string => {
  let formatted = `${citation.author}. `;
  
  if (citation.title) {
    formatted += `"${citation.title}." `;
  }
  
  if (citation.publication) {
    formatted += `${citation.publication}, `;
  }
  
  formatted += `${citation.year}.`;
  
  return formatted;
};