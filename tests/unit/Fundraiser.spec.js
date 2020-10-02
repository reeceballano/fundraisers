import { mount } from '@vue/test-utils'
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