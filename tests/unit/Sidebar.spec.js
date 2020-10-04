import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(Sidebar)
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('must be submit button is disabled', () => {
        const button = wrapper.find('button');
        expect(button.classes()).not.toContain('button-disabled');
    })
})