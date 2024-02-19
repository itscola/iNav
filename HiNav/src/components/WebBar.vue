<template>
  <v-app-bar :elevation="10" color="rgb(21, 101, 192)">
    <v-app-bar-nav-icon style="color: whitesmoke;" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title
      style="font-size: 24px; color: whitesmoke; margin-left: 15px; font-weight: 1000;">iNav</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon style="color: whitesmoke;" @click="loginDialog = true"><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon style="color: whitesmoke;" @click="dialog = true"><v-icon>mdi-magnify</v-icon></v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" style="color: whitesmoke;"><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </template>
        <v-list style="padding-top: 0; padding-bottom: 0;">
          <v-list-item @click="addAction" class="icon-button">
            <v-icon color="rgb(122,122,122)">mdi-plus</v-icon>
          </v-list-item>
          <v-list-item @click="removeAction" class="icon-button">
            <v-icon color="rgb(122,122,122)">mdi-minus</v-icon>
          </v-list-item>
          <v-list-item @click="categoryAction3" class="icon-button">
            <v-icon color="rgb(122,122,122)">mdi-view-list</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>

  <v-dialog v-model="loginDialog" hide-overlay max-width="410px">
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="loginDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="Email" outlined required></v-text-field>
          <v-text-field v-model="password" label="Password" outlined type="password" required></v-text-field>
          <v-row justify="space-between" align="center" no-gutters class="mx-0">
            <v-col cols="auto">
              <v-btn color="primary" dark type="submit">Sign in</v-btn>
            </v-col>
            <v-col cols="auto">
              <p style="color: rgb(216, 27, 96); text-decoration: underline; cursor: pointer; margin-top: 0; margin-bottom: 0;"
                @click="goToSignUpPage">Sign up ?</p>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog" max-width="600px" style="top: 0;">
    <v-card tile>
      <v-card-text>
        <v-text-field v-model="searchText" label="搜索..." dense single-line autofocus append-icon="mdi-magnify"
          class="search-input"></v-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="addDialog" hide-overlay max-width="500px">
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Add New Link</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="addDialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field v-model="newLink.url" label="URL" outlined required></v-text-field>
        <v-text-field v-model="newLink.name" label="Link Name" outlined required></v-text-field>
        <v-select v-model="newLink.category" :items="categories" label="Category" outlined required></v-select>
        <v-text-field v-model="newLink.weight" label="Weight" type="number" outlined required></v-text-field>
        <v-switch v-model="newLink.isPrivate" label="Private?" color="primary" outlined></v-switch>
        <v-textarea v-model="newLink.description" label="Description" outlined></v-textarea>
        <v-row class="pa-2">

          <v-col cols="3" style="padding-left: 4px;">
            <v-btn color="primary" dark @click="addLink">Add</v-btn>
          </v-col>

          <v-col cols="3" offset="4" style="padding-right: 20px;">
            <v-btn color="green darken-1" text @click="analyzeLink">Analyze</v-btn>
          </v-col>

          <v-col cols="2" style="padding-left: 5px; padding-right: 3px;">
            <v-btn color="blue darken-1" text @click="resetForm">Reset</v-btn>
          </v-col>
          


        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</v-dialog>

  <v-navigation-drawer v-model="drawer" app right clipped :width="drawerHover ? 180 : 60" @mouseover="drawerHover = true"
    @mouseleave="drawerHover = false">
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
      loginDialog: false,
      email: '',
      password: '',
      searchText: '',
      addDialog: false,
      newLink: {
        url: '',
        name: '',
        category: '',
        weight: 0,
        isPrivate: false,
        description: '',
      },
      categories: ['Category 1', 'Category 2', 'Category 3'],
      
    };
  },
  methods: {
    login() {
      console.log('Email:', this.email, 'Password:', this.password);
      this.loginDialog = false;
    },
    goToSignUpPage() {

    },
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
    },
    addAction() {
      this.addDialog = true;
    },
    addLink() {
      console.log('Adding link:', this.newLink);
      this.addDialog = false;
      this.resetForm();
    },
    analyzeLink() {
      console.log('Analyzing link:', this.newLink.url);
    },
    resetForm() {
      this.newLink = {
        url: '',
        name: '',
        category: '',
        weight: 0,
        isPrivate: false,
        description: '',
      };
    },
  }
}
</script>

<style>
.v-navigation-drawer--right {
  top: 64px;
}

.icon-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

}

.icon-button:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
