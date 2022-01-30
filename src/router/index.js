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

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog",
        name: "Blogs",
        component: Blog,
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
    {
        path: "/blog-preview",
        name: "BlogPreview",
        component: BlogPreview,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
    {
        path: "/edit-blog",
        name: "EditBlog",
        component: EditBlog,
    },
    {
        path: "/forget-password",
        name: "ForgetPassword",
        component: ForgetPassword,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/view-blog",
        name: "ViewBlog",
        component: ViewBlog,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;