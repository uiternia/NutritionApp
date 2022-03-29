<template>
<div>
<v-row class="my-4"> 
<v-btn class="mr-auto" @click="deleteFood" color="orange" elevation="2">
  全て消去する
</v-btn>
<v-btn class="ml-auto" @click="goToSearchPage" elevation="2">
  料理を追加する
</v-btn>
</v-row>

  <v-data-table 
  mobile-breakpoint
  :headers="headers" 
  :items="foods"
  disable-sort
  disable-pagination
  hide-default-footer
  >
  <template v-slot:body="{ items: foods}">
  <tbody>
    <tr v-for="(food, index) in foods" :key="index">
      
      <td><v-checkbox :value="food" v-model="selectFood"></v-checkbox></td>
      <td>{{food.name}}</td>
      <td>{{food.calolie}}kcal</td>
      <td>{{food.carbon}}g</td>
      <td>{{food.protein}}g</td>
      <td>{{food.fat}}g</td>
    </tr>
  </tbody>
  </template>
  </v-data-table>
<v-divider></v-divider>
   <v-row class="mt-4" justify="center">
      <p class="mr-4">カロリー: {{totalCalolie}}kcal</p>
      <p class="mr-4">炭水化物: {{totalCarbon}}g</p>
      <p class="mr-4">タンパク質: {{totalProtein}}g</p>
      <p>脂質: {{totalFat}}g</p>
  </v-row> 
<v-row class="justify-center mt-4">
<v-btn @click='sendDetail' elevation="2">
  適正カロリーと比較してみる
</v-btn>
</v-row>
  </div>
</template>


<script>
export default {
  name: 'NutritionList',
  props:{
    foods:Array
  },
  data(){
    return{
    selectFood: [],
    headers: [
     {text:'今日の食事',value:''},
     {text:'料理',value:'name'},
     {text:'カロリー',value:'calorie'},
     {text:'炭水化物',value:'carbon'},
     {text:'タンパク',value:'protein'},
     {text:'脂質',value:'fat'},
   ],
  }
  },
  methods:{
    deleteFood(){
      localStorage.removeItem('foods')
      window.location.reload();
      console.log(this.selectFood)
    },
    goToSearchPage(){
      this.$router.push('/search')
    },
    sendDetail(){
      this.$router.push({
        name:'NutritionTop',
        params:{
          totalCalolie: this.totalCalolie,
          totalProtein: this.totalProtein,
          totalCarbon: this.totalCarbon,
          totalFat: this.totalFat
        }
      })
    },
  },
  computed:{
    totalCalolie(){
     return this.selectFood.reduce(
       (sum, i) => sum + (i.calolie || 0),
       Number()
     );
   },
   totalProtein(){
     return this.selectFood.reduce(
       (sum, i) => sum + (i.protein || 0),
       Number()
     );
   },
   totalFat(){
     return this.selectFood.reduce(
       (sum,i) => sum + (i.fat || 0),
       Number() 
     );
   },
   totalCarbon(){
     return this.selectFood.reduce(
       (sum, i) => sum + (i.carbon || 0),
       Number()
     );
   },
  }    
}
</script>

<style>

</style>