import React from 'react'
import {render, mount} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Article', () => {
    it('article should be open', () => {
        const wrapper = render(<Article article={articles[0]} isOpen={true}/>)

        expect(wrapper.find('.test__article--body').length).toEqual(1)
    });

    it('article should be open', () => {
        const wrapper = render(<Article article={articles[0]} isOpen={false}/>)

        expect(wrapper.find('.test__article--body').length).toEqual(0)
    });

    it('commentlist should be open', () => {
        const wrapper = mount(<Article article={articles[0]} isOpen={true}/>)

        wrapper.find('.test__comment-list--button').simulate('click')
        expect(wrapper.find('.test__comment-list--item').length).toEqual(5)
    });
});
