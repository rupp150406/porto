import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Facebook',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Instagram',
    url: `https://instagram.com/${config.instagram}`,
    icon: 'instagram',
  },

];
