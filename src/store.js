import { createStore } from 'vuex';
import router from './router';

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
           // localStorage.setItem('token', 'JWT');
    },
    logout(state) {
        state.isLoggedIn = false;
        localStorage.removeItem('token');
    },
    },
    actions: {
        login({ commit }) {
            commit('login');
            //router.push('/about');
        },
        logout({ commit, dispatch }) {
            commit('logout');
         //   router.push('/');
         dispatch('navigateToLogin');
        },
        navigateToLogin() {
            router.push({name: 'Login'});
        },
    },
});

