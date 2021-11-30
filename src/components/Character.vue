<template>
  <div class="character">
    <img class='character_image' :src="image">
    <div class='character_container'>
      <h4 class='character_name'>Name: {{name}}</h4>
      <p class='character_description'>Status: {{status}}</p>
      <p class='character_description'>Species: {{species}}</p>
      <p class='character_description'>Gender: {{gender}}</p>
      <button class='character_button' @click='addCharacter'>Add to favourites</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    name: String,
    status: String,
    species: String,
    gender: String,
    image: String,
    id: Number
  },
   methods:{
    addCharacter(){
      
      this.$store.commit('addCharacter', [this.id, this.name, this.status, this.species, this.gender, this.image])
    }
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
   }
   &_name{
     font-size: 0.8rem;
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
