import React from 'react'
import {render, mount} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Article List', () => {
    it('should open comments on click', () => {
        const wrapper = mount(<Article
            article = {articles[0]}
            isOpen = {true}
        />)
        wrapper.find('.test__comments--button').at(0).simulate('click')
        expect(wrapper.find('.test__comments--body').length).toEqual(1)
    });
});
