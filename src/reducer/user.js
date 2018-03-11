import { CHANGE_USERNAME} from "../constants/index";

const initState = {
    username:""
}

export default (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_USERNAME:
            return {username:payload.username}

        default:
            return state
    }
}