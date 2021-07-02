import Vue from "vue";
import VueRouter from "vue-router";
// import index from "../views/index.vue";
import dataCenter from "../views/dataCenter/dataCenter.vue";
import operateCenter from "@/views/operateCenter/operateCenter";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "index",
    // component: index,
    redirect: "/operateCenter",
  },
  {
    path: "/dataCenter",
    name: "dataCenter",
    component: dataCenter,
    redirect: "/dataCenter/community",
    children: [
      {
        path: "community",
        name: "community",
        component: () => import("@/views/dataCenter/community"),
      },
      {
        path: "business",
        name: "business",
        component: () => import("@/views/dataCenter/business"),
      },
    ],
  },
  {
    path: "/operateCenter",
    name: "operateCenter",
    component: operateCenter,
    redirect: "/operateCenter/nationwide",
    children: [
      {
        path: "nationwide",
        name: "nationwide",
        component: () => import("@/views/operateCenter/nationwide"),
      },
      {
        path: "province/:province",
        name: "province",
        component: () => import("@/views/operateCenter/province"),
      },
    ],
  },
  {
    path: "/servicePlatform",
    name: "servicePlatform",
    component: () => import("@/views/servicePlatform/servicePlatform"),
  },
  {
    path: "/servicePlatform/population",
    name: "population",
    component: () => import("@/views/servicePlatform/population"),
  },
  {
    path: "/servicePlatform/security",
    name: "security",
    component: () => import("@/views/servicePlatform/security"),
  },
  {
    path: "/servicePlatform/fire-protection",
    name: "fire-protection",
    component: () => import("@/views/servicePlatform/fireProtection"),
  },
  {
    path: "/servicePlatform/environment",
    name: "environment",
    component: () => import("@/views/servicePlatform/environment"),
  },
  {
    path: "/servicePlatform/car",
    name: "car",
    component: () => import("@/views/servicePlatform/car"),
  },
  {
    path: "/servicePlatform/party-construction",
    name: "party-construction",
    component: () => import("@/views/servicePlatform/partyConstruction"),
  },
  {
    path: "/servicePlatform/deposit-certificate",
    name: "deposit-certificate",
    component: () => import("@/views/servicePlatform/depositCertificate"),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
