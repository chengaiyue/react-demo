import {applyMiddleware ,combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import undoable from 'redux-undo';

import {default as headerReducers} from '../app/reducer/reducer';

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
};

function appReducerCreator(initialState, allReducers) {
    function appReducer(state = initialState, action) {
        if (action && action.type && allReducers[action.type]) {
            return allReducers[action.type](state, action);
        } else {
            return state;
        }
    }
    return appReducer;
}

export default function configureStore(initialState = {}) {
    let appReducer = appReducerCreator(initialState, headerReducers);
    let reducers = combineReducers({appReducer: undoable(appReducer, {
        filter: function (action, currentState, previousState) {
            return action.skipUndo !== true;
        }
    })});
    return createStore(reducers, {}, applyMiddleware(thunk, logger));
}