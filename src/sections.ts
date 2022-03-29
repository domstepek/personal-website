export interface Section {
  id: string;
  title: string;
  url: string;
  height: number;
}

const sections: Section[] = [
  {
    id: 'home',
    title: 'Home',
    url: '#',
    height: 100,
  },
  {
    id: 'about',
    title: 'About',
    url: '#about',
    height: 300,
  },
  {
    id: 'skills',
    title: 'Skills',
    url: '#skills',
    height: 100,
  },
  {
    id: 'projects',
    title: 'Projects',
    url: '#projects',
    height: 100,
  },
  {
    id: 'timeline',
    title: 'Timeline',
    url: '#timeline',
    height: 100,
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '#contact',
    height: 100,
  },
];

export default sections;