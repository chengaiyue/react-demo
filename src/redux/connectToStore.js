import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';

function mapStateToProps(state) {
    if (state) {
        return {
            store: state.appReducer.present
        }
    } else {
        return {};
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickAction: bindActionCreators(actions, dispatch).onClickAction,
        dispatch: dispatch
    }
}

export default function connectToStore(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component)
}




