import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert'

describe('Alert', () => {
    let wrapper = null;

    const props = {
        hasError: true
    }

    beforeEach(() => {
        wrapper = shallowMount(Alert, {
            propsData: props
        });
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('display an error alert if prop hasError is true', () => {
        const error = wrapper.find('.alert-title');
        expect(error.classes()).toContain('error-alert-title');
    })

    it('display a success alert if prop hasError is false', async () => {
        const success = wrapper.find('.alert-title');
        await wrapper.setProps({ hasError: false });
        expect(success.classes()).not.toContain('error-alert-title');
    })
})