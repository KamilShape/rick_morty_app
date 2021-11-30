<template>
  <div class="character">
    <img class='character_image' :src="image">
    <div class='character_container'>
      <h4 class='character_name'>{{name}}</h4>
      <p class='character_description'>Status: {{status}}</p>
      <p class='character_description'>Species: {{species}}</p>
      <p class='character_description'>Gender: {{gender}}</p>
      <button class='character_button' v-if='addVisible' @click='addCharacter'>Add to favourites</button>
      <button class='character_button' v-else @click='removeCharacter'>Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addVisible: this.visible
    }
  },
  name: "Character",
  props: {
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
    image: String,
    visible: Boolean
  },
  computed:{
    favCharacters(){
      return this.$store.state.favCharacters
    }
  },
  methods:{
    addCharacter(){
        this.$store.commit('addCharacter', [this.id, this.name, this.status, this.species, this.gender, this.image])
        this.$store.commit('setHeader', "Your favourite characters list: ")
      },
    removeCharacter(){
      let index = this.favCharacters.findIndex(
        (character) => character.id == this.id
      )
      this.$store.commit('removeCharacter', index)
      if(this.favCharacters.length === 0){
        this.$store.commit('setHeader', "Let's go to characters list and find your favourite characters!")
      }
    },
  }
};
</script>

<style lang="scss">
 .character{
   display: flex;
   width: 350px;
   margin: 10px auto;
   box-sizing: border-box;
   padding: 20px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   &_image{
     width: 150px;
    height: 150px;
    border-radius: 150px;
    box-shadow: rgba(45, 100, 245, 0.7) 5px 3px 8px;
   }
   &_name{
     font-size: 1.1rem;
      width: 150px;
   }
   &_description{
     font-size: 0.7rem;
     width: 150px;
   }
   &_button{
     font-size: 0.7rem;
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
     padding: 20px;
   }
 }
</style>
