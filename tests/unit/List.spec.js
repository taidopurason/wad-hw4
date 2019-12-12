import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item.js";

describe('List test', () => {
    const toDo = [new Item("Test item")];

    const wrapper = mount(List, {
        propsData: {
            list: toDo
        }
    });


    it('Check if the item is marked as done', () => {
        wrapper.find('.list-item div span').trigger('click');
        expect(toDo[0].done).toEqual(true)
    })
});