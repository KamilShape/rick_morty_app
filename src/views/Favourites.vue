<template>
  <div class="favourites">
    <div class="favourites_container">
      <h2 class='favourites_header'>
        Let's go to character list and find your favourite characters! 
      </h2>
      <!-- <img class='favourites_image' src="../assets/rick_and_morty.png" alt=""> -->
     </div>
    <div class="characters_container">
      <Character v-for='character in favCharacters' 
      :key='character.id'
      :name='character.name'
      :species='character.species'
      :status='character.status'
      :gender='character.gender'
      :image='character.image'
      :id='character.id'
      :visible="false"
      />
    </div>
  </div>
</template>

<script>
import Character from'@/components/Character.vue'
export default {
  name: 'Favourites',
   components: {
    Character
  },
  computed:{
    favCharacters(){
      return this.$store.state.favCharacters
    }
  },
 
}
</script>

<style lang="scss">
  .favourites{
    &_container{
      margin: 0 auto;
      width: 350px;
      height: 100%;
    }
    &_header{
      width: 350px;
      text-align: center;
       padding: 10px;
      box-sizing: border-box;
    }
    &_image{
      width: 350px;
    }
  }
  
</style>
