import { shallowMount } from '@vue/test-utils'
import Fundraiser from '@/components/Fundraiser.vue'

describe('Fundraiser', () => {

    const data = {
        Id: 123,
        Total: '123456789.11'
    }

    let wrapper = null;
    
    beforeEach(() => {
        wrapper = shallowMount(Fundraiser, {
            propsData: {
                fundraiser: data,
                loading: true
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
        const expectedData = {
            Id: 123,
            Total: '123456789.11'
        }
        
        expect(fundraiser).toStrictEqual(expectedData);
    })

    it('should display the skeleton loader if loading is true', () => {
        expect(wrapper.props().loading).toBe(true);
        const skeleton = wrapper.find('div');
        expect(skeleton.classes()).toContain('skeleton-loading');
    })
    
})