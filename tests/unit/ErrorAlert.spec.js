import { shallowMount } from '@vue/test-utils'
import ErrorAlert from '@/components/ErrorAlert.vue'

describe('ErrorAlert', () => {
    const data = {
        error: 'this is the error message',
        hasError: true
    }

    let wrapper = null;

    
    beforeEach(() => {
        wrapper = shallowMount(ErrorAlert, {
            propsData: data
        })
    });

    afterEach(() => {
        wrapper.destroy();
    })

    it('renders error message when passed', () => {
        const errorMessage = wrapper.props().error;
        
        expect(errorMessage).toMatch('this is the error message');
    })

    it('renders true or false when passed', () => {
        const hasError = wrapper.props().hasError;
        
        expect(hasError).toBe(true);
    })
})
