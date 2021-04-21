import { lazy } from 'react';
import { SHOULD_AUTH, SHOULD_NOT_AUTH } from './enums';

const routes = [
  //login
  {
    title: 'ورود و عضویت',
    path: '/auth/login',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/login')),
    include: [''],
    appBar: true,
    guard: SHOULD_NOT_AUTH,
  },
  //home
  {
    title: 'صفحه اصلی',
    path: '/',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/home')),
    include: [''],
    appBar: true,
    guard: SHOULD_AUTH,
  },
  //home
  {
    title: 'خروج',
    path: '/auth/logout',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/logout')),
    include: [''],
    appBar: true,
    guard: SHOULD_AUTH,
  },
];

export default routes;

export const visibleRoute = (which) => {
  return routes
    .filter((route) => route.include.indexOf(which) !== -1)
    .reduce((a, b) => {
      return {
        ...a,
        [b.path]: b,
      };
    }, {});
};
