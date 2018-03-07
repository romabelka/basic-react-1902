import uuid from 'uuid/v1'
import { CREATE_COMMENT } from '../constants'

export default store => next => action => {
  if (action.type === CREATE_COMMENT) {
    const comment = {
      ...action.payload,
      id: uuid()
     }

     const newAction = {
       ...action,
       payload: comment,
     }

     console.log(comment)

     next(newAction)
  } else {
    next(action)
  }
}
