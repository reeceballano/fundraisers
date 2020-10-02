import { shallowMount } from '@vue/test-utils'
import ErrorAlert from '@/components/ErrorAlert.vue'

describe('ErrorAlert', () => {
    it('renders props.error and props.hasError when passed', () => {
        const error = 'this is the error message';
        const hasError = true;
        const wrapper = shallowMount(ErrorAlert, {
            propsData: { error, hasError }
        })
        
        expect(wrapper.text()).toMatch(error);
        expect(wrapper.props().hasError).toBe(true);
    })
})
