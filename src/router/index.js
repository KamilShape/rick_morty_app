import { createRouter, createWebHashHistory } from "vue-router";
import Characters from "../views/Characters.vue";
import Favourites from "../views/Favourites.vue";

const routes = [{
        path: "/",
        name: "Characters",
        component: Characters,
    },
    {
        path: "/favourites",
        name: "Favourites",
        component: Favourites,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;