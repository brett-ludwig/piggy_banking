import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';

export default class PiggyBank extends Component{
  render(){
    return (
      <div class='piggy-bank'>
        <img class = 'pig' width = '128' height='128' background = 'c3f0ca'
             src = 'https://www.pikpng.com/pngl/b/288-2884365_piggy-bank-transparent-free-png-piggy-bank-vector.png'>
        </img>
        <div class = 'column'>
          <strong> account balance : {this.props.balance} </strong>
        </div>
      </div>
    );
  }
}
