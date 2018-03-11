export default store => next => action => {
    if (action.type === 'ADD_COMMENT') action.payload.id = Math.random().toString(36).substring(7);
    next(action);
}
