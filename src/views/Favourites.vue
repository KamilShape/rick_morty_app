<template>
  <div class="favourites">
    <div class="favourites_container">
      <h2 class='favourites_header'>
        {{header}} 
      </h2>
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
    },
    header(){
      return this.$store.state.header
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
      
    }
    &_image{
      width: 350px;
    }
  }
  
</style>
