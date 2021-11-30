<template>
  <div class="nav">
    <router-link class="nav_link" to="/">Characters</router-link> 
    <p class="nav_link" >|</p>
    <router-link class="nav_link" to="/favourites">Favourites</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
.nav{
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  width: 150px;
  &_link{
    padding: 10px;
    padding-bottom: 3px;
    text-decoration: none;
    color: black;
    &:hover{
      border-bottom: 1px solid black
    }
  }
  router-link:active{
      color: blue;
      border-bottom: 1px solid blue
    }
  }
</style>
