import React from "react";
import { render } from "enzyme";
import Article from "./index";
import articles from "../../fixtures";

describe("Article", () => {
	it("should render article", () => {
		const wrapper = render(<Article article={articles[0]}/>);
		expect(wrapper.find(".test__article--button").length).toEqual(1);
	});
	
	it("article content should be closed by default", () => {
		const wrapper = render(<Article article={articles[0]}/>);
		expect(wrapper.find(".test__article--body").length).toEqual(0);
	});
});