<template>
  <v-app-bar :elevation="10" color="rgb(21, 101, 192)">
    <v-app-bar-nav-icon style="color: whitesmoke;" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title
      style="font-size: 24px; color: whitesmoke; margin-left: 15px; font-weight: 1000;">iNav</v-app-bar-title>

    <template v-slot:append>
      <!-- 登录对话框的触发按钮 -->
      <v-btn icon style="color: whitesmoke;" @click="loginDialog = true"><v-icon>mdi-account</v-icon></v-btn>

      <v-btn icon style="color: whitesmoke;" @click="dialog = true"><v-icon>mdi-magnify</v-icon></v-btn>

      <v-btn icon style="color: whitesmoke;"><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </template>
  </v-app-bar>

  <!-- 登录对话框 -->
  <v-dialog v-model="loginDialog" hide-overlay persistent max-width="410px">
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

          <!-- <v-btn color="primary" dark type="submit">Sign in</v-btn>
            <p style="color: rgb(216, 27, 96); text-decoration: underline; cursor: pointer; margin-top: 8px; margin-left: 2px;" @click="goToSignUpPage">Sign up ?</p>
         -->

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
      loginDialog: false, // 控制登录对话框的显示
      email: '', // 登录表单的邮箱字段
      password: '', // 登录表单的密码字段
      searchText: '',
    };
  },
  methods: {
    login() {
      // 这里实现登录逻辑
      console.log('Email:', this.email, 'Password:', this.password);
      // 登录成功后关闭对话框
      this.loginDialog = false;
    },
    goToSignUpPage() {
      // 导航到注册页面的逻辑
    },
    goToAccountPage() {
      // 导航到账户页面的逻辑
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
