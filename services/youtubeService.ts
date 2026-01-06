
import { Testimonial, Platform } from '../types';

const YOUTUBE_API_KEY = 'AIzaSyDgDFpgN4j3v0tRD6jXS7JJZYRQjg-c5ew';
// Using a popular watch review video ID for authentic "Flex Watches" style content
const WATCH_VIDEO_ID = 'vO6Xm-Y-6vE'; 

export async function fetchYouTubeTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${WATCH_VIDEO_ID}&maxResults=10&key=${YOUTUBE_API_KEY}`
    );
    
    if (!response.ok) throw new Error('YouTube API fetch failed');
    
    const data = await response.json();
    
    return data.items.map((item: any) => {
      const comment = item.snippet.topLevelComment.snippet;
      return {
        id: `yt-${item.id}`,
        user: {
          name: comment.authorDisplayName,
          handle: `@${comment.authorDisplayName.replace(/\s+/g, '').toLowerCase()}`,
          avatar: comment.authorProfileImageUrl
        },
        platform: Platform.YOUTUBE,
        content: comment.textDisplay.replace(/<br>/g, '\n'),
        timestamp: new Date(comment.publishedAt).toLocaleDateString(undefined, { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        verified: false,
        isLive: true // Explicitly marking as Live API data
      };
    });
  } catch (error) {
    console.error('Error fetching YouTube comments:', error);
    return [];
  }
}
