import { mount, shallowMount } from '@vue/test-utils'
import Fundraiser from '@/components/Fundraiser.vue'

test('test fundraiser props', () => {
    const data = {
        Id: 123
    }

    const wrapper = mount(Fundraiser, {   
        propsData: {
            fundraiser: data
        }
    })

    expect(wrapper.props().fundraiser).toBe(data);
})

describe('Fundraiser', () => {
    it('returns a comma separated total', () => {
        const data = {
            
            Total: "12345.11"
        }
    
        const wrapper = shallowMount(Fundraiser, {
            propsData: {
                fundraiser: data
            }
        })
        
        expect(wrapper.vm.numberWithCommas).toBe("12,345.11")
    })
})