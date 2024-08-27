import React, { Component } from 'react'
import ErrorImage from '../image/images.png';
export default class NotFound extends Component {
  render() {
    return (
        <div>
          <img className='text-center' src={ErrorImage} alt="BigCo Inc. logo"/>
        </div>
      );
  }
}
