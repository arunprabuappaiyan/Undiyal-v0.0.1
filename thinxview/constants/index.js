export const GLOBAL_CONFIGURATION = {
  APP_LOGO: 'http://nekhop.com/img/logo-white.png',
  APPLICATION_TITLE: 'Management Console',
  APPLICATION_DESCRIPTION: 'Application Management',
  COPYRIGHTS: {
    url: 'https://nekhop.com',
    name: 'Nekhop',
  },
  VERSION_NAME: '0.0.1 beta',
};

export const MAIN_MENU = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/admin',
    childrens: [],
  },
  {
    id: 1,
    title: 'Members',
    path: '/admin/memberspage',
    childrens: [],
  },
  {
    id: 1,
    title: 'Master',
    path: '/',
    childrens: [
      [
        {
          id: 1,
          title: 'Country',
          path: '#',
          childrens: [],
        },
        {
          id: 1,
          title: 'State',
          path: '#',
          childrens: [],
        },
        {
          id: 1,
          title: 'City',
          path: '#',
          childrens: [],
        },
        {
          id: 1,
          title: 'Area',
          path: '#',
          childrens: [],
        },
      ],
    ],
  },
  {
    id: 1,
    title: 'Payments',
    path: '/',
    childrens: [
      [
        {
          id: 1,
          title: 'Recived',
          path: '#',
          childrens: [],
        },
        {
          id: 1,
          title: 'Pending',
          path: '#',
          childrens: [],
        },
        {
          id: 1,
          title: 'Add',
          path: '#',
          childrens: [],
        },
      ],
    ],
  },
];
