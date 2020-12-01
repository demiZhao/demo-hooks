import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as Context from "./app";
import { DigitalClock, ClockSetting } from "./clock";
configure({ adapter: new Adapter() });

//Thu Dec 24 2020 12:00:00 GMT-0500 (Eastern Standard Time)
//new Date(2020, 11, 24, 12, 0);
const mockTime = new Date(2020, 11, 24, 12, 0).getTime();

describe("Component render", () => {
  it("<DigitalClock> render time", () => {
    const context = { time: mockTime, setTime: () => {} };
    jest.spyOn(Context, "useTimeContext").mockImplementation(() => context);
    const wrapper = shallow(<DigitalClock title="digital" />);

    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe("digital");
    const div = wrapper.find(".digital-clock");
    expect(div.text()).toBe("12:00:00");
  });

  it("<CLockSetting> render empty input", () => {
    const context = { time: mockTime, setTime: () => {} };
    jest.spyOn(Context, "useTimeContext").mockImplementation(() => context);
    const wrapper = shallow(<ClockSetting />);
    const hh = wrapper.find('[name="hh"]');
    const mm = wrapper.find('[name="mm"]');
    const ss = wrapper.find('[name="ss"]');

    expect(hh.props().value).toBeUndefined();
    expect(mm.props().value).toBeUndefined();
    expect(ss.props().value).toBeUndefined();
  });
});
