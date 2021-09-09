import Products from "../components/pages/Products";
import Contacts from "../components/pages/Contacts";
import About from "../components/pages/About";
import Account from "../components/pages/Account";
import Cart from "../components/pages/Cart";
import Settings from "../components/pages/Settings";
import ItemDetails from "../components/ItemDetails";

export default [
    { path: '/', name:'products', component: Products, props: (router) => ({link: router.query.link})},
    { path: '/contacts', name:'contacts', component: Contacts },
    { path: '/about', name:'about',  component: About },
    { path: '/cart', name:'cart', component: Cart },
    { path: '/settings', name:'settings',  component: Settings },
    { path: '/account', name:'account',  component: Account },
    { path: '/item/:id', name:'item', component: ItemDetails, props: true, access: ['admin', 'user']},

]

