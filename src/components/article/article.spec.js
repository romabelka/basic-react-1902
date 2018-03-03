import React from 'react'
import {render, mount} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Article', () => {
    it('should render open article', () => {
        const wrapper = mount(<Article article={articles[0]} isOpen/>)
        expect(wrapper.find('.test__article--body').length).toBe(1)
    });

    it('should render closed article', () => {
        const wrapper = mount(<Article article={articles[0]}/>)
        expect(wrapper.find('.test__article--body').length).toBe(0)
    });
});