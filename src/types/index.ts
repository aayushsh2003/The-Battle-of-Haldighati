export interface Citation {
  id: string;
  author: string;
  title: string;
  publication?: string;
  year: number;
  url?: string;
}

export interface Figure {
  id: string;
  name: string;
  title: string;
  side: "Rajput" | "Mughal";
  description: string;
  imageUrl?: string;
  quotes?: string[];
  citationIds: string[];
}

export interface BattleEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  citationIds: string[];
}

export interface MapMarker {
  id: string;
  coordinates: [number, number];
  title: string;
  description: string;
}

export interface HistoricalImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  attribution: string;
  period: string;
  citationIds: string[];
}