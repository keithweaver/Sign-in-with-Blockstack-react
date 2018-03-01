import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignInBlockstackLiteButton from './SignInBlockstackLiteButton';

const blockstack = require('blockstack');

class SignInBlockstackButton extends Component {
  constructor(props) {
    super(props);

    const {
      signOutRedirect,
    } = props;

    this.state = {
      signOutRedirect,
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  signIn() {
    blockstack.redirectToSignIn();
  }

  signOut() {
    blockstack.signUserOut(this.state.signOutRedirect);
  }

  render() {
    if (!blockstack.isUserSignedIn() && blockstack.isSignInPending()) {
      // I had to hard code this cause I was getting nameReplaceLookup.replace
      // undefined.
      blockstack.handlePendingSignIn('https://core.blockstack.org/v1/names')
        .then(() => {
          // eslint-disable-next-line
          location.reload();
        });

      return (null);
    }
    return (
      <SignInBlockstackLiteButton
        renderNothing={this.props.renderNothing}
        signOutBtnText={this.props.signOutBtnText}
        signInBtnText={this.props.signInBtnText}
        includeBlockstackLogo={this.props.includeBlockstackLogo}
        defaultStyle={this.props.defaultStyle}
        style={this.props.style}
        imageStyle={this.props.imageStyle}
        textStyle={this.props.textStyle}
        signInStyle={this.props.signInStyle}
        signOutStyle={this.props.signOutStyle}
        isSignedIn={this.props.isSignedIn}
        signIn={this.signIn}
        signOut={this.signOut}
      />
    );
  }
}

SignInBlockstackButton.propTypes = {
  renderNothing: PropTypes.bool,
  signOutBtnText: PropTypes.string,
  signInBtnText: PropTypes.string,
  includeBlockstackLogo: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  defaultStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  imageStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  signInStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  signOutStyle: PropTypes.object,
  signOutRedirect: PropTypes.string,
  isSignedIn: PropTypes.bool,
};

SignInBlockstackButton.defaultProps = {
  renderNothing: false,
  signOutBtnText: 'Sign Out',
  signInBtnText: 'Sign In with Blockstack',
  includeBlockstackLogo: true,
  defaultStyle: null,
  style: {},
  imageStyle: {},
  textStyle: {},
  signInStyle: {},
  signOutStyle: {},
  signOutRedirect: '/',
  isSignedIn: blockstack.isUserSignedIn(),
};

export default SignInBlockstackButton;
