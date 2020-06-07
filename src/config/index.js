module.exports = {
  siteTitle: 'Rishon Patani | Software Engineer',
  siteDescription:
    'Rishon Patani is a software engineer based in Bengaluru, India who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Rishon, Patani, rishon1313, software engineer, back-end engineer, web developer, javascript,',
  siteUrl: 'https://rpatani.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-156524874-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rishon Patani',
  location: 'Bengaluru, India',
  email: 'rishon1313@gmail.com',
  github: 'https://github.com/rishon1313',
  twitterHandle: '@RishonPatani',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rishon1313',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rishonpatani',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rishon_patani',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/RishonPatani',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
