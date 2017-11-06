import { connect } from 'react-redux';
import InputField from './InputField';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userNameInput: name => {
      dispatch({ type: 'USER_NAME_INPUT', name })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
