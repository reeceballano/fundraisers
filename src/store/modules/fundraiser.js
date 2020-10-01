// STATE
const state = {
    fundraisers: []
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_FUNDRAISERS(state, fundraisers) {
        state.fundraisers = fundraisers;
    }
}

// ACTIONS
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}