import React from "react";
import { shallow, render, mount } from "enzyme";
import CommentList from "./index";
import articles from "../../fixtures";
import jsdom from "jsdom";

jest.useFakeTimers();

describe("Comment list", () => {
	it("all comments should be closed by default", () => {
		const wrapper = render(<CommentList articles={articles}/>)
		expect(wrapper.find(".test__comment-list--item").length).toEqual(0);
	});
	
	it("should open comments on click", () => {
		const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
		global.document = doc
		global.window = doc.defaultView
		const wrapper = mount(<CommentList comments={articles[0]["comments"]}/>);
		wrapper.find("button").simulate("click");
		expect(wrapper.find(".test__comment-list--item").length).toEqual(5);
	});
});
