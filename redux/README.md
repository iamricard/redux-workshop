# redux

in this part of the workshop we will focus on learning how redux works with, no
`React` or other view libraries. We will use something most people are familiar
with, `jQuery`. Don't worry about build steps, all of is provided for you.

## what is redux?

redux is _convenient_ way to manage your state. The easiest way to think about
in, in my opinion, is this:

there are actions (which get **dispatched**) that enunciate **state** changes.
we can **subscribe** to state changes and perform **dom manipulations** to match
the **view** to the **new state**:

```
action -> update state (reduce)
  /\            ||
  ||            ||
  ||            \/
dom event <- dom manipulations
```

## workshop

### part one

attach the store to the `window` object. store has three relevant apis:

* [`getState`](http://redux.js.org/docs/api/Store.html#getState)
* [`dispatch`](http://redux.js.org/docs/api/Store.html#dispatch)
* [`subscribe`](http://redux.js.org/docs/api/Store.html#subscribe)

read the docs for each method and complete the following tasks:

* [ ] dispatch actions from your console
* [ ] log all state changes (not the diff, rather the new state)
* [ ] create a button to trigger actions

### part two

create a new action creator ([this is an action creator]), which will notify
the application that we are **requesting** gifs.

get a list of gifs and put them in an array, hardcoded. dispatch an action when
the application boots which dispatches **RECEIVE** with a list of gifs.

now that you have both those actions complete the following tasks:

* [ ] have the button trigger **REQUEST** gifs
* [ ] after the **REQUEST** action has been dispatched wait 2s using
`setTimeout` and dispatch and action which **RECEIVE**s the gifs that you
hardcoded in a variable

### part three

now we will create our _views_. we will use good 'ol `jQuery` for that. you'll
see that in our `index.js` we've `import $ from 'jquery'`, you can use `$` there
like you normally would in our rails apps.

create a function which will return a `div` wrapping an `img`, the function
should be of the form `url: string -> html: string`. the `src` of the `img`
should be the url of the a gif, so if your gif list has this form:

```js
[
  {
    url: String
  },
  {
    url: String
  }
]
```

your function should use `gif.url` as the `src`. once you have that function
created and working (you can attach it to `window` to try it out), complete the
following tasks:

* [ ] create a function, which given a list of gifs, `return`s its dom
representation
* [ ] use the `viewGifList` function defined above to render them on the page
when the previous `receiveGifs` happens.

### part four

finally we'll deal with fetching real data. to do that, we will use
[`redux-thunk`s], you don't need to worry about what a `thunk` is yet -you are
welcome and encouraged to explore that later on your own or ask me privately-.


this part will have far less hand holding. the documentation on [async actions]
is pretty good, but feel free to ask me any questions.

complete the following tasks:

* [ ] try fetching things from the [giphy api] (fetch/curl/postman...)
* [ ] create an async action to fetch gifs from giphy
* [ ] hook the previous async action to dispatch **RECEIVE** and modify the
state with the new gifs
* [ ] **EXTRA** add an input which lets the user change the query

> **tips**: there are some default styles, look at the `<style>` tag or ask me

[this is an action creator]: https://git.io/vyuA7
[`redux-thunk`s]: http://npm.im/redux-thunk
[async actions]: http://redux.js.org/docs/advanced/AsyncActions.html#async-action-creators
[giphy api]: https://github.com/Giphy/GiphyAPI
