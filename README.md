<h1 align="center">
  <br>
  <a href="https://intercessor-web.herokuapp.com/"><img src="https://raw.githubusercontent.com/yanghakim/intercessor/master/client/public/favicon.png" alt="intercessor" width="200"></a>
  <br>
  intercessor
  <br>
</h1>

<h4 align="center">A prayer sharing app built upon the <a href="https://twitter.com/mern_io" target="_blank">MERN Stack</a>.
</h4>
<p align="center">Landing page: <a href="https://intercessor.page" target="_blank">intercessor.page</a></p>
<p align="center">
  <a href="https://scrutinizer-ci.com/g/yanghakim/intercessor/?branch=master">
    <img src="https://scrutinizer-ci.com/g/yanghakim/intercessor/badges/quality-score.png?b=master"
         alt="scrutinizer">
  </a>
  <a href="https://scrutinizer-ci.com/g/yanghakim/intercessor/?branch=master">
    <img src="https://scrutinizer-ci.com/g/yanghakim/intercessor/badges/build.png?b=master"
         alt="scrutinizer">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#what-i-learned">What I Learned</a> •
  <a href="#credits">Credits</a> •
  <a href="#you-may-also-like">Related</a>
</p>

![screenshot](https://raw.githubusercontent.com/yanghakim/Portfolio/master/src/images/intweb/intweb-sanct.jpg)

## Key Features

- MERN Stack
- React-Router
- Redux Store, Thunk, Persist
- Authentication (Passport.js)
- Complex group schemas
- Filter for favorited groups
- Color-coded, theme-toggle

## How To Use

1.  Create an account. Use Google Auth if applicable.
2.  Enter user info when prompted. Create a user acronym.
3.  Go to SETTINGS. Search for your friends' GROUPS or create one and invite your friends.
4.  Choose your path to pray. (For others, yourself, or request prayer)
5.  Wait at SELAH, or edit the timer.
6.  (FOR OTHERS) Filter prayers by group or personal requests.
7.  (REQUEST PRAYER) Send prayer to other users/groups.

## What I Learned

I : Create React App

- after 2 weeks of learning Javascript, I started my first react app
- learned about the utility of components and the virtual DOM
- adopted SASS as a CSS extension
- learned and utilized sass variables and mixins

II : Server Side Foundation

- restructuring project to accomodate for server (Node.JS) and client (Javascript) side code
- installed and configured Express for route handling
- setup MongoDB
- installed and configured Mongoose for creating models and querying
- setup dynamic listening to PORTS (for DEV and PROD)
- installed and configured Passport for authentication

III : Routing

- handle routes with async/await
- CRUD practices
- structuring route files for each collection
- installed Mongoose for creating models and querying
- setup dynamic listening to PORTS (for DEV and PROD)
- routes: login, filter prayers, group members, leave group, and many more

IV : Redux

- configure and connect Redux store with components, mapping state to props
- setup actions, action creators, and reducers
- redux thunk used for "functional" action creators
- redux persist used for locally storing states
- states: user data, user's groups, user's favorite groups

V : QOL Practices

- component architecture: breaking down UI by components (login vs register)
- project architecture: grouping files by functionality (routes vs models) and type (sass vs jsx)
- naming conventions: BEM class naming
- routing architecture: breaking up big routes into middlewares

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [React.js](https://reactjs.org/)
- [Passport.js](http://www.passportjs.org/)
- [Express.js](https://expressjs.com/)
- [Redux](https://redux.js.org/)

- [Icon made by Freepik from www.flaticon.com](www.flaticon.com)

This software draws design inspiration from:

- [Visions for the future internet](https://findingctrl.nesta.org.uk/)

## You may also like...

- [Elysian](https://github.com/yanghakim/elysian) - A Christian Notetaking app (wip)
- [Ataraxia](https://github.com/yanghakim/ataraxia) - A Christian Personality adventure (wip)

---

> [yanghakim.com](https://www.yanghakim.com) &nbsp;&middot;&nbsp;
> GitHub [@yanghakim](https://github.com/yanghakim) &nbsp;&middot;&nbsp;
