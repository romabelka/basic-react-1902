import React from 'react'
import {render, mount, shallow} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Article', function () {
  let firstArticle;

  beforeAll(function () {
    firstArticle = articles[0];
  });

  it('first article should be CLOSED', function () {
    let wrapper = render(<Article article={firstArticle} />);
    //console.log(wrapper.html());
    expect(wrapper.find('.test__article--body').length).toEqual(0);
  });

  it('first article should be OPEN', function () {
    let wrapper = render(<Article article={firstArticle} isOpen={true} />);
    //console.log(wrapper.html());
    expect(wrapper.find('.test__article--body').length).toEqual(1);
  });

  it('first open article should have CLOSED comments list block', function () {
    let wrapper = render(<Article article={firstArticle} isOpen={true} />);
    //console.log(wrapper.html());
    expect(wrapper.find('.test__comments--list').length).toEqual(0);
  });

  it('should OPEN comments list when the first open article\'s `show comments` button is clicked', function () {
    let wrapper = mount(<Article article={firstArticle} isOpen={true} />);
    wrapper.find('.test__comments--button').at(0).simulate('click');
    //console.log(wrapper.html());
    expect(wrapper.find('.test__comments--list').length).toEqual(1);
  });
});
