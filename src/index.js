/*import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

store.dispatch(bugAdded('bug 1'));
store.dispatch(bugAdded('bug 2'));
//store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(2));

console.log('store ', store.getState());
console.log('Hello World!');

import * as actions from './store/bugs';
import store from './store/store';
console.log('====================================');
store.subscribe(() => console.log('state change'));
store.dispatch(actions.bugAdded('bug 1'));
store.dispatch(actions.bugAdded('bug 1'));
console.log(store.getState());
store.subscribe(() => console.log('state change'));
console.log('====================================');

import store from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs.reduxToolkit';
console.log('====================================');
store.dispatch(bugAdded({ description: 'bug un' }));
store.dispatch(bugAdded({ description: 'bug deux' }));
store.dispatch(bugAdded({ description: 'bug trois' }));
store.dispatch(bugRemoved({ id: 2 }));
store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());
console.log('====================================');
*/

//slice
import slice from './store/bug.slice';
import store from './store/configureStore';
import { bugAdd, bugResolved } from './store/bug.slice';
store.dispatch(bugAdd({ description: 'bug add slice' }));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());
