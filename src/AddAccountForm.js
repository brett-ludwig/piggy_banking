
import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';


export default class AddAccountForm extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      account_name : "",
      account_balance : 0,
    }
    this.nameChange= this.nameChange.bind(this);
    this.balanceChange = this.balanceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event){
    event.preventDefault();
    this.setState( {account_name : event.target.value})
  }

  balanceChange(event){
    event.preventDefault();
    this.setState( {account_balance: event.target.value})
  }

  handleSubmit(event){
    const options = {encrypt: true}
    //let toParse = "{
     // $(this.state.account_balance)
    //}"
    this.props.userSession.putFile('balances.json', JSON.stringify(this.state.account_balance), options)
    //window.history.replaceState({}, document.title, "/")
  }

  render(){
    return (
            <form>
              <label>
              New acct name:
                <input type='text' name='account name' margin = '5px'/>
                </label>
                <label>
              Initial Balance:
                <input type='number' name='initial balance' margin = '5px' onChange = {this.balanceChange}/>
                </label>
              <input type='submit' value ='create new account' margin = '5px' onClick = {this.handleSubmit}/>
            </form>
          );
  }
}
