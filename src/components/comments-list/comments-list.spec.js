import React from 'react'
import {render, mount} from 'enzyme'
import CommentList from '../../components/comments-list/comment-list'
import articles from '../../fixtures'

describe('Comments List', () => {
	articles.map((item, index) => {
		
		it('should open comments on click', () => {

			console.log(`Проверка комментариев у статьи ${index+1}`)

			if (articles[index].comments != undefined) {

				let wrapper = mount(<CommentList comments={articles[index].comments} />)
				console.log(`У статьи ${index+1} всего ${articles[index].comments.length} комментария(ев)`)
				wrapper.find('.test__comments--button').at(0).simulate('click')

				expect(wrapper.find('.test__comments-list--item').length).toEqual(articles[index].comments.length)

			} else {

				console.log(`У статьи ${index+1} пока нет комментариев`)
			
			}
		})
	})
})