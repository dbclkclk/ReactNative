import { shallow, ShallowWrapper} from 'enzyme';
import React from 'react';


describe('Action', () => { 
    let wrapper : ShallowWrapper;
    let props: any;
    let store : any;
    const origConsole = console.error;
    beforeEach(() => {
         console.error = () => {};
    });
    it("It should match initial snapshot", () => {
        props = createTestProps({
            counter: {
                value: 0,
                isUpdating: false
            }
        });
        wrapper = shallow(<CounterScreen {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
    it("It should display waiting message when isUpdating is true", () => {
        props = createTestProps({
            counter: {
                value: 0,
                isUpdating: true
            }
        });
        wrapper = shallow(<CounterScreen {...props} />);
        expect(wrapper.find(Button).render().text()).toBe("Please wait.....");
    });
     afterEach(() => {
      console.error = origConsole;
    });
    it("It should display counter as 1 when value state is 1", () => {

        props = createTestProps({
            counter: {
                value: 1,
                isUpdating: false
            }
        });
        wrapper = shallow(<CounterScreen {...props} />);
        expect(wrapper.find(Text).render().text()).toBe("Current counter: 1");
       
    });
    it("It should call increment when button is pressed", () => {

        props = createTestProps({
             counter: {
                value: 0,
                isUpdating: false
            }
        });
        wrapper = shallow(<CounterScreen {...props} />);
        wrapper.find(Button).props().onPress({} as any);
        expect(props.increment).toHaveBeenCalled();
       
    });
})