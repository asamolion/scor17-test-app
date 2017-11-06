import { connect } from 'react-redux';
import InputField from './InputField';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

export default connect(mapStateToProps, null)(InputField);
