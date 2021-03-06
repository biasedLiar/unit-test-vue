import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feedback from "../views/Feedback.vue";
import LogIn from "../views/LogIn.vue";
import Register from "../views/Register.vue";
import CalculatorButtons from "../views/calculatorParts/CalculatorButtons.vue";
import BaseLogin from "..//components/BaseLogin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
    
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
    
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    
  },
  {
    path: "/",
    name: "CalculatorButtons",
    component: CalculatorButtons,
  },
  {
    path: "/BaseLogin",
    name: "BaseLogin",
    component: BaseLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
