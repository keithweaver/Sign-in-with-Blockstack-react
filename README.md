# Sign In with Blockstack Button (React Component)

![Image of Sign in with Blockstack react component](https://raw.githubusercontent.com/keithweaver/Sign-in-with-Blockstack-react/assets/main.png)

## Installing

```bash
npm install blockstack-signin-btn --save
```

## Use

There are two components in this library: `SignInBlockstackButton` and `SignInBlockstackLiteButton`. `SignInBlockstackButton` has the blockstack sign in and sign out functions written. These functions are passed into `SignInBlockstackLiteButton` as props. `SignInBlockstackButton` uses `SignInBlockstackLiteButton`. Reference the code for more.


### Importing

At the top of the file, include:

```js
import { SignInBlockstackButton, SignInBlockstackLiteButton } from 'blockstack-signin-btn';
```

### Minimum

This is the bare minimum. You should reference the `blockstack.js` library to check if the user is logged in with `blockstack.isUserSignedIn()` and pass that to `isSignedIn`.

```js
<SignInBlockstackButton />
```

### Customize Button Text

You can change the button text from the default of `Sign In with Blockstack` and `Sign Out`. You pass in your wanted text as props:

```js
<SignInBlockstackButton
  signInBtnText="New Sign In Text"
  signOutBtnText="New Sign Out Text"
/>
```

### Hide the Blockstack Logo in Button

We include the Blockstack logo on the left side of the button. You can hide this, just pass in the prop `includeBlockstackLogo` as `false`.

```js
<SignInBlockstackButton
  includeBlockstackLogo={false}
/>
```

### Custom Redirect on Sign Out

This is just for `SignInBlockstackButton` and not the lite. Since the sign out function is already written, by default it redirects after sign out to `/`. This can be changed with `signOutRedirect`.

```js
<SignInBlockstackButton
  signOutRedirect="/custom-signout-page"
/>
```

### Render Nothing

This was included in case the developer want to not render a sign in or sign out button. The user may be pending sign in, etc.

```js
<SignInBlockstackButton
  renderNothing
/>

// or

<SignInBlockstackButton
  renderNothing={true}
/>
```


### Custom Styling

All styling has been done inline to control the areas to manipulate and name issues. All aspects of the button can be customized in terms of styling. The text can be styled with `textStyle` prop. The image/logo can be styled with `imageStyle` prop. The sign out button can be styled with `signOutStyle` prop. The sign in button can be styled with `signInStyle` prop. Both buttons can be styled with `style` prop. You can remove default styling with `defaultStyle` prop.

```js
<SignInBlockstackButton
  textStyle={{
    fontSize: 24,
  }}
  imageStyle={{
    height: 100,
  }}
  signOutStyle={{
    backgroundColor: 'red',
  }}
  signInStyle={{
    backgroundColor: 'green',
  }}
/>

// or for both buttons at once and remove default

<SignInBlockstackButton
  textStyle={{
    color: '#2e2e2e',
  }}
  style={{
    backgroundColor: '#fff',
  }}
  defaultStyle={{}}
/>
```


## Testing

To test this component, we will use a link to a pre built demo project. In a terminal window:

```bash
git clone https://github.com/alanbsmith/component-lib-playground.git
cd component-lib-playground/
npm install
```

In **another** terminal:

```bash
git clone https://github.com/keithweaver/Sign-in-with-Blockstack-react.git
cd Sign-in-with-Blockstack-react
npm install
npm link
```

Returning to the first terminal window, you should then run:

```bash
npm link blockstack-signin-btn
npm run dev
```

An app will be running on http://localhost:8080 and you will be able to add `blockstack-signin-btn` to it. If you open `src/components/App.js` and add `import { SignInBlockstackButton } from 'blockstack-signin-btn';` to the top. Then add code below to the render. It will add the button. This request will however fail because you need the `manifest.json` and other Blockstack parts.

```js
<SignInBlockstackButton />
```




[Reference](https://hackernoon.com/building-a-react-component-library-part-2-46fd4f77bb5c)
