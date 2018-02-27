import React from 'react'
import { mount } from 'enzyme'

import { Article } from './'
import articles from '../../fixtures'

describe('Article', () => {
  const props = {
    isOpen: true,
    article: articles[0],
    onButtonClick() {},
  }
  it('should show comment list', () => {
    const wrapper = mount(<Article {...props}/>)
    const commentListId = '#comment-list'

    expect(wrapper.find(commentListId).exists()).toEqual(false)

    wrapper.find('#button-show-comments').simulate('click')

    expect(wrapper.find(commentListId).exists()).toEqual(true)
  })
})
