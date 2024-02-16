<template>
  <v-app-bar :elevation="10" color="rgb(21, 101, 192)">
    <v-app-bar-nav-icon style="color: whitesmoke;" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title
      style="font-size: 24px; color: whitesmoke; margin-left: 15px; font-weight: 1000;">iNav</v-app-bar-title>

    

    <template v-slot:append>

      <v-btn icon style="color: whitesmoke;" @click="goToAccountPage"><v-icon>mdi-account</v-icon></v-btn>
      
      <v-btn icon style="color: whitesmoke;" @click="dialog = true"><v-icon>mdi-magnify</v-icon></v-btn>
      
      <v-btn icon style="color: whitesmoke;"><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </template>
  </v-app-bar>

  <v-dialog v-model="dialog" max-width="600px" style="top: 0;">
    <v-card tile>
      <v-card-text>
        <v-text-field 
          v-model="searchText"
          label="搜索..."
          dense
          single-line
          autofocus
          append-icon="mdi-magnify"
          class="search-input"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-navigation-drawer
    v-model="drawer"
    app
    right
    clipped
    :width="drawerHover ? 180 : 60"
    @mouseover="drawerHover = true"
    @mouseleave="drawerHover = false"
  >
    <v-list>

      <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="Dashboard"></v-list-item>

      <v-list-item prepend-icon="mdi-folder-home" title="Home" value="Home" @click="goToMainPage"></v-list-item>

      <v-list-item prepend-icon="mdi-forum" title="About" value="about" @click="goToAboutPage"></v-list-item>

      <v-list-item prepend-icon="mdi-github" title="Project" value="iNav" @click="goToGithubPage"></v-list-item>

      

      <v-list-item prepend-icon="mdi-transition-masked" title="Theme" value="Theme"></v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      drawerHover: false,
      dialog: false,
      dialog: false,
      searchText: '',
    };
  },
  methods: {
    goToAccountPage() {
      this.$router.push('/login');
    },
    goToMainPage() {
      this.$router.push('/');
    },
    goToAboutPage() {
      window.open('https://witcola.top', '_blank');
    },
    goToGithubPage() {
      window.open('https://github.com/itscola/iNav', '_blank');
    }
  }
}
</script>

<style>
.v-navigation-drawer--right {
  top: 64px;
}


</style>
