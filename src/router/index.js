import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Blog from "../views/Blogs.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import CreatePost from "../views/CreatePost.vue";
import EditBlog from "../views/EditBlog.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import store from '@/store'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: "/blog",
        name: "Blogs",
        component: Blog,
        meta: {
            title: 'Blog'
        }
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            title: 'Admin'
        }
    },
    {
        path: "/blog-preview",
        name: "BlogPreview",
        component: BlogPreview,
        meta: {
            title: 'BlogPreview'
        }
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
        meta: {
            title: 'CreatePost'
        },
        beforeEnter: (to, from, next) => {
            if (store.state.user) {
                next()
            } else next({ name: 'Login' })
        }
    },
    {
        path: "/edit-blog",
        name: "EditBlog",
        component: EditBlog,
        meta: {
            title: 'EditBlog'
        }
    },
    {
        path: "/forget-password",
        name: "ForgetPassword",
        component: ForgetPassword,
        meta: {
            title: 'ForgetPassword'
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: 'Register'
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: 'Profile'
        },
        beforeEnter: (to, from, next) => {
            if (store.state['user']) {
                next()
            } else next({ name: 'Login' })
        }
    },
    {
        path: "/view-blog/:id",
        name: "ViewBlog",
        component: ViewBlog,
        meta: {
            title: 'ViewBlog'
        }
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `FireBlog | ${to.meta.title}  `
    next();
})

export default router;