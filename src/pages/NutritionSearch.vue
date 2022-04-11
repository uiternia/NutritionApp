<template>
    <v-container>
      <v-row class="justify-center">
    <v-btn @click='search' elevation="2">
     カロリーの例を見てみる(一般的な1人前)
    </v-btn>
      </v-row>

      <v-row class="justify-center">
     <p class="mt-8" v-for="food in foodsCalorie" :key="food.id">
       {{food.name}} カロリー: {{food.calorie}}kcal 炭水化物: {{food.carbon}}g
       タンパク質: {{food.protein}}g 脂質: {{food.fat}}g
       <v-divider></v-divider>
     </p>
      </v-row>

     <v-row class="justify-center"> 
    <table>
      <tr>
          <td colspan="3">
            <v-text-field class="mt-6" multiple outlined dense type="text" id="output" value="0" v-model="result"></v-text-field>
          </td>
          <td>
              <v-btn value="c" @click="calculate('c')">C</v-btn>
          </td>
      </tr>
        <tr v-for="row in items" :key="row.index">
             <td v-for="column in row" :key="column.index">
                 <v-btn v-on:click="calculate(column)">{{column}}</v-btn>
            </td>
        </tr>
    </table>
     </v-row>
    
      <form @submit.prevent="addFoodList">
    <v-row class="justify-center mt-12">
     <h3>料理のカロリー追加する</h3>
    </v-row>
       <v-row>
        <v-col cols="12">
        <v-text-field
          v-model="foods.name"
          :rules="nameRules"
          label="料理名">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
          v-model.number="foods.calolie"
          hint="半角数字で入力してください"
          label="カロリー(kcal)">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
          v-model.number="foods.fat"
          hint="半角数字で入力してください"
          label="脂質(g)">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
          v-model.number="foods.carbon"
          hint="半角数字で入力してください"
          label="炭水化物(g)">
          </v-text-field>
        </v-col>
         <v-col cols="12">
          <v-text-field
          v-model.number="foods.protein"
          hint="半角数字で入力してください"
          label="タンパク質(g)">
          </v-text-field>
        </v-col>
        <v-btn
        class="mr-4"
        type="submit"
      >
        追加する
      </v-btn>
      </v-row>
      </form>
    </v-container>
</template>

<script>
export default {
  name: 'FoodsSearch',
  data(){
    return {
      result:'0',
            items:[
                ['7','8','9','/'],
                ['4','5','6','*'],
                ['1','2','3','-'],
                ['0','.','+','='],
            ],
      foodsCalorie:[],
      foods: {
        name: '',
        calolie: 0,
        protein: 0,
        fat: 0,
        carbon: 0,
      },
      keyword: '',
    nameRules: [
        v => !!v || '料理名を入力してください',
        v => v.length <= 10 || '10文字以内で入力してください',
      ],
    }
  },
  methods: {
    addFoodList(){
      this.$emit('add-food-list',this.foods)
    },
    async search(){
      this.foodsCalorie = []
      const url = 'https://calorie-api.can.canonic.dev/api/calorieApis'
      //console.log(url)
      const response = await fetch(url)
      .then(response => response.json())
      //console.log(response.data)
      for(let food of response.data){
        let name = food.name
        let calorie = food.calorie
        let fat = food.fat
        let carbon = food.carbon
        let protein = food.protein
        this.foodsCalorie.push({
          name: name,
          calorie: calorie,
          fat: fat,
          carbon: carbon,
          protein: protein
        })
      }
    },
     calculate:function(cmd){
                if(cmd == '='){
                    this.result = eval(this.result);
                }else if(cmd == 'c'){
                    this.result = '0';
                }else if(this.result == '0'){
                    this.result = cmd;
                }else{
                    this.result += cmd;
                }
            }  
        
  },
  
}
</script>

<style>

</style>