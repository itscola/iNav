<template>
  <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-plus-box</v-icon>重要: </h1>
    
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="12" sm="2">
        <v-sheet class="sheet ma-1 pa-2">
          {{ content }}
        </v-sheet>
      </v-col>
    </v-row>

</template>

<script>
export default {
  name: 'ClassCard',
  data() {
    return {
      
    };
  },
  props: {
    content: {
      type: String,
      default: "One of some columns"
    },
    content: {
      type: String,
      default: "One of some columns"
    },
    url: {
      type: String,
      default: "/"
    },
    img: {
      type: String,
      default: "/"
    },
  },
  
}
</script>

<style scoped>

</style>