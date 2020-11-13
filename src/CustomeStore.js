import reducer from './reducer';

function createStore(reducer) {
  let state;
  let listners = [];
  function subscribe(listner) {
    listners.push(listner);
  }
  function dispatch(action) {
    //call the reducer to get the new state
    state = reducer(state, action);

    for (let index = 0; index < listners.length; index++) {
      listners[index]();
    }
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
