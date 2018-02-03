import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const FETCH_PHOTOS = "FETCH_PHOTOS"
export const SELECT_PHOTO = "SELECT_PHOTO"

const state = {
    photos: [],
    selectedPhoto: null
}

const mutations = {
    [FETCH_PHOTOS](state, payload) {
        state.photos = payload
    },
    [SELECT_PHOTO](state, payload) {
        state.selectedPhoto = payload
    }
}

const actions = {
    async [FETCH_PHOTOS](context) {
        const start = Math.floor(Math.random() * 100)
        const response = await fetch('https://picsum.photos/list')
        const photos = (await response.json()).slice(start, start + 24)
        context.commit(FETCH_PHOTOS, photos)
    }
}



export const store = new Vuex.Store({
    state,
    mutations,
    actions
})