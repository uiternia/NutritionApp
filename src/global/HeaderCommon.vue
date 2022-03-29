 <template>
  <div>
      <v-app-bar
        color="green lighten-1"
        dark
      >
      
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>栄養管理くん</v-toolbar-title>
  
       
  
       
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-title>栄養管理/計算
              </v-list-item-title>
            </v-list-item>
            <v-list-item to="/list">
              <v-list-item-title>カロリー表</v-list-item-title>
            </v-list-item>
            <v-list-item to="/search">
              <v-list-item-title>料理追加</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>

</style>