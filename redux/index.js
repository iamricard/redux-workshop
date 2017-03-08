import $ from 'jquery';
import createStore from './store';

const GIPHY_API_KEY = 'dc6zaTOxFJmzC';
const GIPHY_HOST = 'http://api.giphy.com/v1';

// actions
const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const INPUT = 'INPUT';

const requestGifs = () => ({ type: REQUEST });
const receiveGifs = ({ data }) => ({ type: RECEIVE, payload: { gifs: data } });
const input = query => ({ type: INPUT, payload: { query } });
const fetchGifs = () => (dispatch, getState) => {
  const { isLoading, query } = getState();

  if (isLoading) return;

  dispatch(requestGifs());

  return fetch(`${GIPHY_HOST}/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveGifs(json)));
};

// reducer
const DEFAULT_STATE = { gifs: [], isLoading: false, query: 'cats' };

function gifs(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case RECEIVE:
      return Object.assign({}, state, {
        isLoading: false,
        gifs: action.payload.gifs
      });
    case INPUT:
      return Object.assign({}, state, { query: action.payload.query });
    default:
      return state;
  }
}

const store = createStore(gifs);

// view
store.subscribe((...args) => {
  const el = $('#gifs')
  const html = store
    .getState()
    .gifs.map(({ images }) => `<div><img src="${images.original.url}"></div>`)
    .join('\n')

  if (html === el.html()) return

  el.html(html);
});

store.dispatch(fetchGifs());

$('form').on('submit', evt => {
  evt.preventDefault();
  store.dispatch(fetchGifs());
});

$('input[name=query]').on('input', ({ target }) => {
  store.dispatch(input(target.value));
});
