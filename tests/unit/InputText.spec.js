import { mount, shallowMount } from '@vue/test-utils'
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

    it('change the value then update the v-model in parent component', async () => {
        const parentComponent = mount({
            data() { 
                return { 
                    campaignId: null 
                } 
            },
            template: '<InputText v-model="campaignId" />',
            components: { InputText }
        })

        const newValue = '1';
        const inputText = parentComponent.find('input');
        inputText.element.value = newValue;
        inputText.trigger('input');
    
        expect(parentComponent.vm.campaignId).toBe(newValue);
      });
})