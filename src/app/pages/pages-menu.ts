import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Ver Locales',
    icon: 'home-outline',
    link: '/pages/forms/verlocales',
  },
  {
    title: 'Ver Personas',
    icon: 'home-outline',
    link: '/pages/forms/verpersonas',
  },
  {
    title: 'Funciones',
    group: true,
  },
  {
      title: 'Crear',
      icon: 'layout-outline',
      children: [
        {
          title:'Crear Local',
          link: '/pages/forms/crearlocal',
        },
        {
          title:'Crear Persona',
          link: '/pages/forms/crearpersona',
        }
      ]
  },
  {
    title: 'Sesion',
    icon: 'lock-outline',
    children: [
      {
        title: 'Log out',
        link: '/pages/forms/logout',
      }
    ],
  },
];
export const MENU_ITEMSalt: NbMenuItem[] = [
  {
    title: 'Sesion',
    icon: 'lock-outline',
    link: '/pages/forms/login'
  },
]
export const MENU_ITEMSalt2: NbMenuItem[] = [
  {
    title: 'Ver Locales',
    icon: 'home-outline',
    link: '/pages/forms/verlocales',
  },
  {
    title: 'Cuenta',
    icon: 'lock-outline',
    children: [
      {
        title: 'Log out',
        link: '/pages/forms/logout',
      }
    ],
  },
];