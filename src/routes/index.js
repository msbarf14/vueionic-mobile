export const routes = [
  { path: '/', component: () => import('@/views/Home.vue'), meta: { title: 'Home', auth: true } },
]