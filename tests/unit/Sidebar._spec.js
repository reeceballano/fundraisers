import { shallowMount, createLocalVue } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Sidebar', () => {
    let wrapper = null;

    beforeEach(() => {
        const store = new Vuex.Store();
        store.dispatch = jest.fn();

        wrapper = shallowMount(Sidebar, {
            data() {
                return {
                    campaignId: 1
                }
            },
            store,
            localVue
        })
    })

    afterEach(() => {
        wrapper.destroy();
    })

    /**
        Check if campaign ID is not null
        Dispatch an action to change the state of campaign id
        Enable the submit button if campaign id is not null
    */
    
    it('should enable the submit button if campaign id is not empty', async () => {
        // const campaign = wrapper.vm.campaignId;
        expect(wrapper.vm.campaignId).toBe(1);
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
            'fundraiser/saveCampaignId',
            1
        )

    })
})