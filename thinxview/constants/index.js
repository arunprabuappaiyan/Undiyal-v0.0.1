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
    id: 2,
    title: 'Members',
    path: '/admin/members',
    childrens: [],
  },
  {
    id: 3,
    title: 'Master',
    path: '/',
    childrens: [
      [
        {
          id: 1,
          title: 'Country',
          path: '/admin/master/country',
          childrens: [],
        },
        {
          id: 2,
          title: 'State',
          path: '/admin/master/state',
          childrens: [],
        },
        {
          id: 3,
          title: 'City',
          path: '/admin/master/city',
          childrens: [],
        },
        {
          id: 4,
          title: 'Area',
          path: '/admin/master/area',
          childrens: [],
        },
      ],
    ],
  },
  {
    id: 4,
    title: 'Payments',
    path: '/',
    childrens: [
      [
        {
          id: 1,
          title: 'Recived',
          path: '/admin/payments/recived',
          childrens: [],
        },
        {
          id: 2,
          title: 'Pending',
          path: '/admin/payments/pending',
          childrens: [],
        },
        {
          id: 3,
          title: 'Add',
          path: '/admin/payments/add',
          childrens: [],
        },
      ],
    ],
  },
];
