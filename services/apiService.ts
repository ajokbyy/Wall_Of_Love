
import { Testimonial } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchLocalTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) return [];
    const data = await response.json();
    // Mark items from MongoDB as live
    return data.map((item: Testimonial) => ({ ...item, isLive: true }));
  } catch (error) {
    console.warn('Local MongoDB backend not detected. Falling back to mock data.');
    return [];
  }
}
