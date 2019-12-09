import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";


describe('List', () => {
    const toDo = [];

    const wrapper = mount(List, {
        propsData: {
            list: toDo
        }
    });

    it('renders message correctly if todo list is empty', function () {
        console.log(wrapper.text());
        expect(wrapper.text()).toContain("Add your first Todo task");
    });
});