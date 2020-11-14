/*import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

store.dispatch(bugAdded('bug 1'));
store.dispatch(bugAdded('bug 2'));
//store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(2));

console.log('store ', store.getState());
console.log('Hello World!');
*/
import * as actions from './store/bugs';
import store from './store/store';
console.log('====================================');
store.subscribe(() => console.log('state change'));
store.dispatch(actions.bugAdded('bug 1'));
store.dispatch(actions.bugAdded('bug 1'));
console.log(store.getState());
store.subscribe(() => console.log('state change'));
console.log('====================================');
