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
                    isDisabled: false,
                }
            },
            store,
            localVue
        })
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('must be submit button is enabled if isDisabled is false', () => {
        const button = wrapper.find('button');
        expect(wrapper.vm.isDisabled).toBe(false);
        expect(button.classes()).not.toContain('button-enabled');
    })

    it('must be button is disabled if isDisabled is true', async () => {
        const button = wrapper.find('button');
        await wrapper.setData({ isDisabled: true });
        expect(wrapper.vm.isDisabled).toBe(true);
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
})