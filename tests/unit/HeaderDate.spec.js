import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    let today = new Date();

    // Check that this component properly displays today's date
    it('renders the correct date', () => {
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    });

    it('renders the correct month', () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

        expect(wrapper.html()).toContain(months[today.getMonth()].slice(0,3).toUpperCase());
    });

    it('renders the correct year', () => {
        expect(wrapper.html()).toContain(today.getFullYear());
    });

    it('renders the correct week day', () => {
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        expect(wrapper.html()).toContain(weekdays[today.getDay()].toUpperCase());
    });
});