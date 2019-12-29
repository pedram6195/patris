import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/products',
        component: Products
    }
];

export default routes;