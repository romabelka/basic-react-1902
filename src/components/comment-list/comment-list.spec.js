import React from 'react'
import {mount} from 'enzyme'
import CommentList from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
    it('should be closed by default', () => {
        const wrapper = mount(<CommentList comments={articles[0].comments}/>)

        expect(wrapper.find('.test__comment-list--body').length).toBe(0)
    });

    it('should open on click', () => {
        const wrapper = mount(<CommentList comments={articles[0].comments}/>)

        wrapper.find('.test__comment-list--btn').at(0).simulate('click')

        expect(wrapper.find('.test__comment-list--item').length).toBe(articles[0].comments.length)
    });

    it('should display an empty text', () => {
        const wrapper = mount(<CommentList/>)

        wrapper.find('.test__comment-list--btn').at(0).simulate('click')

        expect(wrapper.find('.test__comment-list--empty').length).toBe(1)
    });
});
