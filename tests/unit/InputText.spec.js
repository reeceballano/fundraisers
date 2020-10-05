import { shallowMount } from '@vue/test-utils'
import InputText from '@/components/InputText'

describe('InputText', () => {
    let wrapper = null;

    const props = {
        id: 'text',
        name: 'text',
        type: 'text'
    }

    beforeEach(() => {
        wrapper = shallowMount(InputText, {
            propsData: props
        });
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('has an id of text', () => {
        expect(wrapper.attributes().id).toBe('text');
    })

    it('has a name of text', () => {
        expect(wrapper.attributes().name).toBe('text');
    })

    it('has a type of text', () => {
        expect(wrapper.attributes().type).toBe('text');
    })
})