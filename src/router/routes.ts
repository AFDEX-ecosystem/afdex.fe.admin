import { SCREEN } from './screen';
import authMiddleware from '@/middleware/auth';
import logMiddleware from '@/middleware/log'

const getView = (path:string) => {
  return () => import(`@/views/${path}.vue`);
};

export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    meta: {
      title: 'AFDEX - Nơi cung cầu giao thoa',
      // middleware: [authMiddleware],
    },
    children: [
      // {
      //   path: '',
      //   name: SCREEN.home.name,
      //   component: getView('Dashboard'),
      //   meta: {
      //     title: 'Home',
      //     // middleware: [logMiddleware],
      //   },
      // },
      {
        path: '',
        name: 'layout',
        component: getView('TestLayout'),
      },
      {
        path: '/map',
        name: 'layout',
        component: () => import('@/views/mapView/VietNamMap.vue'),
      },
      {
        path: SCREEN.contact.path,
        name: SCREEN.contact.name,
        component: () => import ('../views/contact/Contact.vue'),
      },
    ],
  },
  {
    path: SCREEN.login.path,
    name: SCREEN.login.name,
    meta: {
      title: 'Login',
      middleware: [authMiddleware],
    },
    component: getView('LoginView'),
  },
  {
    path: SCREEN.internalError.path,
    name: SCREEN.internalError.name,
    component: getView('InternalError'),
  },
  {
    path: SCREEN.notFound.path,
    name: SCREEN.notFound.name,
    meta: { title: 'Not Found' },
    component: getView('NotFound'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: SCREEN.notFound.path,
    component: getView('NotFound'),
  },
  {
    path: '/template',
    name: 'template',
    meta: { title: 'TemplateUi Yeongsang' },
    component: getView('TemplateUiYeongsang'),
  },
  // {
  //   path: '/template-base',
  //   name: 'template-base',
  //   meta: { title: 'Template' },
  //   component: getView('TemplateUIBase'),
  // },
];
