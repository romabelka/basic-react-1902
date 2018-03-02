import { selectArticle, updateDateRange } from './'
import { SELECT_ARTICLE, DATE_RANGE} from '../constants'
import articles from '../fixtures'

describe('selectArticle', () => {
  it('should add article to selected articles', () => {
    const selectedArticles = [ { value: articles[0].id, label: articles[0].title }]
    const nextSelectedArticles = selectArticle({ value: articles[1].id, label: articles[1].title }, selectedArticles)

    expect(nextSelectedArticles).toEqual({
      type: SELECT_ARTICLE,
      payload: [ { value: articles[0].id, label: articles[0].title }, { value: articles[1].id, label: articles[1].title } ]
    })
  })
})

describe('dateRange', () => {
  it('should change date range', () => {
    const dates = { from: 'Fri Mar 02 2018 12:00:00 GMT+0200 (EET)', to: 'Fri Mar 23 2018 12:00:00 GMT+0200 (EET)' }
    const nextDateRange = updateDateRange(dates)

    expect(nextDateRange).toEqual({
      type: DATE_RANGE,
      payload: dates
    })
  })
})
