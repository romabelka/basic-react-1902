import React from 'react'
import {render, mount, shallow} from 'enzyme'
import ArticleListDecorated, {ArticleList} from './index'
import articles from '../../fixtures'

describe('Article List', () => {
    it('should render article list', () => {
        const wrapper = shallow(<ArticleList articles = {articles}/>)

        expect(wrapper.find('.test__article-list--item').length).toEqual(articles.length)
    });

    it('all articles should be closed by default', () => {
        const wrapper = render(<ArticleListDecorated articles = {articles}/>)

        expect(wrapper.find('.test__article--body').length).toEqual(0)
    });

    it('should open article on click', () => {
        const wrapper = mount(<ArticleListDecorated articles = {articles}/>)

        wrapper.find('.test__article--button').at(0).simulate('click')

        expect(wrapper.find('.test__article--body').length).toEqual(1)
    });

    it('should fetch data on mount', () => {
        let triggered
        mount(<ArticleListDecorated articles={[]} fetchData = {() => triggered = true}/>)

        expect(triggered).toEqual(true)
    });
/*

    it('should trigger onButtonClick', () => {
        let selectedId
        const wrapper = mount(<Article article={articles[0]} onButtonClick = {id => selectedId = id}/>)

        wrapper.find('.test__article--button').simulate('click')

        expect(selectedId).toEqual(articles[0].id)
    });
*/
});