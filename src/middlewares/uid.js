import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const {type, payload} = action

    if (type === ADD_COMMENT) {
        next({
            ...action,
            payload: {
                ...payload,
                id: generateUID('qazwsxedcrfvtgbyhnujmikop1234567890', 8)
            }
        });
        return
    }

    next(action)
}


function generateUID(alphabet, length) {
    let string = ''
    length = Math.abs(length)

    while (length-- > 0) {
        string += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return string
}
