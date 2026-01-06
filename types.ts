
export enum Platform {
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  REVIEW = 'review'
}

export interface User {
  name: string;
  handle: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  user: User;
  platform: Platform;
  content: string;
  timestamp: string;
  mediaUrl?: string;
  verified?: boolean;
  product?: string;
  isLive?: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  description: string;
  expiryDate: string;
  category: 'seasonal' | 'welcome' | 'influencer' | 'limited';
  isActive: boolean;
}

export type FilterType = 'all' | Platform;
