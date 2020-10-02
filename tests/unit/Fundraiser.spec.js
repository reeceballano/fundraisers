import { mount } from '@vue/test-utils'
import Fundraiser from '@/components/Fundraiser.vue'

test('test fundraiser props', async () => {
    const wrapper = mount(Fundraiser);

    await wrapper.setProps({ Id: 123 });

    expect(wrapper.vm.Id).toBe(123);
})