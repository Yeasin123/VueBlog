import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        blogCards: [{
                blogTitle: "Blog Card 1",
                blogCoverPhoto: "stock-1",
                blogDate: "1-1-2022",
            },
            {
                blogTitle: "Blog Card 2",
                blogCoverPhoto: "stock-2",
                blogDate: "2-1-2022",
            },
            {
                blogTitle: "Blog Card 3",
                blogCoverPhoto: "stock-3",
                blogDate: "3-1-2022",
            },
            {
                blogTitle: "Blog Card 4",
                blogCoverPhoto: "stock-4",
                blogDate: "4-1-2022",
            },
        ],
        editPostBlog: null,

        user: null,
        profileAdmin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUsername: null,
        profileId: null,
        profileInitials: null,
    },
    mutations: {
        TOOGLE_EDIT_POST(state, payload) {
            state.editPostBlog = payload
        },
        GET_CURRENT_USER_INFO(state, userResult) {
            state.profileId = userResult.id
            state.profileEmail = userResult.data().email
            state.profileFirstName = userResult.data().firstName
            state.profileLastName = userResult.data().lastName
            state.profileUsername = userResult.data().userName
            state.test = userResult
        },
        setProfileInitials(state) {
            state.profileInitials =
                state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
        },
        USER_TRAC(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async getCurrentUser({ commit }) {
            const currentUser = await db.collection('user').doc(firebase.auth().currentUser.uid)
            const userResult = await currentUser.get()
            commit('GET_CURRENT_USER_INFO', userResult)
            commit('setProfileInitials')
            console.log(currentUser);
        }
    },
    modules: {}
})