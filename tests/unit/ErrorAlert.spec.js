import { shallowMount } from '@vue/test-utils'
import ErrorAlert from '@/components/ErrorAlert.vue'

describe('ErrorAlert', () => {
    const data = {
        error: 'this is the error message',
        hasError: true
    }

    it('renders props.error and props.hasError when passed', () => {
        const wrapper = shallowMount(ErrorAlert, {
            propsData: data
        })
        
        expect(wrapper.text()).toMatch(data.error);
        expect(wrapper.props().hasError).toBe(true);
    })
})
