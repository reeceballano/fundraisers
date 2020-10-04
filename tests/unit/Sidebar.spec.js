import { shallowMount, createLocalVue } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Sidebar', () => {
    let wrapper = null;

    beforeEach(() => {
        const store = new Vuex.Store()
        store.dispatch = jest.fn()

        wrapper = shallowMount(Sidebar, {
            data() {
                return {
                    campaignId: 1,
                    isEnabled: false,
                }
            },
            store,
            localVue
        })
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('must be submit button is disabled if isEnabled is false', () => {
        const button = wrapper.find('button');
        expect(wrapper.vm.isEnabled).toBe(false);
        expect(button.classes()).not.toContain('button-enabled');
    })

    it('must be button is enabled if isEnabled is true', async () => {
        const button = wrapper.find('button');
        await wrapper.setData({ isEnabled: true });
        expect(wrapper.vm.isEnabled).toBe(true);
        expect(button.classes()).not.toContain('button-disabled');
    })

    it('sets the value of campaignId then dispatch saveCampaignId', async () => {
        await wrapper.setData({ campaignId: 2 });
        expect(wrapper.vm.campaignId).toBe(2);
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
            'fundraiser/saveCampaignId',
            wrapper.vm.campaignId
        )
    })

    it('calls the fetchItems method when campaignId has a value and the submit has been triggered', async () => {
        /**
            if button is disabled you will see an error (Received: "fundraiser/saveCampaignId", 2) saveCampaignId method is called everytime you set the value of campaignId
        */
        const button = wrapper.find('button');
        
        await wrapper.setData({ campaignId: 2 });
        expect(wrapper.vm.campaignId).toBe(2);
        await wrapper.setData({ isEnabled: true });
        expect(wrapper.vm.isEnabled).toBe(true);
        expect(button.classes()).not.toContain('button-disabled');

        await button.trigger('click');
        expect(await wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
            'fundraiser/fetchFundraisers'
        )
    })
})