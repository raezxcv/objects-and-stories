export type ObjectCategory = 
  | 'all' 
  | 'furniture' 
  | 'lighting' 
  | 'ceramics' 
  | 'accessories' 
  | 'tools' 
  | 'everyday';

export interface MaterialDetail {
  name: string;
  detail: string;
  sourcing: string;
  tactility: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface MakerProfile {
  name: string;
  studio: string;
  location: string;
  yearEstablished: number;
  discipline: string;
  philosophy: string;
  bio: string;
}

export interface NarrativeStory {
  chapter1Title: string;
  chapter1Text: string;
  chapter2Title: string;
  chapter2Text: string;
  chapter3Title: string;
  chapter3Text: string;
  pullQuote: {
    text: string;
    attribution: string;
    title: string;
  };
}

export interface PatinaStage {
  year: string;
  stageName: string;
  description: string;
  tactileShift: string;
}

export interface AcousticResonance {
  label: string;
  note: string;
  hz: number;
  description: string;
}

export interface DesignObject {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: ObjectCategory;
  categoryLabel: string;
  year: number;
  maker: MakerProfile;
  origin: string;
  dimensions: {
    metric: string;
    imperial: string;
    weight: string;
  };
  materials: MaterialDetail[];
  productionMethod: string;
  edition: string;
  imageUrl: string;
  secondaryImages?: string[];
  isAiGenerated: boolean;
  imageCredit: string;
  summary: string;
  designHistory: string;
  narrative: NarrativeStory;
  specifications: Specification[];
  relatedIds: string[];
  patinaTimeline?: PatinaStage[];
  acousticResonance?: AcousticResonance;
}

export interface EditorialArticle {
  id: string;
  slug: string;
  issueNumber: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    location: string;
  };
  readTime: string;
  date: string;
  leadParagraph: string;
  bodySections: Array<{
    heading?: string;
    content: string;
  }>;
  relatedObjectId?: string;
  heroImageUrl: string;
}

export interface Contributor {
  name: string;
  role: string;
  location: string;
  bio: string;
  portraitInitials: string;
}
