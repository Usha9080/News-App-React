import React, { Component } from 'react'
import loader from './loader.gif'
export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt=''/>
        
      </div>
    )
  }
}

export default Loader
