import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Select from '@/components/Select.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Select', () => {
    const props = {
        name: 'selectItemCount',
        data: ['S', 'T']
    }

    it('props should contain a "name" "data"', () => {
        const wrapper = mount(Select, {
            propsData: props
        })

        expect(wrapper.props().name).toBe('selectItemCount');
        expect(wrapper.props().data).toStrictEqual(['S', 'T']);
    })

})
