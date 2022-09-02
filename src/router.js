import { routes } from './routes/index'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

//   import {Storage} from "@capacitor/storage"

//   router.beforeEach(async (to, from, next) => {
//     if (to.matched.some(record => record.meta.auth)) {
//         const { value }  = await Storage.get({key:"token"})
//         if (value === null) {
//             next('/login');
//           } else {
//             next();
//           }
//     } else {
//         next();
//     }
//   });
export default router
