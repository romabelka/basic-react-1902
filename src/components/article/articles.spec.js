import React from 'react'
import {render, mount} from 'enzyme'
import Article from './index.js'
import articles from '../../fixtures'

describe('Article', () => {
  it('should render Article', () => {
    const wrapper = render(<Article article={articles[0]} onButtonClick={() => console.log('click')} isOpen = {true} />)

    expect(wrapper.find('.test__article--button').length).toEqual(1)
  })

  it('should open comment on button click', () => {
    const wrapper = mount(<Article article={articles[0]} onButtonClick={() => console.log('click')} isOpen = {true} />)

    wrapper.find('.comments__button').at(0).simulate('click')

    expect(wrapper.find('.comments-list').length).toEqual(1)
  })
})
