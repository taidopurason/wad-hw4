import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe('List', () => {
    let wrapper = mount(Footer, {
        propsData: {
            open: false
        }
    });


    it('renders open to true correctly', async function () {
        wrapper.find("span").trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.open).toBe(true);
    });
});