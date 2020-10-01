import axios from 'axios';

// STATE
const state = {
    campaignId: 1,
    theme: 'light',
    pageType: '',
    itemCount: 0,
    fundraisers: {},
}

// GETTERS
const getters = {
    getFundraisers: state => {
        return state.fundraisers;
    },

    getCampaignId: state => {
        return state.campaignId;
    },

    getTheme: state => {
        return state.theme;
    },

    getItemCount: state => {
        return state.itemCount;
    },

    getPageType: state => {
        return state.pageType;
    }
}

// MUTATIONS
const mutations = {
    SET_FUNDRAISERS(state, fundraisers) {
        state.fundraisers = fundraisers;
    },

    SET_CAMPAIGNID(state, campaignId) {
        state.campaignId = campaignId;
    },

    SET_THEME(state, theme) {
        state.theme = theme;
    },
    
    SET_ITEMCOUNT(state, itemCount) {
        state.itemCount = itemCount;
    },

    SET_PAGETYPE(state, pageType) {
        state.pageType = pageType;
    }
}

// ACTIONS
const actions = {
    async fetchFundraisers({ commit, state }) {
        try {
            const url = `https://api.gofundraise.com.au/v1/pages/search?eventcampaignid=${Number(state.campaignId)}&pagetype=${state.pageType}&sortorder=desc&sortby=4&pagesize=${ state.itemCount }`;
            const response = await axios.get(url)
            console.log(response.data)
            commit('SET_FUNDRAISERS', response.data.Pages);
        } catch(error) {
            console.log(error);
        }
    },

    saveCampaignId({ commit }, payload) {
        commit('SET_CAMPAIGNID', payload);
    },

    saveTheme({ commit }, payload) {
        commit('SET_THEME', payload);
    },

    saveItemCount({ commit }, payload) {
        commit('SET_ITEMCOUNT', payload);
    },

    savePageType({ commit }, payload) {
        commit('SET_PAGETYPE', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}