import { ADD_COMMENT } from '../constants'
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
      const randomId = shuffle((new Date()).toLocaleString('en-US').split('').filter((symbol)=> {
                return symbol !== ' '
            })).join('')
      action.payload.data['id'] = randomId
    }
    next(action)
}