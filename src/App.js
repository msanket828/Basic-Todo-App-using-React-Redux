import React from 'react';
import Main from './component/Main'
import { connect } from 'react-redux';


function mapStateToProps(state) {
  console.log(state);
  return {
    data: state
  }
}


const App = connect(mapStateToProps)(Main);
export default App;
