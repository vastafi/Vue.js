import router from "../routes";
import store from "../store";

router.beforeEach((to, from, next) => {
    console.log(to, from)
    if (store.getters["auth/getIsAuthorised"] && to.matched[0].path.includes('auth')) {
        next({
            name:'products'
        })
    }
    next();
});
