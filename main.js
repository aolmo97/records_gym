import './public/pages/home/home';
import './public/pages/exercises-page/add/add-page.js';
import './public/pages/exercises-page/modify/modify-page.js';
import './public/pages/exercises-page/delete/delete-page.js';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  const router = new Router(document.querySelector('main'), {
    baseUrl: '/records_gym/'
  });

  router.setRoutes([
    { path: '/', component: 'home-page' },
    { path: '/exercises-page/add', component: 'add-exercises-page' },
    { path: '/exercises-page/modify', component: 'modify-exercises-page' },
    { path: '/exercises-page/delete', component: 'delete-exercises-page' },
    { path: '/trainers', component: 'my-trainers' },
  ]);
});
