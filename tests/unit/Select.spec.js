import { mount } from '@vue/test-utils'
import Select from '@/components/Select.vue'

describe('Select', () => {
    it('should return a name', () => {
        const wrapper = mount(Select, {
            propsData: {
                name: 'selectItemCount',
                data: ['S', 'T']
            }
        })

        expect(wrapper.props().name).toBe('selectItemCount');
    })
})
