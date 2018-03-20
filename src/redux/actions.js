import {default as headerActions} from '../app/action/action';
/**
 * app action Router.
 * 此函数可以作为全局所有 action 的无差别拦截器。
 */
function onClickWithoutCheck(action) {
    return action;
}

/**
 * action 函数执行器，用于根据 action Handler Mapping 来将相应 action 动作路由到相应的 action 函数（ActionPromise 中构建出 action Handler Mapping）上。
 * 相当于 一个 action Handler.
 * 如果外部注入 wrapAction，那么直接使用 wrapAction 的操作即可。
 * 如果外部没有注入 wrapAction， 使用 dispatch 操作。
 */
export function onClickAction(action, props) {
    return function (dispatch, getState) {
        if (action.type && headerActions.hasOwnProperty(action.type)) {
            headerActions[action.type].call(this, action, dispatch, props);
        } else {
            dispatch(onClickWithoutCheck(action));
        }
    };
}
