import { mount, shallowMount } from '@vue/test-utils'
import Fundraiser from '@/components/Fundraiser.vue'

describe('Fundraiser', () => {

    const data = {
        Id: 123,
        Total: '12345.11'
    }

    it('should return a comma separated total', () => {
        const wrapper = mount(Fundraiser, {
            propsData: {
                fundraiser: data
            }
        })
        
        expect(wrapper.vm.numberWithCommas).toBe("12,345.11")
    })

    it('props should contain an object type', () => {
        const wrapper = mount(Fundraiser, {   
            propsData: {
                fundraiser: data
            }
        })
    
        expect(wrapper.props().fundraiser).toBe(data);
    })
})