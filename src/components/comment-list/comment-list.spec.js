import React from 'react'
import {render, mount} from 'enzyme'
import CommentList from './index'
import articles from '../../fixtures'

describe('Comment List', () => {
    it('should render empty comment list', () => {
        const comments = articles[0].comments;
        const wrapper = render(<CommentList isOpen = {true} comments = {comments}/>)
        expect(wrapper.find('.test__comment-list--item').length).toEqual(0)
    });

    it('should render comment list', () => {
        const comments = articles[0].comments;
        const wrapper = mount(<CommentList isOpen = {true} comments = {comments}/>)

        wrapper.find('.test__comment--button').at(0).simulate('click')

        expect(wrapper.find('.test__comment-list--item').length).toEqual(comments.length)
    });
});
