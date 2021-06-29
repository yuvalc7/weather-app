import Vue from "vue";
import Router from "vue-router";
import Home from "../components/homeScreen/Home";
import NotFound from "../components/NotFound";
import Favorites from "../components/favoritesScreen/Favorites";



Vue.use(Router);
export default new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "*",
            component: NotFound
        },

        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/favorites",
            name: "Favorites",
            component: Favorites,
        },
    ]
});