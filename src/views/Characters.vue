<template>
  <div class="characters">
    <button @click="fetchCharacters">Fetch data</button>
    <br>
    <Character v-for='character in characters' :key='character.id'
    :name='character.name'
    :species='character.species'
    :status='character.status'
    :gender='character.gender'
    :image='character.image'
    />
  </div>
</template>

<script>

import Character from'@/components/Character.vue'
export default {
  name: "Characters",
  data(){
    return{
      characters: []
    }
  },
  components: {
    Character
  },
  methods:{
        async fetchCharacters(){
          try {
            let {data} = await this.axios('https://rickandmortyapi.com/api/character');
            console.log(data.results)
            this.characters = data.results
          }
          catch(e) {
            console.log(e, 'Error')
          }
        }
  }
};
</script>
