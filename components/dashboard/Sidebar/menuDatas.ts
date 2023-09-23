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
        { label: 'Blogs', path: '/blog' },
        { label: 'News', path: '/news' },
        { label: 'Newsletters', path: '/newsletters' },
        { label: 'webinars', path: '/webinars' },
      ]
    },
    {
      label: 'Service',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'What we do', path: '/what-we-do' },
        { label: 'Home care', path: '/home-care' },
        { label: 'Taining services', path: '/training' },
        { label: 'Report and Research', path: '/report-research' },
      ]
    },
    {
      label: 'Stories',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Stroke Survivor', path: '/storke-survivor' },
        { label: 'Stroke Victim', path: '/stroke-victim' },
        { label: 'Interviews', path: '/interview' },
        { label: 'Nurses Stories', path: '/Nurses-stories' },
      ]
    },
    {
      label: 'Memberships',
      icon: '<svg>...</svg>', // SVG data for the Calendar icon
      subItems: [
        { label: 'Our members', path: '/members' },
        { label: 'Membership', path: '/membership' },
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
  