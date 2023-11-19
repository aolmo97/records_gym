import './public/pages/home/home';
import './public/pages/exercises-page/exercises-page';
//import './public/pages/home/home';


import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  const router = new Router(document.querySelector('main'), {
    baseUrl: '/records_gym/'
  });

  router.setRoutes([
    { path: '/', component: 'home-page' },
    { path: '/exercises-page', component: 'exercises-page' },
    { path: '/exercises-page/add', component: 'exercises-page' },
    { path: '/exercises-page/modify', component: 'exercises-page' },
    { path: '/exercises-page/delete', component: 'exercises-page' },
    { path: '/trainers', component: 'my-trainers' },
    // ... otras rutas
  ]);
});
