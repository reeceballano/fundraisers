import { mount } from '@vue/test-utils'
import Select from '@/components/Select.vue'

describe('Select', () => {
    const data = {
        name: 'selectItemCount',
        data: ['S', 'T']
    }

    it('props should contain a "name" "data"', () => {
        const wrapper = mount(Select, {
            propsData: data
        })

        expect(wrapper.props().name).toBe('selectItemCount');
        expect(wrapper.props().data).toStrictEqual(['S', 'T']);
    })
})
