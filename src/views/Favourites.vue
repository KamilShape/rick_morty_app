<template>
  <div class="favourites">
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

<style lang="">
  
</style>
