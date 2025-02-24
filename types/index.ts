export interface Certification {
  id: number;
  name: string;
  date: string;
  imageSrc: string;
  description: string;
  badgeLink?: string;
}

export interface Technology {
  id: number;
  name: string;
}
