import { createStore } from "vuex";

export default createStore({
    state: {
        favCharacters: []
    },
    mutations: {
        addCharacter(state, [value1, value2, value3, value4, value5, value6]) {
            state.favCharacters.push({
                id: value1,
                name: value2,
                status: value3,
                species: value4,
                gender: value5,
                image: value6,
            })
        }
    },
    actions: {},
    modules: {},
});