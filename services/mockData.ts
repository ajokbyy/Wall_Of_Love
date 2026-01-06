
import { Testimonial, Platform, Coupon } from '../types';

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    user: { name: 'Julian Vane', handle: '@j_vane_time', avatar: 'https://picsum.photos/seed/julian/100/100' },
    platform: Platform.TWITTER,
    content: "Just unboxed my Flex Chrono-Steel. The weight on the wrist is perfect, and that sapphire crystal finish is absolutely stunning. Best watch in this price bracket by far. ⌚✨ #FlexWatches #Horology",
    timestamp: '1 hour ago',
    verified: true,
    product: 'Chrono-Steel Pro'
  },
  {
    id: '2',
    user: { name: 'Sophia Ricci', handle: 'soph_style', avatar: 'https://picsum.photos/seed/sophia/100/100' },
    platform: Platform.INSTAGRAM,
    content: "Obsessed with how the Rose Gold Voyager catches the light. It's the perfect mix of elegant and bold. Can't wait to wear this to the gala tonight! 😍",
    timestamp: '4 hours ago',
    mediaUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600&h=800',
    product: 'Voyager Rose Gold'
  },
  {
    id: 'yt-mock-1',
    user: { name: 'TechRave Reviews', handle: '@techrave_official', avatar: 'https://picsum.photos/seed/techrave/100/100' },
    platform: Platform.YOUTUBE,
    content: "The build quality on the Flex Sport series is actually insane for $150. I've been wearing it for 3 weeks straight - gym, swimming, even slept with it. No scratches. Full video link in bio! \n\nPros: \n- Strap comfort \n- Lume brightness\n- Price",
    timestamp: '5 hours ago',
    mediaUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=600&h=400',
    verified: true,
    product: 'Sport Endurance'
  },
  {
    id: '3',
    user: { name: 'Liam Henderson', handle: 'LiamH', avatar: 'https://picsum.photos/seed/liam/100/100' },
    platform: Platform.REVIEW,
    content: "I've owned luxury watches that cost 10x this, and honestly, the attention to detail on the movement here is incredible. Keeping perfect time after a month of daily wear. Five stars.",
    timestamp: '2 days ago',
    verified: true,
    product: 'Heritage Automatic'
  },
  {
    id: 'yt-mock-2',
    user: { name: 'Casey Vlogs', handle: '@casey_daily', avatar: 'https://picsum.photos/seed/casey/100/100' },
    platform: Platform.YOUTUBE,
    content: "Is it just me or is the packaging for Flex Watches better than some $2k brands? Just got the limited edition moon watch. CRAZY dial texture. 🌙",
    timestamp: '1 day ago'
  },
  {
    id: '4',
    user: { name: 'TheWatchGuide', handle: 'WatchGuideYT', avatar: 'https://picsum.photos/seed/guide/100/100' },
    platform: Platform.YOUTUBE,
    content: "Is Flex Watches the new king of affordable luxury? In my latest video, we take apart the Aqua Diver to see if it really holds up under 200m pressure. Spoiler: it's a beast.",
    timestamp: '3 days ago',
    mediaUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=640&h=360',
    product: 'Aqua Diver 200m'
  },
  {
    id: 'yt-mock-3',
    user: { name: 'Dave Watches', handle: '@dave_time', avatar: 'https://picsum.photos/seed/dave/100/100' },
    platform: Platform.YOUTUBE,
    content: "Can someone tell me if the Diver version comes in a 38mm? My wrists are tiny but I LOVE the design of the orange bezel one shown in this clip.",
    timestamp: '1 week ago'
  },
  {
    id: '5',
    user: { name: 'Marcus Sterling', handle: '@m_sterling', avatar: 'https://picsum.photos/seed/marcus/100/100' },
    platform: Platform.TWITTER,
    content: "Finally a strap that doesn't irritate my skin! The vulcanized rubber on the Flex Sport series is elite. Comfortable even during my marathon prep. 🏃‍♂️💨",
    timestamp: '5 days ago',
    product: 'Sport Endurance'
  },
  {
    id: 'yt-mock-4',
    user: { name: 'StyleBySarah', handle: '@sarah_looks', avatar: 'https://picsum.photos/seed/sarahstyle/100/100' },
    platform: Platform.YOUTUBE,
    content: "The way the light hits the blue sunburst dial is 10/10. Definitely my new daily driver for the office. 💼✨",
    timestamp: '2 weeks ago',
    mediaUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600&h=450',
    product: 'Heritage Blue'
  },
  {
    id: '6',
    user: { name: 'Chloe Dubois', handle: 'chloe_d', avatar: 'https://picsum.photos/seed/chloe/100/100' },
    platform: Platform.INSTAGRAM,
    content: "Golden hour with my favorite timepiece. Simple, timeless, and uniquely Flex. 🌅🥂",
    timestamp: '1 week ago',
    mediaUrl: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=600&h=400',
    product: 'Minimalist Gold'
  },
  {
    id: 'yt-mock-5',
    user: { name: 'The Horology Hub', handle: '@horologyhub', avatar: 'https://picsum.photos/seed/hub/100/100' },
    platform: Platform.YOUTUBE,
    content: "Quick macro shot of the automatic movement in the Heritage series. For under $500, finding a custom rotor like this is unheard of. Absolute fire. 🔥🔥🔥",
    timestamp: '3 weeks ago',
    mediaUrl: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?auto=format&fit=crop&q=80&w=600&h=400',
    product: 'Heritage Automatic'
  }
];

export const MOCK_COUPONS: Coupon[] = [
  {
    id: 'c1',
    code: 'FLEXWELCOME20',
    discount: '20% OFF',
    description: 'Special welcome discount for new members of the Flex Circle. Valid storewide.',
    expiryDate: 'Dec 31, 2024',
    category: 'welcome',
    isActive: true
  },
  {
    id: 'c2',
    code: 'DIVERMODE',
    discount: '$50 OFF',
    description: 'Exclusive discount for the Aqua Diver series. Explore the depths with style.',
    expiryDate: 'Nov 15, 2024',
    category: 'limited',
    isActive: true
  },
  {
    id: 'c3',
    code: 'AUTUMNLEATHER',
    discount: '15% OFF',
    description: 'Perfect for the season. Valid on all leather-strap heritage collections.',
    expiryDate: 'Oct 30, 2024',
    category: 'seasonal',
    isActive: true
  },
  {
    id: 'c4',
    code: 'COLLECTOR10',
    discount: '10% OFF',
    description: 'Thank you for your loyalty. Stackable with existing points for verified owners.',
    expiryDate: 'Ongoing',
    category: 'influencer',
    isActive: true
  }
];
