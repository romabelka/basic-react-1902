import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { filterArticles, setFilter } from '../../AC'
import defaultArticles from '../../fixtures'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

	handleChange = newOption => {
		const {range, setFilter, filterArticles} = this.props
		setFilter(newOption, range)
		filterArticles(newOption, range)
	}
	
	render() {
		const options = defaultArticles.map(article => ({
			label: article.title,
			value: article.id
		}))
		
		return <Select
			options={options}
			value={this.props.selected}
			onChange={this.handleChange}
			multi
		/>
	}
}

export default connect(state => ({
	selected: state.filters.selected,
	range: state.filters.range
}), {setFilter, filterArticles})(SelectFilter)