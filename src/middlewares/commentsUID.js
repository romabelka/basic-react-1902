import { ADD_COMMENT } from '../constants'

const makeid = () => {
  const UIDChags = "abcdefghijklmnopqrstuvwxyz0123456789"
  let text = ""

  for (let i = 0; i < 10; i++ )
    text += UIDChags[Math.floor(Math.random() * UIDChags.length)]

  return text
}

export default store => next => action => {
  const {type, payload} = action

  switch (type){
    case ADD_COMMENT:
      payload.comment.id = makeid()
      break
    default:
      break
  }

  next(action)
}
