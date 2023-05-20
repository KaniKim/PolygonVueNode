<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="5">
            <nuxt-link :to=wallet><v-img
                    v-bind:src="image_src" /></nuxt-link>

        </v-col>
    </v-row>
  <br>
    <br>
    <v-banner>Recently Added Invitation</v-banner>
  <CarouselRecent></CarouselRecent>
</template>
<script>

export default {
  data() {
    return {
      image_src: "/image/Landing_w_text.png",
      show: false,
      connected: false,
      wallet: "/"
    };
  },
  mounted() {
    this.wallet += window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      }).then((res) => {
        console.log(res);
        return res[0];
      })
  }
};
</script>

