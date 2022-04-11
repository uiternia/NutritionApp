<template>
<v-app>
    <v-container>
      <v-row class="justify-center mt-4">
       <p>自分の1日の適正栄養量とBMIを計算してみましょう!</p>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="hight"
            label="身長(cm)"
            hint="半角数字で入力してください"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="weight"
            label="体重(kg)"
            hint="半角数字で入力してください"
            required
          ></v-text-field>
        </v-col>
      </v-row>  

  <v-btn class="my-10" block @click="bmiFigureOut">
    自分の適正栄養量を計算する
  </v-btn>

<v-row class="justify-center" v-show="!totalCalolie">
<p>＊料理追加ページで普段食べているものを追加しましょう！</p>
</v-row>

<v-row class="justify-center mx-auto" v-show="!totalCalolie">
<p>＊カロリーページで今日食べた料理を選択して比較ボタンを押すとこのページに今日の摂取栄養量が表示されます!</p>
</v-row>

<v-row class="justify-center mb-4" v-if="totalCalolie">
<h3>今日の摂取栄養量</h3>
</v-row>

 <!-- <v-divider class="mb-8"></v-divider> -->
<v-row class="justify-center" v-if="totalCalolie">
  <p class="mr-4">カロリー: {{totalCalolie}}kcal</p>
  <p class="mr-4">炭水化物量: {{totalCarbon}}g</p>
  <p class="mr-4">脂質: {{totalCarbon}}g</p>
  <p>タンパク質: {{totalProtein}}g</p>
</v-row>

<v-row class="justify-center mt-8" v-if="resultWeight">
<h3>1日の運動量別適正栄養量</h3>
</v-row>
<v-row v-if="resultWeight">
  <v-col>
<v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
           適正栄養量
          </th>
          <th class="text-left">
            運動をあまりしなかった
          </th>
          <th class="text-left">
            運動を少しでも行なった
          </th>
          <th class="text-left">
            運動を行なった
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>カロリー量</td>
          <td v-if="resultEnergyS">{{resultEnergyS}}kcal</td>
          <td v-if="resultEnergyM">{{resultEnergyM}}kcal</td>
          <td v-if="resultEnergyL">{{resultEnergyL}}kcal</td>
        </tr>

        <tr>
          <td>炭水化物量</td>
          <td v-if="resultCarbonS">{{resultCarbonS}}g</td>
          <td v-if="resultCarbonM">{{resultCarbonM}}g</td>
          <td v-if="resultCarbonL">{{resultCarbonL}}g</td>
        </tr>

        <tr>
          <td>タンパク質量</td>
          <td v-if="resultProteinS">{{resultProteinS}}g</td>
          <td v-if="resultProteinM">{{resultProteinM}}g</td>
          <td v-if="resultProteinL">{{resultProteinL}}g</td>
        </tr>

        <tr>
          <td>脂質量</td>
          <td v-if="resultFatS">{{resultFatS}}g</td>
          <td v-if="resultFatM">{{resultFatM}}g</td>
          <td v-if="resultFatL">{{resultFatL}}g</td>
        </tr>
      </tbody>
  </v-simple-table>
  </v-col>
</v-row>

<v-row v-if="result" class="justify-center my-4">
<h3>あなたの適正体重/BMI</h3>
</v-row>
<v-divider v-if="result" class="mb-8"></v-divider>
<v-row v-if="result" class="justify-center">
   <p class="text-md-h5">
    ①あなたのBMIは : {{result}} です
   </p>
   <p class="text-md-h5 ml-4">
    ②あなたの適正体重は :
    {{resultWeight}}kg
    です
   </p>
</v-row>

    </v-container>
</v-app>
</template>


<script>
export default {
  props:{
    totalCalolie: Number,
    totalFat: Number,
    totalProtein: Number,
    totalCarbon: Number,
  },
  name: 'NutritionTop',
  data(){
    return{
      hight: '',
      weight: '',
      result: '',
      resultWeight: '',
      resultEnergyS: '',
      resultEnergyM: '',
      resultEnergyL: '',
      resultProteinS: '',
      resultProteinM: '',
      resultProteinL: '',
      resultCarbonS: '',
      resultCarbonM: '',
      resultCarbonL: '',
      resultFatS: '',
      resultFatM: '',
      resultFatL: '',
    }
  },
 
  methods: {
    bmiFigureOut () {
         this.hightM = this.hight / 100
         this.result = Math.round(this.weight / (this.hightM * this.hightM) * 10)/10
         this.resultWeight = Math.round((this.hightM * this.hightM) * 22 * 10) / 10 
         this.resultEnergyS = Math.round(this.resultWeight * 25)
         this.resultEnergyM = Math.round(this.resultWeight * 30)
         this.resultEnergyL = Math.round(this.resultWeight * 35)
         this.resultProteinS = Math.round(this.weight * 0.8 * 10)/10
         this.resultProteinM = Math.round(this.weight * 1 * 10)/10
         this.resultProteinL = Math.round(this.weight * 1.2 * 10)/10
         this.resultCarbonS = Math.round(this.resultEnergyS * 0.55 / 4 * 10)/10
         this.resultCarbonM = Math.round(this.resultEnergyM * 0.55 / 4 * 10)/10
         this.resultCarbonL = Math.round(this.resultEnergyL * 0.55 / 4 * 10)/10
         this.resultFatS = Math.round(this.resultEnergyS / 5 / 9 * 10)/10
         this.resultFatM = Math.round(this.resultEnergyM / 5 / 9 * 10)/10
         this.resultFatL = Math.round(this.resultEnergyL / 5 / 9 * 10)/10
  },
}
}
</script>