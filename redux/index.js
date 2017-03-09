import $ from 'jquery'
import createStore from './store'

const GIPHY_API_KEY = 'dc6zaTOxFJmzC'
const GIPHY_HOST = 'http://api.giphy.com/v1'
const INITIAL_STATE = { gifs: [] }

const MOCK_GIFS = [
  'https://media.giphy.com/media/3oKIP65wAsFJ9eoso0/giphy.gif',
  'https://media.giphy.com/media/l0Ex1PUxgDkCwh0Ag/giphy.gif'
]

const RECEIVE = 'RECEIVE'

const receiveGifs = ({ data }) => ({ type: RECEIVE, payload: { gifs: data }})

function gifs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST':
      return Object.assign({}, state, { isLoading: true })
    case RECEIVE:
      return Object.assign({}, state, { isLoading: false, gifs: action.payload.gifs })
    default:
      return state
  }
}

const store = createStore(gifs)

const viewGIF = (url) =>
  `<div><img src=${url} /></div>`

const viewGIFList = (list) =>
  list.map((gif) => viewGIF(gif)).join('\n')

store.subscribe(() => {
  const { gifs, isLoading } = store.getState()
  const el = $('#gifs')
  if (isLoading) {
    el.html('LOADING...')
  } else {
    el.html(viewGIFList(gifs))
  }
})

$('#get-gifs').on('click', evt => {
  evt.preventDefault()
  store.dispatch({ type: 'REQUEST' })

  setTimeout(() => {
    store.dispatch(receiveGifs({ data: MOCK_GIFS }))
  }, 2000)
})
