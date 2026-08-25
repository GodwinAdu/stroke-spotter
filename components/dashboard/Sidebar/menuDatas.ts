import { ReactNode } from 'react';

interface SubItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  icon: ReactNode; // This will accommodate React components, strings, numbers, fragments, etc.
  subItems?: SubItem[]; // Make it optional if not every item has sub-items
}


export const menuDatas:MenuItem[] = [
    {
      label: 'Dashboard',
      icon: "",
      subItems: [
        { label: 'Overview', path: '/dashboard' },
        { label: 'Home', path: '/dashboard/home' }
      ]
    },
    {
      label: 'News',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Blogs', path: '/dashboard/blog' },
        { label: 'News', path: '/dashboard/news' },
        { label: 'Newsletters', path: '/dashboard/newsletters' },
        { label: 'webinars', path: '/dashboard/webinars' },
      ]
    },
    {
      label: 'Service',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Taining services', path: '/dashboard/training' },
        { label: 'Our Speeches', path: '/dashboard/speech' },
        { label: 'Report and Research', path: '/dashboard/report-research' },
      ]
    },
    {
      label: 'Stories',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Stroke Survivor', path: '/dashboard/stroke-survivor' },
        { label: 'Stroke Victim', path: '/dashboard/stroke-victim' },
        { label: 'Interviews', path: '/dashboard/interview' },
        { label: 'Nurses Stories', path: '/dashboard/nurses-stories' },
      ]
    },
    {
      label: 'Others',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Events', path: '/dashboard/event' },
        { label: 'FAQ', path: '/dashboard/faq' },
      
      ]
    }
    // Add more menu items as needed...
  ];
  