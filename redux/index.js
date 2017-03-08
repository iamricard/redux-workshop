import $ from 'jquery'
import createStore from './store'

const GIPHY_API_KEY = 'dc6zaTOxFJmzC'
const GIPHY_HOST = 'http://api.giphy.com/v1'
const DEFAULT_STATE = { gifs: [] }

const RECEIVE = 'RECEIVE'

const receiveGifs = ({ data }) => ({ type: RECEIVE, payload: { gifs: data }})

function gifs(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RECEIVE:
      return Object.assign({}, state, { gifs: action.payload.gifs })
    default:
      return state
  }
}

const store = createStore(gifs)
