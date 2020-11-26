import {
    RECEIVE_NEW_POST,
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    DELETE_POST
} from '../actions/post_actions'
import {
    RESET_EVERYTHING
} from '../actions/all_actions'

const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_NEW_POST:
            nextState = Object.assign({}, state, { [action.payload.data._id]: action.payload.data }, {order: state.order});
            nextState.order.unshift(action.payload.data._id);
            return nextState;
        case RECEIVE_ALL_POSTS:
            return action.payload.data;
        case DELETE_POST:
            nextState = Object.assign({}, state);
            delete nextState[action.postId]
            for(let i=0; i<nextState.order.length; i++){
                if(nextState.order[i] === action.postId){
                    nextState.order.splice(i,1);
                    break;
                }
            }
            return nextState
        case RESET_EVERYTHING:
            return {};
        default:
            return state;
    }
};

export default postReducer;