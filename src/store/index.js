import { createStore } from "vuex";

export default createStore({
    state: {
        favCharacters: [],
        header: "Let's go to characters list and find your favourite characters!"
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
        },
        removeCharacter(state, index) {
            state.favCharacters.splice(index, 1)
        },
        setHeader(state, value) {
            state.header = value
        }
    },
});