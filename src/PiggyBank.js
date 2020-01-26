import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';

export default class PiggyBank extends Component{
  render(){
    return (
      <div class='piggy-bank'>
        <img class = 'pig' width = '128' height='128' background = 'c3f0ca'
             src = 'https://cdn.imgbin.com/25/4/12/imgbin-piggy-bank-MbmjRpjwCuCs3V70NMYfUieH3.jpg'>
        </img>
        <div class = 'column'>
          <strong> account balance : {this.props.balance} </strong>
        </div>
      </div>
    );
  }
}
