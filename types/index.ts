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

// ---- Blog ----
export interface BlogPost {
  postId?: string;
  status: string;
  createdAt?: string;
  thumbnail: string;
  excerpt: string;
  tags: string[];
  category: string;
  author: string;
  s3Url: string;
  title: string;
}

export interface BlogPostResponse {
  posts: BlogPost[];
}

export interface Metadata {
  title: string;
  tags: string;
  category: string;
}
