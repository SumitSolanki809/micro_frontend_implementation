import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/authentication" || location.pathname === "/Register" || location.pathname === "/Login" ? false : true
);

registerApplication(
  'authentication', 
  () => import('./src/authentication/main.app.js'),
  () => location.pathname === "/vue" ? false : true
);

start();