import {  } from '../constants'
import { normalizedComments as defaultComments } from '../fixtures'

export default (commentsState = defaultComments, action) => {
    const { type } = action

    switch (type) {

        default:
            return commentsState
    }
}