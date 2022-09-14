import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mike Pizza React Portfolio</h1>
        <div>
{moment().format('MMMM DD YYYY, h:mm:ss a')}
      </div>

      </div>
    );
  }
}
