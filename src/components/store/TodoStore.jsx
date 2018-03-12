import {autorun , observable} from 'mobx';

class TodoStore {
    @observable todos = ["movie pirata 1","Pirate"]
    @observable filter = ""
}

var store  = window.store = new TodoStore;

export default store;

autorun(()=> {
    console.log(store.filter);
    console.log(store.todos[0]);
})
