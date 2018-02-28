import React from 'react'
import {render, mount} from 'enzyme'
import Article from "./index";
import articles from '../../fixtures'

describe("Article",() => {
    it("should render Article",() => {
        const wrapper = render(<Article article={articles[0]}/>)

        expect(wrapper.find(".test__article--title").length).toEqual(1)
    })

    it("should be closed by default",() => {
        const wrapper = render(<Article article={articles[0]}/>)

        expect(wrapper.find(".test__article--body").length).toEqual(0)
    })

    it("should have article text if opened",() => {
        const wrapper = render(<Article isOpen={true} article={articles[0]}/>)
        expect(wrapper.find(".test__article--body").length).toEqual(1)
    })

    it("should open comments on click and then close on click",() => {
        const wrapper = mount(<Article isOpen={true} article={articles[0]}/>)

        wrapper.find(".test__comment-list--button").simulate("click")
        expect(wrapper.find(".test__comment-list--body").length).toEqual(1)

        wrapper.find(".test__comment-list--button").simulate("click")
        expect(wrapper.find(".test__comment-list--body").length).toEqual(0)
    })
})