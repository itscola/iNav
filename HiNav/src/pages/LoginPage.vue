<template>
    <WebBar />
    <div class="container">

        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="5" sm="6">
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field v-model="email" label="Email" outlined required></v-text-field>
                                <v-text-field v-model="password" label="Password" outlined type="password"
                                    required></v-text-field>



                                <v-row>
                                    <v-col cols="2">
                                        <v-btn color="primary" dark type="submit">Sign in</v-btn>

                                    </v-col>

                                    <v-col cols="2" offset="8" style="margin-top: 6px;">
                                        <div style="min-width: 60px;">

                                            <p style="color: rgb(216, 27, 96); text-decoration: underline;">Sign up ?</p>

                                        </div>

                                    </v-col>
                                </v-row>
                            </v-form>


                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>


    </div>
    <!-- <Footer/> -->
</template>
  
<script>
import Footer from '@/components/Footer.vue';
import WebBar from '@/components/WebBar.vue';

export default {
    components: {
        WebBar,
        Footer
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            // 在这里编写登录逻辑，例如发送登录请求到服务器
            console.log('Email:', this.email);
            console.log('Password:', this.password);
            // 清空输入框
            this.email = '';
            this.password = '';
        }
    }
};
</script>
  
<style scoped>
.container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
  