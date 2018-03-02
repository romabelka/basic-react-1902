import filters from './filters'
import { DATE_RANGE, SELECT_ARTICLE } from '../constants'
import articles from '../fixtures'
import { defaultFiltersState } from './filters'

describe('filters', () => {
  it('should add selected articles in state', () => {
    const action = {
      type: SELECT_ARTICLE,
      payload: [ { value: articles[0].id, label: articles[0].title }]
    }
    const nexState = filters(defaultFiltersState, action)
    const expectResult = { ...defaultFiltersState, selectedArticles: [ { value: articles[0].id, label: articles[0].title }] }

    expect(nexState).toEqual(expectResult)
  })
  it('should change date range', () => {
    const action = {
      type: DATE_RANGE,
      payload: { from: 'Fri Mar 02 2018 12:00:00 GMT+0200 (EET)', to: 'Fri Mar 23 2018 12:00:00 GMT+0200 (EET)' }
    }
    const nextState = filters(defaultFiltersState, action)

    expect(nextState).toEqual({ ...defaultFiltersState, dateRange: {
      from: 'Fri Mar 02 2018 12:00:00 GMT+0200 (EET)', to: 'Fri Mar 23 2018 12:00:00 GMT+0200 (EET)'
    } })
  })
})
