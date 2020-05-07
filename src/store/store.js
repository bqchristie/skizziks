import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentList: {},
        currentTask: {},
        lists: [],
        page: {
            slideUpVisible: false,
            listsMenuVisible: false,
            leftMenuVisible: false,
            rightMenuVisible: false
        }
    },


    mutations: {
        LOGIN (state, payload) {
            state.authentication = payload
            if (payload.auth) {
                Vue.ls.set('token', payload.token)
                Vue.ls.set('user', payload.user)
                axios.defaults.headers.common['x-access-token'] = payload.token;
            }
        },
        LOGOUT (state) {
            Vue.ls.remove('token')
            Vue.ls.remove('user')
            state.authentication = null

        },
        DELETE_LIST(state) {
            state.lists = state.lists.filter(list => list._id !== state.currentList._id);
            state.currentList = {};
            state.page.leftMenuVisible = true;
            state.page.slideUpVisible = false;
        },
        UPDATE_LIST(state) {
            state.currentList = Object.assign({}, state.currentList);
            const idx = _.findIndex(state.lists, {'_id': state.currentList._id});
            Vue.set(state.lists, idx, state.currentList);
        },
        SET_CURRENT_LIST(state, payload) {
            state.currentList = payload;
        },
        SET_CURRENT_TASK(state, payload) {
            state.currentTask = payload;
            state.page.rightMenuVisible = true;
        },
        SET_LISTS(state, payload) {
            state.lists = payload;
        },
        CREATE_LIST(state, payload) {
            state.lists.push(payload);
        },
        ADD_TASK(state, payload) {
            state.currentList = payload;
            const idx = _.findIndex(state.lists, {'_id': payload._id});
            Vue.set(state.lists, idx, state.currentList);
        },
        HIDE_MENUS(state) {
            state.page.leftMenuVisible = false;
            state.page.rightMenuVisible = false;
        }
    },

    actions: {
        setCurrentList({commit}, id) {
            axios.get('http://localhost:3000/api/v1/list/' + id).then(response => {
                commit('SET_CURRENT_LIST', response.data);
            })
        },
        setCurrentTask({commit}, task) {
            commit('SET_CURRENT_TASK', task);
        },
        getLists({commit}) {
            axios.get('http://localhost:3000/api/v1/list').then(response => {
                commit('SET_LISTS', response.data);
            })
        },
        addList({commit}) {
            const listName = `Unititles ${this.state.lists.length + 1}`;
            axios.post('http://localhost:3000/api/v1/list', {name: listName}).then(response => {
                commit('CREATE_LIST', response.data);
            });
        },
        deleteList({commit}) {
            console.log("deleting list");
            axios.delete('http://localhost:3000/api/v1/list/' + this.state.currentList._id).then(response => {
                console.log(response);
                commit('DELETE_LIST');
            });
        },
        updateList({commit}) {
            console.log("updating list");
            commit('UPDATE_LIST');
            const copy = Object.assign({}, this.state.currentList);
            axios.put('http://localhost:3000/api/v1/list', copy).then(response => {
                commit('UPDATE_LIST', response.data);
            });
        },

        addTask({commit}, name) {
            const copy = Object.assign({}, this.state.currentList);
            copy.tasks.push({name: name})
            axios.put('http://localhost:3000/api/v1/list', copy).then(response => {
                commit('ADD_TASK', response.data);
            });
        },
        hideMenus({commit}) {
            commit('HIDE_MENUS')
        },
        login ({commit}, creds) {
            return new Promise( (resolve) => {
                //dispatch('startSpinner')
                console.log(creds);
                //axios.post(process.env.AUTH_PATH + '/login', creds).then((response) => {
                commit('LOGIN', {auth: true, token:'babaganoosh', user: 'hey now'});
                //})
                resolve();
            } )
        },
        logout ({commit}) {
            return new Promise( (resolve) => {
                commit('LOGOUT', null)
                resolve();
            });
        }

    },
    getters: {
        lists: state => state.lists,
        currentList: state => state.currentList,
        currentTask: state => state.currentTask,
        page: state => state.page,
        authentication: state => state.authentication
    }
});
