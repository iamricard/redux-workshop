# react

this exercise centers around react: we won't be using any state management
libraries (e.g. redux, fluxxor, delorean...). we won't be covering alternative
view libraries like `inferno`, `preact` or `vue`, but i encourage you to explore
them on your own!

## what is react?

you can think of react as the view layer to your application. the way react is
meant to be used is to **generate snapshots of state**. what does this mean?
think about other, "_more traditional_" if you will, view implementations: you
have an _initial state_, whenever the state mutates you, the library user, come
manage the dom changes. sounds familiar? (think backbone, plain jquery,
angular...). to summarize this is the _"old"_ way of doing it:

1. initialize application
1. state mutates
1. select relevant dom nodes and update/remove them
1. rinse and repeat

i'm not going to get on a flamewar on whether that's a good or bad approach, it
works. here's what react proposes instead: make a function (**component**) which
given certain arguments (**props**) create a dom representation of the state, a
snapshot if you will. whenever the state updates you supply the new state to the
function (component), react takes care of updating the dom to match the new
state. to summarize:

1. call function with initial state
1. update state
1. call function with new state

hopefully that makes sense, if it doesn't please do ask!

## workshop

### part one

much like with `jquery` or other manipulation libraries in react you can
[attach event listeners to user interactions]. take a look at the example
you have been provided and then complete the following tasks:

* [ ] enable the count down button, and make it update the count appropriately
* [ ] create another button to **reset** the count to zero

### part two

you will keep hearing the word component when talking about react, what is that
anyway? how do you make one? like we said in the introduction, components are
javascript functions (masked with some XML-like syntax). you have three ways to
create them, we will look at the two that are not deprecated:

```js
// stateless functions
const Link = (props) => <a href={props.href}>{props.children}</a>

// classes
class LinkList extends React.Component {
  render () {
    return (
      <div>
        {this.props.links.map((link) => (
          <Link href={link.href}>
            {link.title || link.href}
          </Link>
        ))}
      </div>
    )
  }
}

const links = [
  'xing.com/jobs',
  'google.com',
  'twitter.com'
]

<LinkList links={links} />
```

you can find some more information on [stateless components] and
[class components] in the [react docs]. now that you've seen what components
look like and how you use them, complete the following tasks:

* [ ] create a separate button component. maybe try [stateless components]
* [ ] create an input to change the increments (defaulting to 1), it doesn't
need to be a separate component

> **Tip**: props **can** be functions

[attach event listeners to user interactions]: https://facebook.github.io/react/docs/handling-events.html
[stateless components]: http://buildwithreact.com/article/stateless-functional-components
[class components]: https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
[react docs]: https://facebook.github.io/react/docs
