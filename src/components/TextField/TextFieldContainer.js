import { connect } from 'react-redux';
import TextField from './TextField';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

export default connect(mapStateToProps, null)(TextField);
