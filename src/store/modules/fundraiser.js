import axios from 'axios';

// STATE
const state = {
    fundraisers: []
}

// GETTERS
const getters = {
    getFundraisers: state => {
        return state.fundraisers;
    }
}

// MUTATIONS
const mutations = {
    SET_FUNDRAISERS(state, fundraisers) {
        state.fundraisers = fundraisers;
    }
}

// ACTIONS
const actions = {
    async fetchFundraisers({ commit }) {
        try {
            const response = await axios.get('https://api.gofundraise.com.au/v1/pages/search?eventcampaignid=3&pagetype=S&sortorder=desc&sortby=4&pagesize=1')
            commit('SET_FUNDRAISERS', response.data);
        } catch(error) {
            console.log(error);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}