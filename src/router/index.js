import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
import Situation from '../views/situation/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    redirect: '/situation',
    children: [
      {
        path: 'situation',
        name: 'Situation',
        component: Situation,
        label: '综合态势'
      },
      {
        path: 'metrics',
        name: 'Metrics',
        component: () => import('../views/metrics/index.vue'),
        label: '指标检测'
      },
      {
        path: 'patient-reception',
        name: 'PatientReception',
        component: () => import('../views/patient-reception/index.vue'),
        label: '患者接收'
      },
      {
        path: 'patient-treatment',
        name: 'PatientTreatment',
        component: () => import('../views/patient-treatment/index.vue'),
        label: '患者诊治'
      },
      {
        path: 'patient-flow',
        name: 'PatientFlow',
        component: () => import('../views/patient-flow/index.vue'),
        label: '患者流转'
      },
      {
        path: 'support-capacity',
        name: 'SupportCapacity',
        component: () => import('../views/support-capacity/index.vue'),
        label: '保障能力'
      },
      {
        path: 'emergency-response',
        name: 'EmergencyResponse',
        component: () => import('../views/emergency-response/index.vue'),
        label: '应急响应'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export { routes }
export default router 