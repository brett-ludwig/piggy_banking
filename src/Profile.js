import React, { Component } from 'react';
import PiggyBank from './PiggyBank.js';
import AddAccountForm from './AddAccountForm.js'
import {
  Person,
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      person: {
       name() {
         return 'Anonymous';
       },
       avatarUrl() {
         return avatarFallbackImage;
       },
      },
      account_names:[],
      account_balances: [],
    }
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    const { accounts } = this.state;
    return (
      !userSession.isSignInPending() ?
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>

        <div className = "piggy-banks">
          <div height = '20'>
            <center>
              <strong>My Piggy Banks</strong>
            </center>
          </div>
          <div >
            <AddAccountForm userSession = {userSession}></AddAccountForm>
          </div>
          <div>
            <button class = 'custom-btn' onClick={() => alert("TODO: add functionality")}>remove account</button>
          </div>

          <ul>
            {this.state.account_balances.map( (item) =>
              (<li> <PiggyBank balance = {item}></PiggyBank> </li>)
            )
          }
            (<li> <PiggyBank balance = '100'></PiggyBank> </li>)
          </ul>
        </div>
      </div> : null
    );
  }

  fetchData(){
    const { userSession } = this.props
    const options = { decrypt: true }
    userSession.getFile('balances.json', options)
     .then((file) => {
       var accounts = JSON.parse(file || '[]')
       this.setState({
         account_names : parseInt(accounts)
       })
     })
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
    this.fetchData()
  }

}
