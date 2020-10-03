import { mount, shallowMount } from '@vue/test-utils'
import Fundraiser from '@/components/Fundraiser.vue'

describe('Fundraiser', () => {

    const data = {
        Id: 123,
        Total: '123456789.11'
    }

    let wrapper = null;
    
    beforeEach(() => {
        wrapper = mount(Fundraiser, {
            propsData: {
                fundraiser: data
            }
        })
    });

    afterEach(() => {
        wrapper.destroy();
    })

    it('should return a comma separated total', () => {
        const numberWithCommas = wrapper.vm.numberWithCommas;
        expect(numberWithCommas).toBe("123,456,789.11")
    })

    it('props should contain an object type/value', () => {
        const fundraiser = wrapper.props().fundraiser;
        expect(fundraiser).toBe(data);
    })
})