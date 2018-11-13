import React, { Component } from 'react';

import './App.css';
import News from './News';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    // var p1={
    //   ten:"man hinh",
    //   gia:90
    // }
    // console.log(p1);
    // var p2={...p1};//var p2=p1 thi p1 se thay doi theo p2
    // p2.gia=100;
    // console.log(p2);
    // console.log(p1);
  
    
    return (
      <div className="App">
       <h2 className="display-3">Test</h2>
       <News></News>
       {this.props.dulieu}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}
export default connect(mapStateToProps)(App);
