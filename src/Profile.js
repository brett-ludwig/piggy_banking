import React, { Component } from 'react';
import PiggyBank from './PiggyBank.js';
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
      accounts:[],
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
          <div height = '20'>
            <button class = 'custom-btn' onClick={() => alert("TODO: add functionality")}>add account</button>
            <button class = 'custom-btn' onClick={() => alert("TODO: add functionality")}>remove account</button>
          </div>

          <ul>
            {[12345, 44213].map( (item) =>
              (<li> <PiggyBank balance = {item}></PiggyBank> </li>)
            )
            }
          </ul>
        </div>
      </div> : null
    );
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }
}
