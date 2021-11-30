<template>
  <div class="favourites">
    <h1>Your Favourites Characters</h1>
    {{favCharacters}}
  </div>
</template>

<script>
export default {
  name: 'Favourites',
  computed:{
    favCharacters(){
      return this.$store.state.favCharacters
    }
  },
 
}
</script>

<style lang="">
  
</style>
