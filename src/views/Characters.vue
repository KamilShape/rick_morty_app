<template>
  <div class="characters">
    <section class="characters_search">
      <h2 class="characters_header">Search your favourites characters</h2>
      <input class="characters_input" type="text">
    </section>
    <section class="characters_buttons">
      <button @click="fetchCharacters" class="characters_button" >Show all</button>
      <button @click="fetchCharacters" class="characters_button" >Search</button>
    </section>
  </div>
  <keep-alive>
    <div class="character_container">
    <Character v-for='character in characters' :key='character.id'
    :name='character.name'
    :species='character.species'
    :status='character.status'
    :gender='character.gender'
    :image='character.image'
    />
  </div>
  </keep-alive>
  
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
<style lang="scss">
  .characters{
    width: 350px;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &_header{
      text-align: center;
      padding: 20px;
    }
     &_input{
      display: block;
      width: 90%;
      margin: 0 auto;
      outline: none;
      padding: 10px;
      border: none;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    &_buttons{
      display: flex;
      justify-content: space-evenly;
      margin: 10px auto;
      width: 50%;
    }
    &_button{
     font-size: 0.85rem;
     padding: 5px;
     border-radius: 5px;
     margin-top: 5px;
     border: none;
     transition: 0.3s ease-in;
     &:hover{
       cursor: pointer;
       color: white;
       background-color: black;
      }
    }
    &_container{
      display: flex;
    }
   
  }
</style>
