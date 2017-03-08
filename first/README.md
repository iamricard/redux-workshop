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
