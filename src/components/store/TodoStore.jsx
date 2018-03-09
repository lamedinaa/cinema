import {autorun , observable} from 'mobx';

class TodoStore {
    @observable todos = ["buy milk","Pirate"]
    @observable filter = ""
}

var store  = window.store = new TodoStore;

export default store;

autorun(()=> {
    console.log(store.filter);
    console.log(store.todos[0]);
})
