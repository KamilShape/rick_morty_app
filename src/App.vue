<template>
  <div class="nav">
    <router-link class="nav_link" to="/">Characters</router-link> 
    <router-link class="nav_link" to="/favourites">Favourites</router-link>
  </div>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<style lang="scss">
.nav{
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  width: 350px;
  &_link{
    padding: 10px;
    text-decoration: none;
    background-color:rgb(110, 120, 255);
     border-radius: 10px;
    color: black;
    }
  }
</style>
