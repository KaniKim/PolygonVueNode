<template>
    <v-layout>
        <v-app-bar
                color="gray"
                density="comfortable"
                elevation=1000
                style="height: 75px"
        >
            <v-app-bar-nav-icon size="large" @click.stop="drawer = !drawer">
                <v-icon size="40" class="mdi mdi-menu"
                        style="margin-top: 10px"></v-icon>
            </v-app-bar-nav-icon>
            <v-avatar size="45" style="margin-top: 10px" :tile="true">
                <v-img  v-bind:src="circle_life" />
            </v-avatar>
            <v-app-bar-title class="justify-center">
                <v-row justify="center" align="center">
                    <nuxt-link to="/">
                    <v-avatar size="90"
                              style="margin-top: 20px;"
                              :tile="true">
                        <v-img  v-bind:src="circle_home" />
                    </v-avatar>
                    </nuxt-link>
                </v-row>
            </v-app-bar-title>
            <button v-if="!activated" v-on:click="connect">
                <img style="width: 100px; height: 100px; margin-top: 20px;
                margin-right: 15px;"
                     src="../public/image/Login.png"/>
            </button>
            <button v-if="activated" v-on:click="disconnect">
                <img style="width: 100px; height: 100px; margin-top: 20px;
                margin-right: 15px;"
                     src="../public/image/user_ID.png"/>
            </button>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            location="left"
            temporary
        >
            <br/>
            <v-list
                style="margin-top: 10px;"
                v-for="(item, i) in about" key="{{i}}"
            >
                &nbsp;
                &nbsp;
                <v-icon left="true" size="default" style="margin-top: -3px;">
                    {{item.link}}</v-icon>
                &nbsp;
                <span
                    style="font-size: 18px;">{{item.description }}</span>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>
<script>
export default {
  data() {
    return {
      circle_life: "/image/Logo.png",
      circle_login: "/image/Login.png",
      circle_home: "/image/Home.png",
        circle_log: "/image/user_ID.png",
      drawer: false,
      group: null,
      about: [
        {
          link: "mdi-information",
          description: "About Us",
        },
        {
          link: "mdi-twitter",
          description: "twitter",
        }
      ],
      items: [
        { title: "My Page"},
        { title: "Log Out"},
      ],
      activated: false,
    };
  },
  watch: {
    group () {
      this.drawer = false;
    },
  },
  methods: {
    disconnect: async function () {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {}
          }
        ]
      }).then(() => window.ethereum.request({
        method: "eth_requestAccounts"
      }));
        this.activated = false;
    },
    connect: async function() {
        await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [
                {
                    eth_accounts: {}
                }
            ]
        }).then(() => window.ethereum.request({
            method: "eth_requestAccounts"
        }));
        this.activated = true;
    }
  }
};
</script>