import React from "react";
import Counter from "./templates";
import { mount } from "enzyme";

it("should inc/dec", () => {
  let counter = 42;
  const inc = jest.fn(() => counter++),
    dec = jest.fn(() => counter--);
  const wrap = mount(<Counter counter={counter} inc={inc} dec={dec} />);
  console.log(wrap);

  expect(wrap.find("#counter")).toHaveText("42");

  wrap.find("#inc").simulate("click");
  wrap.find("#inc").simulate("click");
  wrap.find("#dec").simulate("click");
  expect(inc).toHaveBeenCalledTimes(2);
  expect(dec).toHaveBeenCalledTimes(1);

  wrap.setProps({ counter });
  expect(wrap.find("#counter")).toHaveText("43");
});
