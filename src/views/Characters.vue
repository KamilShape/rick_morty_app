<template>
  <div class="characters">
    <section class="characters_search">
      <h1 class="characters_header">Search your favourite characters</h1>
      <input class="characters_input" v-model='search' type="text">
    </section>
    <section class="characters_buttons">
      <button @click="searchCharacters" class="characters_button">Search</button>
      <button @click="showAll" class="characters_button">Show All</button>
    </section>
  </div>
   <div class="characters_arrows" v-if='arrowsVisible'>
      <button @click='changePageDown' class="characters_arrow characters_button"><i class="fas fa-angle-left"></i></button>
      <p class="characters_pageCounter">{{page}} / {{pages}}</p>
      <button @click='changePageUp' class="characters_arrow characters_button"><i class="fas fa-angle-right"></i></button>
  </div>
  <div class="characters_container">
    <Character v-for='character in characters' 
    :key='character.id'
    :name='character.name'
    :species='character.species'
    :status='character.status'
    :gender='character.gender'
    :image='character.image'
    :id='character.id'
    :visible="true"
    />
  </div>
  
  
</template>

<script>

import Character from'@/components/Character.vue'
export default {
  name: "Characters",
  data(){
    return{
      characters: [],
      search: '',
      page: 1,
      pages: '',
      arrowsVisible: false
    }
  },
  components: {
    Character
  },
  mounted: function(){
    this.fetchCharacters()
  },
  methods:{
        async fetchCharacters(actualPage){
          try {
            let {data} = await this.axios(`https://rickandmortyapi.com/api/character/?page=${actualPage}&name=${this.search}`);
            this.characters = data.results
            this.pages = data.info.pages
            this.arrowsVisible = true
          }
          catch(e) {
            console.log(e, 'Error')
          }
        },
        showAll(){
          this.page = 1
          this.search = ''
          this.fetchCharacters(this.page)
        },
        searchCharacters(){
          if(this.search !== ''){
            this.characters = []
            this.page = 1
            this.fetchCharacters(this.page)
          }  
        },
        changePageDown(){
          if(this.page > 1){
            this.page--
            this.characters = []
            this.fetchCharacters(this.page)
          }
        },
        changePageUp(){
          if(this.page < this.pages){
            this.page++
            this.characters = []
            this.fetchCharacters(this.page)
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
    &_arrows{
      width: 150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
    }
    &_arrow{
      width: 15%;
      margin: 0;
    }

    &_container{
      display: flex;
      flex-direction: column;
      width: 375px;
      margin: 10px auto;
    }
    @media (min-width: 768px) {
      &_container {
        width: 750px;
        flex-direction: row;
        flex-wrap: wrap; 
      }
    }
    @media (min-width: 1280px) { 
       &_container {
        width: 1100px;
       }
    }
    @media (min-width: 1450px) { 
       &_container {
        width: 1450px;
      }
    }
  }
</style>
