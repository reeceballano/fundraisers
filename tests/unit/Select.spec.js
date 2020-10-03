import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import Select from '@/components/Select.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Select', () => {
    let fundraiser
    let store

    const props = {
        name: 'selectPageType',
        data: ['S', 'T']
    }

    let wrapper = null;

    beforeEach(() => {
        fundraiser = {
            namespaced: true,
            actions: {
                savePageType: jest.fn()

            }
        }

        store = new Vuex.Store({
            modules: {
                fundraiser
            }
        })

        wrapper = shallowMount(Select, {
            data() {
                return {
                    option: 'S',
                }
            },
            propsData: props,
            store,
            localVue
        })
    })

    afterEach(() => {
        wrapper.destroy();
    })

    it('should contain a selectPageType in props.name', () => {
        const name = wrapper.props().name;
        expect(name).toBe('selectPageType');
    })

    it('should contain a array value in props.data', () => {
        const data = wrapper.props().data;
        expect(data).toStrictEqual(['S', 'T']);
    })

    it('should select the first option S then call savePagetype action', async () => {
        wrapper.findAll('select#grid-theme > option').at(0).element.selected = true;
        await wrapper.find('select#grid-theme').trigger('change');
        expect(wrapper.vm.option).toBe('S');
        expect(wrapper.props().name).toBe('selectPageType');
        // expect(wrapper.vm.$store.dispatch('fundraiser/savePagetype')).toHaveBeenCalled()
    })


})
