<template>
  <v-app>
    <HeaderCommon/>
    <v-main>
      <v-container>
      <router-view
      :foods="foods"
      @add-food-list="addFood"/>
      </v-container>
      
    </v-main>
    <FooterCommon/>
  </v-app>
</template>

<script>
import FooterCommon from './global/FooterCommon.vue';
import HeaderCommon from './global/HeaderCommon.vue';
const STRAGE_KEY = 'foods' 
export default {
  components: { HeaderCommon, FooterCommon,},
  name: 'App',
   data(){
    return {
      foods:[],
      parent_num: ''
    }
  },
  mounted() {
    if (localStorage.getItem(STRAGE_KEY)) {
      try {
        this.foods = JSON.parse(localStorage.getItem(STRAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STRAGE_KEY);
      }
    }
  },
  methods: {
    addFood(e) {
      this.foods.push({
        id: this.foods.length,
        name :e.name,
        calolie: e.calolie,
        protein: e.protein,
        carbon: e.carbon,
        fat: e.fat,
      });
      this.saveFoods();
      this.$router.push('/list')
      //this.goToListPage(this.foods.slice(-1)[0].id)
    },
    sendCalolie(){
   this.$router.push('/')
    },
    removeFood(x) {
      this.foods.splice(x, 1);
      this.saveFoods();
    },
    saveFoods() {
      const parsed = JSON.stringify(this.foods);
      localStorage.setItem(STRAGE_KEY,parsed)
    },
    goToListPage(id){
      this.$router.push(`/list/${id}`)
    },
    
  }
};
</script>
