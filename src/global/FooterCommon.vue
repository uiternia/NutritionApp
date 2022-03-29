<template>
  <v-footer
     color="green lighten-1"
        dark
  >
    <v-row
      justify="center"
      no-gutters
    >
      
      <v-col
        class="green lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>栄養管理くん</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>