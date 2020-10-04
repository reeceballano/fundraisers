import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(Sidebar, {
            data() {
                return {
                    isDisabled: false,
                }
            }
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

    it('mut be button is disabled if isDisabled is true', async () => {
        const button = wrapper.find('button');
        await wrapper.setData({ isDisabled: true });
        expect(wrapper.vm.isDisabled).toBe(true);
        expect(button.classes()).not.toContain('button-disabled');
    })
})