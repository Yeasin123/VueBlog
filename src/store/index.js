import Vue from 'vue'
import Vuex from 'vuex'

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
        editPostBlog: null
    },
    mutations: {
        TOOGLE_EDIT_POST(state, payload) {
            state.editPostBlog = payload
        }
    },
    actions: {},
    modules: {}
})