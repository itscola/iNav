<template>
  <WebBar/>

  <v-container>
    <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-star</v-icon>我的: </h1>
    
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="6" sm="2">
        <!-- <v-sheet class="sheet ma-1 pa-2">
          <v-row>
            <v-col cols="8">
              One of some columns
            </v-col>
            <v-col cols="4">
              <v-img src="./" alt="圆角图片" rounded></v-img>
            </v-col>
          </v-row>
        </v-sheet> -->

        <v-sheet class="sheet ma-1 pa-2">
          One of some columns
        </v-sheet>

      </v-col>
    </v-row>

    <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-plus-box</v-icon>重要: </h1>
    
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="6" sm="2">
        <v-sheet class="sheet ma-1 pa-2">
          One of some columns
        </v-sheet>
      </v-col>
    </v-row>


    <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-server</v-icon>VPS: </h1>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="6" sm="2">

        <v-sheet class="sheet ma-1 pa-2">
          One of some columns
        </v-sheet>
      </v-col>
    </v-row>

    <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-earth</v-icon>留学: </h1>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="6" sm="2">

        <v-sheet class="sheet ma-1 pa-2">
          One of some columns
        </v-sheet>
      </v-col>
    </v-row>

    <h1><v-icon style="font-size: 20px; margin-bottom: 5px; margin-right: 3px;">mdi-link-box-variant</v-icon>最近: </h1>
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="6" sm="2">

        <v-sheet class="sheet ma-1 pa-2">
          One of some columns
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>

  <Footer></Footer>
  

</template>

<script>
import WebBar from '@/components/WebBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'MainPage',
  data() {
    return {

    };
  },
  components: {
    WebBar,
    Footer
  }
}
</script>

<style scoped>
h1 {
  color: black;
  margin-left: 5px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif
}

.sheet {
  /* background-color: rgb(100, 181, 246); */
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}


</style>